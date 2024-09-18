import { IFormProps } from ".."
import { Button, Form, FormGroup, FormInput, Input, Label, FormContainer, TituleForm, FGPassword } from "./styles"

export const Forms = ({ title, inputs, button }: IFormProps) => {
    return (
        <>
            <FormContainer>
                <Form>
                    <TituleForm>{title}</TituleForm>
                    <FormGroup>
                        {
                            inputs.map(input => (
                                <FormInput>
                                    <Label>{input.label}</Label>
                                    <Input type={input.type} />
                                    {
                                        input.obs &&
                                        <FGPassword>{input.obs}</FGPassword>
                                    }
                                </FormInput>
                            ))
                        }

                    </FormGroup>
                    <Button type="button" onClick={button.action} >{button.title}</Button>
                </Form>
            </FormContainer>
        </>
    )
}