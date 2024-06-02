import { Link } from 'react-router-dom'

import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { Container, Info, Logo, Social, Left, Right, ImgLeft, ImgRight } from './styles'


export const Home = () => {
    return (
        <Container>
            <Left>
                <ImgLeft>
                    <Link to='/video-games' ><h1>Video Games</h1></Link>
                    <p>Playstation, Xbox, Nintendo...</p>
                </ImgLeft>               
            </Left>
            <Info>
                <Logo>
                    <Link to="/" >
                        <img src="./src/assets/img/hcgames_logo.png" alt="HC GAMES logo" />
                    </Link>
                </Logo>
                <Social>
                    <Link to="https://www.instagram.com/hcgamesrc/" target="_blank" >
                        <FaSquareInstagram size={50} color="#f6d235" />
                    </Link>
                    <Link to="https://wa.me/5519997385515" target="_blank" >
                        <FaWhatsappSquare size={50} color="#f6d235" />
                    </Link>                    
                </Social>               
            </Info>
            <Right>
                <ImgRight>
                    <h1>Informática</h1>
                    <p>Computadores, Acessórios, Hardware...</p>
                </ImgRight>                
            </Right>
        </Container>
    )
}