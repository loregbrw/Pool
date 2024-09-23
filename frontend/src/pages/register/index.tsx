import React, { useState } from "react"
import { Form, IButton, IInput } from "../../components/form"
import { useNavigate } from "react-router-dom";

interface IRegisterProps {
    getData: (data: IFirstRegister | null) => void;
}

export interface IFirstRegister {
    completeName: string;
    username: string;
    email: string;
    birthDate?: Date;
    getData?: (data: IFirstRegister | null) => void;
}

export const Register = ({ getData }: IRegisterProps) => {
    
    const [completeName, setCompleteName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState<Date>();

    const navigate = useNavigate();
    
    const regiter = (e: React.FormEvent) => {
        e.preventDefault();

        const firstRegister: IFirstRegister = {
            completeName: completeName,
            username: username,
            email: email,
            birthDate: birthDate
        };

        getData(firstRegister);
    }
    
    const back = () => {
        getData(null);
        navigate("/");
    }

    const inputs: IInput[] = [
        { label: "Nome completo:", type: "text", onChange: (n) => setCompleteName(n) },
        { label: "Nome de usuário:", type: "text", onChange:(u) => setUsername(u) },
        { label: "Email:", type: "email", onChange: (e) => setEmail(e) },
        { label: "Data de nascimento:", type: "date", onChange: (b) => setBirthDate(b) }
    ]
    
    const button: IButton = {
        title: "Próximo",
        action: regiter
    }
    
    return (
        <>
            <Form back={back} title={"Cadastro"} inputs={inputs} button={button} />
        </>
    )
}