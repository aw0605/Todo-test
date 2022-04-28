import React from 'react';
import styled from 'styled-components';

const Today = () => {
    const date = new Date();
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    var week = new Array(7);
    week[0] = '(일요일)';
    week[1] = '(월요일)';
    week[2] = '(화요일)';
    week[3] = '(수요일)';
    week[4] = '(목요일)';
    week[5] = '(금요일)';
    week[6] = '(토요일)';
    
    const d = week[date.getDay()];

    const today = yy + '년 ' + mm + '월 ' + dd + '일 ' + d;
    return (
        <TodayWrapper>
            <p>{today}</p>
        </TodayWrapper>
    );
};

const TodayWrapper = styled.div`
    background: #F2B4BF;
    padding: 0.001rem 1.5rem;
    font-size: 1.1rem;
    text-align: right;
    color: #fff;
`;

export default Today;