import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import colors from '../components/colors';

import Header from '../components/Header';
import UserContext from "../contexts/UserContext";

export default function checkOut(){
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const [name, setName] = useState("");
    const [cep, setCEP] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [state, setState] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [loading, setLoading] = useState(false);

    function getCepAddress(CEP){
        const request = axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
          request.then(handleAddress).catch((e) => console.log(e.status));
    }

    function handleAddress(response) {
        setNeighborhood(response.data.bairro);
        setCity(response.data.localidade);
        setStreet(response.data.logradouro);
        setState(response.data.uf);
        
    }

    function setUserInfo() {
        if(name === "" || cep === "" || city === "" || neighborhood === "" || state === "" || street === "" || number === "" || complement === "" || email === "" || cpf === ""){
            alert("preencha os dados corretamente");
            setLoading(false);
        }
        else{
            const userInfo = {
                name,
                cep,
                city,
                neighborhood,
                state,
                street,
                number,
                complement,
                email,
                cpf
            }
            setUser(userInfo);
            setLoading(false);
            history.push('/paymentMethod');
        }
    }

    function handleSubmit(e){
        e.preventDefault(); 
        setLoading(true);
        setUserInfo();
    }

    function handleCep(e){
        setCEP(e.target.value);
        var validacep = /^[0-9]{8}$/;
        if(e.target.value.length >= 8){
            if(validacep.test(e.target.value)) {
                getCepAddress(e.target.value);
            } else{
                alert("cep invalido");
            }
        }
    }

    return(
        <>
            <Form onSubmit={handleSubmit} >
            <Header />
                <CheckoutBody>
                    <Input placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder={"nome"} onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder={"CPF"} onChange={(e) => setCpf(e.target.value)}/>
                    <AdressContainer>
                        <Input placeholder={"CEP"} onChange={handleCep}/>
                        <Input placeholder={"Estado"} onChange={(e) => setState(e.target.value) } value={state}/>
                    </AdressContainer>
                    <AdressContainer>
                        <Input placeholder={"Cidade"} onChange={(e) => setCity(e.target.value)} value={city}/>
                        <Input placeholder={"Bairro"} onChange={(e) => setNeighborhood(e.target.value)} value={neighborhood}/>
                    </AdressContainer>
                        <Input placeholder={"Rua"} onChange={(e) => setStreet(e.target.value)} value={street}/>
                    <AdressContainer>
                        <Input placeholder={"Número"} onChange={(e) => setNumber(e.target.value)}/>
                        <Input placeholder={"Complemento"} onChange={(e) => setComplement(e.target.value)}/>
                    </AdressContainer>
                    <Button onClick={handleSubmit} loading={loading}>Escolher pagamento</Button>
                </CheckoutBody>
            </Form>
        </>
    );
}

const CheckoutBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 150px auto 0 auto;
`;

const AdressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto 0 auto;
    width: 72%;
    > input {
        width: 50%;
        margin: 0px 10px;
    }
`;

const Input = styled.input`
    width: 70%;
    height: 70px;
    background: white;
    margin-top: 20px;
    border-radius: 4px;
    color: black;
    text-align: center;
    
`;

const Form = styled.form`

`;

const Button = styled.button`
    width: 71%;
    height: 70px;
    background: ${colors.black};
    margin: 20px 20px;
    border-radius: 4px;
    color: white;
    text-align: center;
`;