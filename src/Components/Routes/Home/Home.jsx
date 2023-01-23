import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import GlobalStyle from "../../../Styles/GlobalStyle";

export default function (){

    const navigate = useNavigate()

    return(
        <>
        <GlobalStyle/>
        <Container>
        <h2>Olá, fulaninho</h2>
        <RegisteredEntries>
            {/* <NoEntry><h3>Não há entradas ou saidas</h3></NoEntry> */}
            <Entrie><p style={{color:"#C6C6C6"}}>30/02</p><p>asdasdasdasdsa</p><p style={{color:"#03AC00"}}>20,55</p></Entrie>
            <Saldo>
                <h4>
                    <div>saldo</div>
                </h4>
                <h4>
                    <div style={{color: " #03AC00"}}>R$ 2000,24</div>
                </h4>
            </Saldo>
        </RegisteredEntries>
        <EntrieOptions>
            <div>
                <button onClick={() => navigate("/nova-entrada")}> <img src="./Plus.svg"/> <h2>Nova entrada</h2></button>
            </div>
            <div>
                <button onClick={() => navigate("/nova-saida")}><img src="./Minus.svg"/> <h2>Nova saida</h2></button>
            </div>
        </EntrieOptions>
        </Container>

        </>
    )
}

const Container = styled.div`
width: 86%;
display: flex;
flex-direction: column;
margin: auto;
`

const RegisteredEntries = styled.div`
    background-color: white;
    height: 446px;
    width: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 11px;
    padding-right: 11px;
    box-sizing: border-box;
`

const EntrieOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    button{
    width: 156px;
    height: 114px;
    border: none;
    background: #A328D6;
    border-radius: 5px;}
`

const NoEntry = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`
const Entrie = styled.span`
    display: flex;
    justify-content: space-between;
`

const Saldo = styled.div`
position: relative;
bottom: 15px;
width: 100%;
display: flex;
justify-content: space-between;
`