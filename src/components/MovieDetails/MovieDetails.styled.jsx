import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;

`;

export const MovieSection = styled.section`
  padding: 32px;
`;
export const MovieInfoContainer = styled.div`
  display: flex;
`;

export const MovieDetailImg = styled.img`
  width: 350px;
  object-fit: cover;
  margin-right: 32px;
  margin-bottom: 32px;
`;

export const MovieInfoTitle = styled.h2`
  margin-bottom: 45px;
`;
export const MovieInfoH = styled.h3`
  margin-bottom: 15px;
`;
export const MovieInfoText = styled.p`
  margin-bottom: 30px;
`;
export const InfoNavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #036280;
  font-weight: 500;
 

`;