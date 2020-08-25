import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardTitle = '자유게시판 현황';

const cardDatas = [
    {
        title: '안녕하세요',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '하이',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '바이',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '친구들',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '안뇽',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '히히!',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
    {
        title: '호호',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
];

function MyComp(props) {
    const { colors } = props;

    return <CardList title={cardTitle} data={cardDatas} />;
}

export default MyComp;
