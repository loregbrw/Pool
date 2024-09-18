import { Form, IButton, IInput } from "../../components/form"

const inputs: IInput[] = [
    { label: "Email:", type: "text" },
    { label: "Senha:", type: "password", obs: "Esqueceu a senha?" }
]

const button: IButton = {
    title: "Logar",
    action: () => { }
}

export const Login = () => {
    return (
        <>
            <Form title={"Login"} inputs={inputs} button={button} />
        </>
    )
}