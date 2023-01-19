import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import GlobalStyle from "../../Styles/GlobalStyle";


export default function() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <Container>
      <GlobalStyle />
      <div><h1>MyWallet</h1></div>
      <form onSubmit={handleSubmit(onSubmit)}>
         <div><input placeholder="email" id='email' name="email" type="email" {...register("email", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("password", { required: true })} /></div>
        {errors.password && <div><h3>Digite sua senha correta!</h3></div>}

    <SubmitBtn> <input value="Entrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
      </form>
        {/* <Link to="/cadastro"><LoginHook>Primeira vez? Cadastre-se!</LoginHook></Link> */}
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
    text-decoration: underline;
`