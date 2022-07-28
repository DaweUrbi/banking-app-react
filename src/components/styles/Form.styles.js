import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

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


`;

export const StyledFormField = styled.form`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  label { 
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 30%;
`;
