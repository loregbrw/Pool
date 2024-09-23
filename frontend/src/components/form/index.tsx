import { LoginConteiner } from "./style";
import { Forms } from "./Form";
import { Logo } from "./Logo";

export interface IFormProps {
    title: string;
    inputs: IInput[];
    button: IButton;
    back: () => void;
}

export interface IInput {
    label: string;
    type: string;
    obs?: string;
    onChange: (e: any) => void;
}

export interface IButton {
    title: string;
    action: (e: React.FormEvent) => void;
}

export const Form = ({ title, inputs, button, back }: IFormProps) => {
    return (
        <>
            <LoginConteiner>
                <Logo />
                <Forms back={back} title={title} inputs={inputs} button={{ title: button.title, action: button.action }} />
            </LoginConteiner>
        </>
    )
}