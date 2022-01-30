import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3em 0;

  & div {
    display: flex;
    flex-direction: column;
  }
  & p {
    margin: 0 1em;
  }
`;
