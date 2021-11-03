import styled from "styled-components";

export const DivRestaurants = styled.div`
    display: grid;
    padding: 0 8px;
    border: 1px solid black;
    width: 90%;
`
export const DivImg = styled.div`
    max-height: 40vh;
    max-width: 90vw;
    img{
        object-fit: contain;
        max-height: 80%;
        width: 100%;
    }
`