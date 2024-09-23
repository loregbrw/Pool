import { useState } from "react"
import { Form, IButton, IInput } from "../../components/form"
import { IFirstRegister } from "../register"
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export const Password = (data: IFirstRegister) => {
    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    
    const register = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password != confirmPassword) {
            toast.warning("As senhas devem ser iguais!");
            return;
        }

        try {
            const response = await api.post("/users", {
                name: data.completeName,
                username: data.username,
                email: data.username,
                birthdate: data.birthDate,
                password: password
            });

            navigate("/");
            toast.success("Usuário criado com sucesso!");
        } catch (error) {

            console.log(error);

            if (error.response.data.message) {
                toast.error(error.response.data.message);
                return;
            }

            toast.warning(error.message);
        }
    }

    const inputs: IInput[] = [
        { label: "Senha:", type: "password", onChange: (p) => setPassword(p) },
        { label: "Confirmação de senha:", type: "password", onChange: (c) => setConfirmPassword(c) }
    ]
    
    const button: IButton = {
        title: "Cadastrar",
        action: register
    }
    
    return (
        <>
            <Form title={"Cadastro"} inputs={inputs} button={button} back={() => data.getData ? data.getData(null) : undefined} />
        </>
    )
}
