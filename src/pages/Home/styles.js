import styled from "styled-components";
// import { theme } from '../../styles/Theme;'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
            padding: 20px 0;
        }
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        user-select: none;
    }
`

export const Social = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Left = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-right: 5px solid black;

    @media only screen and (max-width: 768px) {
            border-right: 0;
            border-bottom: 5px solid black;
        }
`

export const ImgLeft = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("./src/assets/img/left.jpg");
    background-position: center;
    background-size: cover;
    transition: .3s ease;
    user-select: none;

    h1 {        
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        color: white;

        @media only screen and (max-width: 768px) {
            font-size: 20px;
        }

    }

    p {
        font-size: 15px;
        font-weight: 400;
        font-style: italic;
        text-align: center;
        color: white; 
        
        @media only screen and (max-width: 768px) {
            font-size: 10px;
        }
    }

     &:hover {
            cursor: pointer;
            transition: .3s ease;
            transform: scale(1.05);
        }
`

export const Right = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-left: 5px solid black;

    @media only screen and (max-width: 768px) {
            border-left: 0;
            border-top: 5px solid black;
        }
`

export const ImgRight = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("./src/assets/img/right.jpg");
    background-position: center;
    background-size: cover;
    transition: .3s ease;
    user-select: none;

    h1 {
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        color: white;

        @media only screen and (max-width: 768px) {
            font-size: 20px;
        }

    }

    p {
        font-size: 15px;
        font-weight: 400;
        font-style: italic;
        text-align: center;
        color: white; 
        
        @media only screen and (max-width: 768px) {
            font-size: 10px;
        }
    }

     &:hover {
            cursor: pointer;
            transition: .3s ease;
            transform: scale(1.05);
        }
`