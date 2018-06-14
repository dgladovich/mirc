import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';


export default {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/users',
            component: Users
        },
        {
            path: '/charts',
            component: ChatList,
        },
    ]
};