import styled from "styled-components";

export const Buttons = styled.button`
width:5rem;
height: 2rem;;
display:flex;
justify-content: center;
align-items: center;
margin:20px;
background-color: transparent;
border: transparent;
border-radius: 15px;
box-shadow: 1px 8px 22px -13px rgba(4, 4, 4, 0.6);
transition: 250ms;
&:nth-last-child(1){
  background-color: red;
}
&:nth-last-child(3){
  background-color: green;
}
&:hover {
  box-shadow: 1px 9px 22px 0px rgba(4, 4, 4, 0.6);
  transform:scale(1.25)  }
`;