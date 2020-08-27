import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardTitle = '자유게시판 현황';

const badgeType = {
    공지: 'rgb(174, 101, 223)',
    일반: 'grey',
    질문: 'rgb(223, 94, 94)',
    정보: 'rgb(90, 138, 228)',
    후기: 'rgb(85, 190, 75)',
};

const cardDatas = [
    {
        title: '안녕하세요',
        description:
            '아무 설명이나 넣어볼게요 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 ',
        author: '김태은',
        date: '2020-09-13',
        heart: 12,
        comment: 5,
        view: 10,
        share: 3,
        badgeText: '공지',
        badgeColor: badgeType['공지'],
    },
    {
        title: '하이',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '바이',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '질문',
        badgeColor: badgeType['질문'],
    },
    {
        title: '친구들',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '정보',
        badgeColor: badgeType['정보'],
    },
    {
        title: '안뇽',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '후기',
        badgeColor: badgeType['후기'],
    },
    {
        title: '히히!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '호호',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: 5,
        heart: 8,
        view: 10,
        share: 3,
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
];

function MyComp(props) {
    const { colors } = props;

    return <CardList title={cardTitle} data={cardDatas} />;
}

export default MyComp;
