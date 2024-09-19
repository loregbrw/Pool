import { LoginConteiner } from "./style";
import { Forms } from "./Form";
import { Logo } from "./Logo";

export interface IFormProps {
    title: string;
    inputs: IInput[];
    button: IButton;
}

export interface IInput {
    label: string;
    type: string;
    obs?: string;
}

export interface IButton {
    title: string;
    action: () => void;
}

export const Form = ({ title, inputs, button }: IFormProps) => {
    return (
        <>
            <LoginConteiner>
                <Logo />
                <Forms title={title} inputs={inputs} button={{ title: button.title, action: button.action }} />
            </LoginConteiner>
        </>
    )
}