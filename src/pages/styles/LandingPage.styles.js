import styled from 'styled-components';


export const LandingPageStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    width: 40%;
    border: 1px solid green;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      width: 20em;
      margin: 1em;
    }
    
    & button {
      margin: 1em;
    }
  }
`;