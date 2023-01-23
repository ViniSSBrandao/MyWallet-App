import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import GlobalStyle from "../../../Styles/GlobalStyle";
import URL from "../../ApiUrl/Url";
import AuthContext from "../../Contexts/Authcontext";


export default function (){
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()
    const {id} = token
    console.log(token, id)

    const [entries, setEntries] = useState()
    let [valuesArray, setValuesArray] = useState(0)
    
    console.log(entries)

    useEffect( ()=>{
        const config = {
            headers: {
                Authorization: token.token,
                id: id
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
        <h2>Olá, {token.name}</h2> 
        <SVG onClick={() => navigate("/")}><img src="./exit.svg"/></SVG>
        <RegisteredEntries>
           <EntrieContainer>
            {entries.map((n)=> <Entrie><p style={{color:"#C6C6C6"}}>{n.date}</p><p>{n.description}</p>   {n.value > 0 ? <p style={{color:"#03AC00"}}>{n.value.toFixed(2)}</p> : <p style={{color:"#C70000"}}>{-(n.value.toFixed(2))}</p>}</Entrie>)}
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
                <button onClick={() => navigate("/nova-entrada")}> <img src="./Plus.svg"/> <Box><h2>Nova entrada</h2></Box></button>
            </div>
            <div>
                <button onClick={() => navigate("/nova-saida")}><img src="./Minus.svg"/> <Box><h2>Nova saida</h2></Box></button>
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
const SVG = styled.div`
 
    width: 25px;
    position: absolute;
    right: 7%;
    top: 28px;

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
    padding-bottom: 50px;
    button{
    width: 156px;
    height: 114px;
    border: none;
    background: #A328D6;
    border-radius: 5px;
        box-sizing: border-box;
}
    img{
        position: relative;
        right: 30px;
    }
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

const Box = styled.div`
    width: 40px;
`