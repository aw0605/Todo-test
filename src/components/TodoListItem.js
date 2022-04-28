import React from 'react';
import styled from 'styled-components';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <TodoItemWrapper>
            <CheckBox 
            className={cn('checkbox', {checked})}
            onClick={() => onToggle(id)}
            >
                {checked? <BsCheckCircleFill /> : <BsCircle />}
                <div className='text'>{text}</div>
            </CheckBox>
            <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
        </TodoItemWrapper>
    );
};

const TodoItemWrapper = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    &:nth-child(even){
        background: #f8f9fa;
    }
    & + &{
        border-top: 1px solid #dee2e6;
    }
`;

const CheckBox = styled.div`
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    svg{
        font-size: 1.2rem;
        color: #555;
    }
    .text{
        color: #555;
        margin-left: 0.8rem;
        flex: 1;
    }
    &.checked{
        svg{
            color: #FFABBA;
        }
        .text{
            color: #adb5bd;
            text-decoration: line-through;
        }
    }
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: coral;
    cursor: pointer;
    &:hover{
        color: red;
        transition: all .3s ease-in;
    }
`;


export default TodoListItem;