import styled from 'styled-components';

type TaskBoxProps ={
    completed: boolean;
}

export const TaskBox = styled.div(({ completed }: TaskBoxProps) => (
`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #725cd1;
    padding: 8px 14px;
    border-radius: 15px;
    margin: 0 10px;
    margin-bottom: 10px;
    box-shadow: rgb(0, 0, 0, 20%) 0px 3px 1px -2px;

    span {
        color: #FFF;
        margin: 0 10px;
        word-break: break-all;
        text-decoration: ${completed ? 'line-through' : 'initial'};
    }
`));

export const Box = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
`

export const ButtonRemove = styled.button`
    background: none;
    border: none;
    color: #FFF;
    font-size: 20px;
    margin-top: 5px;
    cursor: pointer;
`
