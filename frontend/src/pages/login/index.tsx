import React, { useState } from "react"
import { Form, IButton, IInput } from "../../components/form"
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const doLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // alert("login: " + login + "\npassword: " + password);

        try {
            const response = await api.post("/auth", {
                login: login,
                password: password
            });

            localStorage.setItem("Token", response.data.token);

            navigate("/home");
            toast.success("Usuário logado com sucesso!");
            
        } catch (error) {

            if (error.response.data.message) {
                toast.error(error.response.data.message);
                return;
            }

            toast.warning(error.message);
        }
    }
    
    
    const inputs: IInput[] = [
        { label: "Email ou username:", type: "text", onChange: (l) => setLogin(l) },
        { label: "Senha:", type: "password", obs: "Esqueceu a senha?", onChange: (p) => setPassword(p) }
    ]
    
    const button: IButton = {
        title: "Logar",
        action: doLogin
    }
    return (
        <>
            <Form back={() => navigate("/")} title={"Login"} inputs={inputs} button={button} />
        </>
    )
}