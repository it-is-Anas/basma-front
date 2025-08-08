import type { user , task , project , team } from './types';

export const USERS: user[] = [
    {
        id: 1,
        firstName: 'Anas',
        lastName: 'Here',
        email: 'Anas@example.csom',
        imgSrc: '',
        createdAt: '3 hours ago',
    },
    {
        id: 2,
        firstName: 'Ahmad',
        lastName: 'Cours',
        email: 'Ahmad@example.csom',
        imgSrc: '',
        createdAt: '6 hours  ago',
    },
    {
        id: 3,
        firstName: 'Yassen',
        lastName: 'Karlo',
        email: 'Yassen@example.csom',
        imgSrc: '',
        createdAt: '13 hours ago',
    },
    {
        id: 4,
        firstName: 'Hazem',
        lastName: 'Here',
        email: 'Hazem@example.csom',
        imgSrc: '',
        createdAt: '2 days ago',
    },
];


export const TASKS:task[] = [
    {
        id: 1,
        title: 'First Task',
        desc: 'new task to be here please listn to me , can you hear me !',
        priority: 'important',
        catagory: ['personlay','work'],
        user: USERS[0],
        deadline: '2 days',
        createdAt: '5 minute ago'
    },
    {
        id: 2,
        title: 'second Task',
        desc: 'new task to be here please listn to me , can you hear me !',
        priority: 'important',
        catagory: ['personlay','work'],
        user: USERS[0],
        deadline: '2 days',
        createdAt: '13 minute ago'
    },
    {
        id: 3,
        title: 'hi Task',
        desc: 'new task to be here please listn to me , can you hear me !',
        priority: 'important',
        catagory: ['personlay','work'],
        user: USERS[1],
        deadline: '2 days',
        createdAt: '40 minute ago'
    },
    {
        id: 4,
        title: 'Eman Task',
        desc: 'new task to be here please listn to me , can you hear me !',
        priority: 'important',
        catagory: ['personlay','work'],
        user: USERS[2],
        deadline: '2 days',
        createdAt: '2 hours ago'
    },
    {
        id: 5,
        title: 'MOON Task',
        desc: 'new task to be here please listn to me , can you hear me !',
        priority: 'important',
        catagory: ['personlay','work'],
        user: USERS[3],
        deadline: '2 days',
        createdAt: '4 hours ago'
    },
];

export const PROJECTS:project[] = [
    {
        id: 1,
        title: 'First Project',
        tasks: TASKS ,
        user: USERS[0],
        createdAt: '4 minute ago'
    },
    {
        id: 2,
        title: 'Second Project',
        tasks: TASKS ,
        user: USERS[0],
        createdAt: '14 minute ago'
    },
    {
        id: 3,
        title: 'third Project',
        tasks: TASKS ,
        user: USERS[0],
        createdAt: '50 minute ago'
    },
]; 


export const TEAMS:team[]= [
    {
        id: 1,
        user: USERS[0],
        title: 'First TEam',
        tasks: 3,
        members: 2,
        createdAt: '3h ago',
    },
    {
        id: 2,
        user: USERS[0],
        title: 'First TEam',
        tasks: 7,
        members: 5,
        createdAt: '3 days ago',
    },
    {
        id: 3,
        user: USERS[0],
        title: 'Third TEam',
        tasks: 2,
        members: 2,
        createdAt: '9 days ago',
    },
];