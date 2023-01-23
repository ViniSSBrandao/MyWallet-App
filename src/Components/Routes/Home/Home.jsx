import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import GlobalStyle from "../../../Styles/GlobalStyle";
import URL from "../../ApiUrl/Url";

export default function (){

    const navigate = useNavigate()

    const [entries, setEntries] = useState()
    let [valuesArray, setValuesArray] = useState(0)
    
    console.log(entries)

    useEffect( ()=>{
        const config = {
            headers: {
                Authorization: `cc46f6e4-e32f-45c6-9f00-a476d6432eb7`
            }
        }
        console.log(URL)
        const promise = axios.get(`${URL}home`, config)
        promise.then((res) => {setEntries(res.data), console.log(res.data), setValuesArray(res.data.map((n) => {setValuesArray(n.value), console.log(n.value)}))})
        promise.catch(console.log)
        
    } ,[]
    )
    
    
    
    console.log(valuesArray)    


    if(entries){
    return(
        <>
        <GlobalStyle/>
        <Container>
        <h2>Olá, fulaninho</h2>
        <RegisteredEntries>
           <EntrieContainer>
            {entries.map((n)=> <Entrie><p style={{color:"#C6C6C6"}}>{n.date}</p><p>{n.description}</p><p style={{color:"#03AC00"}}>{n.value > 0 ? n.value.toFixed(2) : -(n.value.toFixed(2))}</p></Entrie>)}
            </EntrieContainer>
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
    else{
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
    overflow: auto;
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

const EntrieContainer = styled.div`
    
`

const Saldo = styled.div`
position: relative;
bottom: 15px;
width: 100%;
display: flex;
justify-content: space-between;
`