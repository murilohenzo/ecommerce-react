import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 50px;
  label {
    cursor: pointer;
    overflow: hidden;
    display: block;
    background: rgba(0, 0, 0, 0.4);
    height: 300px;
    max-height: 30vw;
    margin-bottom: 10px;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        align-self: center;
        color: #fff;
        font-size: 14px;
        margin-top: 10px;
      }
    }
    img {
      width: 100%;
    }
    input {
      display: none;
    }
  }
`;