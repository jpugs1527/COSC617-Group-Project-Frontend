import React from 'react';

const WelcomePage 	= React.lazy(() => import('../views/pages/Welcome'))
const RegisterPage 	= React.lazy(() => import('../views/pages/Register'))
const Page404       = React.lazy(() => import('../views/pages/NotFound'))

export default [
	{
        path: "/",
        component: WelcomePage,
        private: false
    },
    {
        path: "/register",
        component: RegisterPage,
        private: false
    },
    {
        path: "*",
        component: Page404,
        private: false
    },
]