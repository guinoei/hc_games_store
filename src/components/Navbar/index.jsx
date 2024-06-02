import { Link } from 'react-router-dom'

import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { Container, NavButton1, NavButton2 } from "./styles"


export const Navbar = () => {
    return (
        <Container>
            <Link to="/" >
                <NavButton1>VIDEO GAMES</NavButton1>
            </Link>
            <Link to="https://www.instagram.com/hcgamesrc/" target="_blank" >
                <FaSquareInstagram size={30} color='white' />
            </Link>
            <Link to="/" >
                <img src="./src/assets/img/hcgames_type.png" alt="HC GAMES logo" />
            </Link>
            <Link to="https://wa.me/5519997385515" target="_blank" >
                <FaWhatsappSquare size={30} color='white' />
            </Link> 
            <Link to="/" >
                <NavButton2>INFORMÁTICA</NavButton2>
            </Link>
        </Container>
    )

}