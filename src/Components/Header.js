import styled from "styled-components"
import LogoPng from "../assets/logo.png"

export default function Header() {
    return (
        <>
            <DivHeader>
                <Logo src={LogoPng}/>
                <p>ZapRecall</p>
            </DivHeader>
        </>
    )
}

const DivHeader = styled.div`
    display: flex;
    width: 100vw;
    height: 20vh;
    justify-content:center;
    align-items: center;
    margin: 2vh 0;

    p {
        font-family: 'Righteous', cursive;
        font-size: 36px;
        color: #ffffff;
        line-height: 45px;
        text-align: center;
        align-items: center;
        padding: 15px 25px;
    }
`

const Logo = styled.img`
    width:52px;
    height: 60px;
`