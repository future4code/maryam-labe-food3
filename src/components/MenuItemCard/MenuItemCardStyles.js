import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const CardContainer = styled.div`
  width: 90vw;
  height: 9rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  margin: 0.5rem;
`

export const ImgWrapper = styled.img`
  width: 7rem;
  height: 9rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

export const TextContainer = styled.div`
  margin: 1rem;
`


export const BtnRemove = styled.button`
  color: #e8222e;
  background-color: white;
  border: 1px solid #e8222e;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`
export const BtnAdd = styled.button`
  background-color: white;
  border: 1px solid black;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`