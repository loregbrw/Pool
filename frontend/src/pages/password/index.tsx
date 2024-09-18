import { Form, IButton, IInput } from "../../components/form"

const inputs: IInput[] = [
    { label: "Senha:", type: "password" },
    { label: "Confirmação de senha:", type: "password" }
]

const button: IButton = {
    title: "Cadastrar",
    action: () => { }
}

export const Password = () => {
    return (
        <>
            <Form title={"Cadastro"} inputs={inputs} button={button} />
        </>
    )
}