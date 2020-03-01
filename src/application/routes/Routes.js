import React from 'react';

const WelcomePage 	= React.lazy(() => import('../views/pages/Welcome'))
const Page404       = React.lazy(() => import('../views/pages/NotFound'))

export default [
	{
        path: "/",
        component: WelcomePage,
        private: false
    },
    {
        path: "*",
        component: Page404,
        private: false
    },
]