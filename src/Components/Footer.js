import styled from "styled-components"

export default function Footer() {
    return (
        <>
            <DivFooter>
                <p>0/4 CONCLUÍDOS</p>
            </DivFooter>
        </>
    )
}

const DivFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`