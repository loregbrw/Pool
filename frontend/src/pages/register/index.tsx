import { Form, IButton, IInput } from "../../components/form"

const inputs: IInput[] = [
    { label: "Nome completo:", type: "text" },
    { label: "Nome de usuário:", type: "text" },
    { label: "Email:", type: "email" },
    { label: "Data de nascimento:", type: "date" }
]

const button: IButton = {
    title: "Próximo",
    action: () => { }
}

export const Register = () => {
    return (
        <>
            <Form title={"Cadastro"} inputs={inputs} button={button} />
        </>
    )
}