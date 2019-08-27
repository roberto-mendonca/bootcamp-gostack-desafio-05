import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  span {
    color: #7159c1;
    font-weight: bold;
    margin-left: 10px;
  }
  svg {
    margin-right: 10px;
    font-size: 40px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 16px;
  }

  input:focus {
    border: 1px solid #7159c1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 8px 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
