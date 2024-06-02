import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    gap: 30px;
    padding: 10px;

    img {
        width: 50px;
        transition: .2s ease;
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: .2s ease;
    }
`

export const NavButton1 = styled.p`
        color: white;
        font-size: 20px;
`

export const NavButton2 = styled.p`
        color: white;
        font-size: 20px;
`