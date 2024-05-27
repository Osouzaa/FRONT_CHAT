import * as C from "./style"
import Logo from "../../assets/logo.svg"

const Header = () => {
    return (
        <C.HeaderStyles>
            <C.ImageLogo src={Logo} alt="Logo Lail Otimização" />
        </C.HeaderStyles>
    )
}

export { Header }