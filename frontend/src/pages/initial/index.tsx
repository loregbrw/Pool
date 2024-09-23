import { Link } from "react-router-dom"

export const Initial = () => {
    return(
        <>
            <Link to={"/login"}>Login</Link>
            <br />
            <Link to={"/signup"}>Cadastro</Link>
        </>
    )
}