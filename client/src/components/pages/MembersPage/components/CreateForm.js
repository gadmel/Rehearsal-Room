import React from 'react'
import styled from 'styled-components'

function CreateForm({ members, setMembers, bands, setBands, toggleForm }) {
  return (
    <Form onSubmit={createMember}>
      <InputField
        type="text"
        name="memberName"
        placeholder="New member's name"
        autoFocus
      />
      <BandSelector name="band">
        {bands.map(band => (
          <BandSelectOption value={band.value} key={band.value}>
            {band.name}
          </BandSelectOption>
        ))}
      </BandSelector>
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

      <InputField type="text" name="newBand" placeholder="new band" />
      <InputField type="text" name="instrument" placeholder="new instrument" />
      <Submit type="submit">Create new member</Submit>
    </Form>
  )
  function createMember(event) {
    event.preventDefault()
    const formData = event.target
    const rawRoles = [
      formData.administrator.checked
        ? formData.administrator.value
        : !formData.administrator,
      formData.musician.checked ? formData.musician.value : !formData.musician,
      !formData.administrator.checked && !formData.musician.checked
        ? 'guest'
        : false,
    ]
    const newMember = {
      id: Math.floor(Math.random() * (999 - 1) + 1),
      name: formData.memberName.value,
      band: formData.band.value
        ? formData.band.value
        : formData.newBand.value
        ? formData.newBand.value
        : null,
      roles: rawRoles.filter(Boolean),
      instruments: [formData.instrument.value],
    }
    console.info(newMember)
    setMembers([...members, newMember])
    toggleForm()
  }
}
export default CreateForm

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 70%;
  padding: 8px;
  border: 2px solid beige;
  box-shadow: 8px 5px 6px #0a2a45;

  justify-self: center;
  align-self: center;
  position: absolute;
  grid-area: stage;
  z-index: 100;

  align-items: flex-start;
  justify-content: space-between;
`
const InputField = styled.input`
  background-color: beige;
  font-size: 0.8em;
  display: flex;
  flex-grow: 1;
  max-width: 49%;
  border-radius: 2px;
  padding: 2px;
`
const BandSelector = styled.select`
  background-color: beige;
  font-size: 0.8em;
  display: flex;
  flex-grow: 1;
  max-width: 49%;
  border-radius: 2px;
  padding: 2px;
`
const BandSelectOption = styled.option`
  position: relative;
  background-color: beige;
  font-size: 1em;
  height: 16px;
  display: flex;
  padding: 2px;
`
const Submit = styled.button`
  display: flex;
  width: 100%;
  flex-grow: 1;
  background-color: beige;
  color: #135285;
  font-size: 1.2em;
  font-weight: bold;
  justify-content: center;
  align-self: flex-end;
  padding: 2px;
  border-radius: 6px;
`

const Row = styled.div`
  display: flex;
  background: transparent;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`
const CheckboxRow = styled.div`
  display: flex;
  background: transparent;
  margin: 0;
  width: 100%;
  justify-content: flex-start;
`
const CheckboxDescription = styled.p`
  margin: 4px;
  font-size: 0.9rem;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  margin: 0;
`
