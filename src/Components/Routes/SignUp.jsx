import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import GlobalStyle from "../../Styles/GlobalStyle";
import URL from "../ApiUrl/Url";


export default function() {
    const navigate = useNavigate()
  
    console.log(URL)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    function onSubmit(data){ 
      console.log(data)
      const submitData = axios.post(`${URL}sign-up`, data)
      submitData.then((res) =>{
              navigate('/')
              })
      
      submitData.catch((err) => {
          alert(err.response.data.message)
      })
      }
  
    console.log(watch("example")); 
  
    return (
      <Container>
      <GlobalStyle />
      <div><h1>MyWallet</h1></div>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <div><input placeholder="Nome " id='name' name="name" type="text" {...register("name", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu nome completo</h3></div>}

        <div><input placeholder="email" id='email' name="email" type="email" {...register("email", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="senha" id='password' name="password" type="password" {...register("password", {required:true})} /></div>
        {errors.email && <div><h3>Digite Sua senha</h3></div>}
        
        <div><input id='pwd' name="password confirm" placeholder="confirme sua senha" type="password" {...register("confirmPassword", { required: true })} /></div>
        {errors.password && <div><h3>Digite sua senha</h3></div>}
    <SubmitBtn> <input value="Entrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
      </form>
        <Link to="/" style={{textDecoration: 'none'}}><LoginHook>Ja estã cadastrado? Faça seu login!</LoginHook></Link>
      </Container>
    );
  }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 65px;
    h1{
        position: relative;
        /* left: 115px; */
    }
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 15px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        }
    img{
    margin-top: 80px;
    margin-bottom: 80px ;
    }
`

const SubmitBtn = styled.div`
    input{
        border: none;
    }
`
const LoginHook = styled.div`
    margin-top: 25px;
    color:white;
    font-size: 14px;
    text-decoration: none;
`