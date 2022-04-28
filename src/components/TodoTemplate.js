import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({children}) => {
    return (
        <TodoWrapper> 
            <TodoTitle>오늘의 할 일</TodoTitle>
            <Content>{children}</Content>
        </TodoWrapper>
    );
};

const TodoWrapper = styled.div`
    width: 600px;
    margin: 3rem auto 0;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 10px 10px 25px rgba(0,0,0,0.2);
`; 

const TodoTitle = styled.div`
    background: pink;
    color: #fff;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.5rem;
`;

const Content = styled.div`
    background: #fff;
`;

export default TodoTemplate;