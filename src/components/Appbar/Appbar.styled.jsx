import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppbarLink = styled.header`

  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 64px;
z
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #81bece;
  font-weight: 500;

`;