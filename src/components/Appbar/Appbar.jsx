import { AppbarLink, NavLinkStyled } from "./Appbar.styled";
const Appbar = () => {
    return (
        <AppbarLink>
            <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
        </AppbarLink>
    )
}
export default Appbar;