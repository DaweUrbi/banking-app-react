import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h2 { 
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0.5rem;
    margin: 0;
    align-self: center;
  }

  li {
    padding: 0.1rem;
  }

  label { 
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
  }
  
  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 40%;
  }
`;
