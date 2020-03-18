import React, { useRef } from 'react'
import {
  Form,
  Row,
  RowFlexStart,
  CheckboxRow,
  CheckboxDescription,
  Column,
  FormTitle,
  InputField,
  BandSelector,
  BandSelectOption,
  Tag,
  AddNewMembersInstrument,
  CloseForm,
  Submit,
} from './CreateFormStyledComponents.js'

function CreateForm({
  members,
  setMembers,
  postMember,
  newMembersInstruments,
  addNewMembersInstrument,
  removeNewMembersInstrument,
  resetNewMembersInstruments,
  bands,
  setBands,
  toggleForm,
}) {
  const newInstrumentInputRef = useRef()

  return (
    <Form onSubmit={createMember}>
      <CloseForm onClick={toggleForm}>
        <i className="fas fa-times-circle" style={{ background: '0' }}></i>
      </CloseForm>
      <FormTitle>
        <h3>Create Form</h3>
      </FormTitle>

      <InputField
        type="text"
        name="memberName"
        placeholder="New member's name"
        autoFocus
      />
      <Column>
        <BandSelector name="band">
          {bands.map(band => (
            <BandSelectOption value={band.value} key={band.value}>
              {band.name}
            </BandSelectOption>
          ))}
        </BandSelector>

        <InputField type="text" name="newBand" placeholder="new band" />
      </Column>
      <Row>
        <Column>
          <CheckboxDescription>Choose new member's roles:</CheckboxDescription>
          <Row>
            <CheckboxRow>
              <label htmlFor="administrator">
                <input
                  type="checkbox"
                  id="administrator"
                  name="administrator"
                  value="administrator"
                />
                Administrator
              </label>
            </CheckboxRow>
            <CheckboxRow>
              <label htmlFor="musician">
                <input
                  type="checkbox"
                  id="musician"
                  name="musician"
                  value="musician"
                />
                Musician
              </label>
            </CheckboxRow>
          </Row>
        </Column>
      </Row>
      <Row>
        <InputField
          type="text"
          name="newInstrument"
          placeholder="new instrument"
          ref={newInstrumentInputRef}
        />
        <AddNewMembersInstrument
          onClick={event => {
            event.preventDefault()
            newInstrumentInputRef.current.value &&
              addNewMembersInstrument(newInstrumentInputRef.current.value)
            newInstrumentInputRef.current.value = ''
            newInstrumentInputRef.current.focus()
          }}
        >
          <i className="fas fa-plus-circle" style={{ background: '0' }}></i>
        </AddNewMembersInstrument>
      </Row>
      <RowFlexStart>
        {newMembersInstruments.map(instrument => (
          <Tag
            key={instrument}
            onClick={event => {
              event.preventDefault()
              removeNewMembersInstrument(instrument)
            }}
          >
            {instrument}
          </Tag>
        ))}
      </RowFlexStart>

      <Submit type="submit">Create new member</Submit>
    </Form>
  )

  function createMember(event) {
    const formData = event.target
    event.preventDefault()

    const newId = validateId()
    const roles = collectRoles()
    const band = ascertainBand()

    const newMember = {
      id: newId,
      name: formData.memberName.value,
      band: band,
      roles: roles,
      instruments: newMembersInstruments,
      roomAsignment: 'RehearsalRoom_1',
      repetitionDayTime: [],
      avatar: '',
    }
    postMember(newMember).then(() => {
      setMembers([...members, newMember])
      resetNewMembersInstruments()
      toggleForm()
    })

    function collectRoles() {
      const rawRoles = [
        formData.administrator.checked
          ? formData.administrator.value
          : !formData.administrator,
        formData.musician.checked
          ? formData.musician.value
          : !formData.musician,
        !formData.administrator.checked && !formData.musician.checked
          ? 'guest'
          : false,
      ]
      return rawRoles.filter(Boolean)
    }

    function ascertainBand() {
      const bandIs = formData.band.value
        ? formData.band.value
        : formData.newBand.value
        ? formData.newBand.value
        : null
      return bandIs
    }

    // The developer is open to speak about more elagant solution for such validation. Code-reviewers welcomed!
    function validateId() {
      const membersIds = members.map(member => {
        return member.id
      })
      const suggestedNewId = Math.floor(Math.random() * (999 - 1) + 1)
      const validatedNewId = membersIds.includes(suggestedNewId)
        ? validateId()
        : suggestedNewId
      return validatedNewId
    }
  }
}
export default CreateForm
