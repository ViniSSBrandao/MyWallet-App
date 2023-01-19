import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import GlobalStyle from "../../../Styles/GlobalStyle";

export default function (){
    return(
        <>
        <GlobalStyle/>
        <Container>
        <h2>Olá, fulaninho</h2>
        <RegisteredEntries>
            <NoEntry><h3>Não há entradas ou saidas</h3></NoEntry>
        </RegisteredEntries>
        <EntrieOptions>
            <div>
                <button> <img src="./Plus.svg"/> <h2>Nova entrada</h2></button>
            </div>
            <div>
                <button> <img src="./Minus.svg"/> <h2>Nova saida</h2></button>
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
    justify-content: center;
    align-items: center;
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
width: 180px;
`