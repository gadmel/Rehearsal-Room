import styled from 'styled-components'

export const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   height: 70%;
   width: 70%;
   max-height: 800px;
   min-height: 400px;
   max-width: 400px;
   padding: 8px;
   border: 2px solid beige;
   box-shadow: 8px 5px 6px #0a2a45;

   justify-self: center;
   align-self: center;
   position: absolute;
   grid-area: stage;
   z-index: 100;

   align-items: flex-start;
   justify-content: flex-end;
`
export const InputField = styled.input`
   background-color: beige;
   font-size: 1em;
   display: flex;
   flex-grow: 1;
   max-width: 100%;
   border-radius: 2px;
   padding: 2px;
`
export const BandSelector = styled.select`
   background-color: beige;
   font-size: 1em;
   display: flex;
   flex-grow: 1;
   max-width: 100%;
   border-radius: 2px;
   padding: 2px;
   margin-bottom: 8px;
`
export const BandSelectOption = styled.option`
   position: relative;
   background-color: beige;
   font-size: 1em;
   height: 16px;
   display: flex;
   padding: 2px;
`
export const Submit = styled.button`
   display: flex;
   width: 100%;
   flex-grow: 1;
   background-color: beige;
   color: #135285;
   font-size: 1.4em;
   font-weight: bold;
   justify-content: center;
   align-self: flex-end;
   padding: 2px;
   border-radius: 6px;
   &:hover {
      color: beige;
      background: #5c9cd1;
   }
`

export const Row = styled.div`
   display: flex;
   background: transparent;
   margin: 0;
   width: 100%;
   justify-content: space-between;
`

export const RowFlexStart = styled(Row)`
   justify-content: flex-start;
`

export const CheckboxRow = styled.div`
   display: flex;
   background: transparent;
   margin: 0;
   width: 100%;
   justify-content: flex-start;
`
export const CheckboxDescription = styled.p`
   margin: 4px;
   font-size: 0.9rem;
`
export const Column = styled.div`
   display: flex;
   flex-direction: column;
   background: transparent;
   width: 100%;
   margin: 0;
`

export const Tag = styled.li`
   display: inline-block;
   font-size: 0.8em;
   margin: 4px 8px 8px 0;
   padding: 1px 6px;
   background: beige;
   border: 2px solid #1d80d1;
   border-radius: 3px;
   color: #135285;
   font-weight: bold;
`

export const AddNewMembersInstrument = styled.button`
   display: flex;
   margin-left: 8px;
   padding: 4px;
   border: 0;
   font-size: 1.5em;
   color: beige;
   font-weight: bold;
   border-radius: 50%;
   &:hover {
      color: #135285;
      background: beige;
   }
`
export const CloseForm = styled.div`
   position: absolute;
   right: 12px;
   display: flex;
   font-size: 1.9em;
   font-weight: bold;
   background-color: transparent;
   color: beige;
   margin-right: 8px;
   margin-top: 8px;
   padding: 4px;
   border-radius: 50%;
   &:hover {
      border: 2px;
      color: #135285;
      background: beige;
   }
`
export const FormTitle = styled.div`
   display: flex;
   width: 100%;
   border: 2px solid;
   border-color: beige;
   justify-content: center;
   font-size: 1.4em;
`
