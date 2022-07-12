import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;
    padding: 15px 10px;

    button {
        width: 80px;
        height: 50px;
        border: none;
        border-radius: 18px;
        background-color: #372096;
        color: #FFF;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        font-size: 15px;
    }

    button:hover {
        background-color: #725cd1;
    }

    input {
        width: 100%;
        height: 50px;
        border-radius: 15px;
        border: 2px solid #372096;
        font-weight: bold;
        padding: 10px;
        outline: 0;
        margin-right: 5px;
        background-color: transparent;
        color: #725cd1;
        font-size: 15px;
    }

    input::placeholder {
        color: #725cd1;
    }
`;
