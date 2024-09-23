import { IFormProps } from ".."
import { Button, Form, FormGroup, FormInput, Input, Label, FormContainer, TituleForm, StyledObs, StyledHeader, StyledBack } from "./style"
import Back from "/Back.png"

export const Forms = ({ title, inputs, button, back }: IFormProps) => {

    return (
        <>
            <StyledHeader />
            <FormContainer>
                <StyledBack onClick={back} src={Back} />
                <Form onSubmit={button.action}>
                    <TituleForm>{title}</TituleForm>
                    <FormGroup>
                        {
                            inputs.map((input, index) => (
                                <FormInput key={index}>
                                    <Label>{input.label}</Label>
                                    <Input onChange={(e) => input.onChange(e.target.value)} type={input.type} maxLength={255} required />
                                    {   
                                        input.obs &&
                                        <StyledObs>{input.obs}</StyledObs>
                                    }
                                </FormInput>
                            ))
                        }

                    </FormGroup>
                    <Button type="submit">{button.title}</Button>
                </Form>
            </FormContainer>
        </>
    )
}