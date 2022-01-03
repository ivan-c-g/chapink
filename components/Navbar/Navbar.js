import Link from "next/link"
import { ContainerNav } from "./Navbar.styled"

export const Navbar = () => {
    return (
        <ContainerNav>
            <Link href="/">
                <img src="#"></img>
            </Link>
            <Link href="/experts/new">
                <a href="#">area experts</a>
            </Link>
        </ContainerNav>
    )
}
