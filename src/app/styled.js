import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 40px;
  background-color: #fff;
  a.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
      text-decoration: none;
    }
    span {
      color: #000;
      font-size: 18px;
      @media (max-width: 670px) {
        display: none;
      }
    }
    img {
      width: 40px;
    }
  }
  .menu {
    display: none;
  }
  @media (max-width: 600px) {
    padding-inline: 20px;
    .menu {
      display: block;
      label {
        font-size: 18px;
      }
      div {
        width: 10rem;
        right: -15px;
        &::before,
        &::after {
          right: 12px;
        }
      }
    }
    .link {
      display: none;
    }
  }
`;

export const Container = styled.section`
  margin-inline: 20%;
  margin-block: 80px;
  img {
    border-radius: 10px;
    width: 100%;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 400;
  }
  @media (max-width: 800px) {
    margin-inline: 20px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  label {
    color: #4b75ff;
    border: none;
    background-color: transparent;
    outline: none;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  input {
    display: none;
    &:checked {
      + div {
        display: flex;
      }
    }
  }
  div {
    display: none;
    flex-direction: column;
    gap: 4px;
    background-color: #f4f4f4;
    padding: 10px;
    position: absolute;
    right: -40px;
    width: 18rem;
    top: 35px;
    border: 1px solid #ccc;
    border-radius: 10px;
    z-index: 999;
    &::after {
      position: absolute;
      content: "";
      background-color: transparent;
      border: 10px #f4f4f4 solid;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -18px;
      right: 55px;
    }
    &::before {
      position: absolute;
      content: "";
      background-color: transparent;
      border: 10px #ccc solid;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -20px;
      right: 55px;
    }
  }
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
`;
