import React from 'react'
import styled from 'styled-components'

function CreateForm() {
  const bands = [
    { value: '', name: 'no band' },
    { value: 'Nerull', name: 'Nerull' },
    { value: 'ToNe Dayzy', name: 'ToNe Dayzy' },
    { value: 'Lola', name: 'Lola' },
    { value: 'MUZOR', name: 'MUZOR' },
    { value: 'Inoplanepunks', name: 'Inoplanepunks' },
    { value: 'XYNior', name: 'XYNior' },
    { value: 'Frozen Waterfall', name: 'Frozen Waterfall' },
  ]
  return (
    <Form>
      <InputField
        type="text"
        name="memberName"
        placeholder="New member's name"
      />
      <BandSelector name="band">
        {bands.map(band => (
          <BandSelectOption value={band.value}>{band.name}</BandSelectOption>
        ))}
      </BandSelector>
      <Row>
        <Column>
          <CheckboxDescription>Choose new member's roles:</CheckboxDescription>
          <Row>
            <CheckboxRow>
              <input type="checkbox" id="administrator" name="administrator" />
              <label for="administrator">Administrator</label>
            </CheckboxRow>
            <CheckboxRow>
              <input type="checkbox" id="musician" name="musician" />
              <label for="musician">Musician</label>
            </CheckboxRow>
          </Row>
        </Column>
      </Row>

      <InputField type="text" placeholder="new band" />
      <InputField type="text" placeholder="new instrument" />
    </Form>
  )
}
export default CreateForm

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 70%;
  padding: 8px;

  justify-self: center;
  align-self: center;
  margin: 60px;
  position: absolute;
  grid-area: stage;
  z-index: 100;

  align-items: center;
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
  background-color: beige;
  font-size: 0.9em;
  height: 16px;
  display: flex;
  padding: 2px;
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
