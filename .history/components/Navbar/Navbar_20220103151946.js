import Link from "next/link"
import { ContainerNav } from "./Navbar.styled"

export const Navbar = () => {
    return (
        <ContainerNav>
            <img src="#"></img>
            <Link href={"/"} />
            <a href="#">area experts</a>
        </ContainerNav>
    )
}
