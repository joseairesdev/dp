import styled from "styled-components";


export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`


export const ContainerForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 550px;
height: 400px;
background-color: white;
border-radius: 10px;


div{
    margin: 20px;
}
`

export const CardArea = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
 width: 100%;
 margin-top: 50px;
`