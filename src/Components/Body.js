import Header from "./Header"
import Footer from "./Footer"
import Questions from "./Questions"
import styled from "styled-components"

export default function Body() {
    return (
        <>
            <DivBody>
                <Header/>
                <Questions/>
                <Questions/>
                <Footer/>
            </DivBody>
        </>
    )
}

const DivBody = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;
    display:flex;
    align-items:center;
    flex-direction: column;
`