import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardTitle = '자유게시판 현황';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const badgeType = {
    공지: 'rgb(174, 101, 223)',
    일반: 'grey',
    질문: 'rgb(223, 94, 94)',
    정보: 'rgb(90, 138, 228)',
    후기: 'rgb(85, 190, 75)',
};

const cardDatas = [
    {
        title: '공지글입니다.',
        description:
            '아무 설명이나 넣어볼게요 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 길게길게 ',
        author: '김태은',
        date: '2020-09-13',
        heart: generateRandomNumber(),
        comment: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '공지',
        badgeColor: badgeType['공지'],
    },
    {
        title: '일반글입니다!!',
        description: '아무 설명이나 넣어볼게요',
        author: '보라돌이',
        date: '2020-09-13',
        heart: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '질문글입니다.',
        description: '아무 설명이나 넣어볼게요',
        author: '뚜비',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '질문',
        badgeColor: badgeType['질문'],
    },
    {
        title: '정보글입니다',
        description: '아무 설명이나 넣어볼게요',
        author: '나나',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '정보',
        badgeColor: badgeType['정보'],
    },
    {
        title: '후기글입니다~~!',
        description: '아무 설명이나 넣어볼게요',
        author: '뽀',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '후기',
        badgeColor: badgeType['후기'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
    {
        title: '일반글입니다!',
        description: '아무 설명이나 넣어볼게요',
        author: '김태은',
        date: '2020-09-13',
        comment: generateRandomNumber(),
        heart: generateRandomNumber(),
        view: generateRandomNumber(),
        share: generateRandomNumber(),
        badgeText: '일반',
        badgeColor: badgeType['일반'],
    },
];

function CardComponent(props) {
    const { colors } = props;

    return (
        <CardList title={cardTitle} data={cardDatas} default={5} offset={3} />
    );
}

export default CardComponent;
