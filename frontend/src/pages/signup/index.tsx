import { useState } from "react"
import { IFirstRegister, Register } from "../register"
import { Password } from "../password";

export const SignUp = () => {

    const [data, setData] = useState<IFirstRegister | null>(null);

    if (!data) {
        return (
            <>
                <Register getData={setData} />
            </>
        )
    }

    return (
        <>
            <Password getData={setData} completeName={data.completeName} username={data.username} email={data.email} birthDate={data.birthDate} />
        </>
    )
}