import React from 'react';

const WelcomePage 	    = React.lazy(() => import('../views/pages/Welcome'))
const RegisterPage 	    = React.lazy(() => import('../views/pages/Register'))
const LoginPage 	    = React.lazy(() => import('../views/pages/Login'))
const SearchPage        = React.lazy(() => import('../views/pages/Search'))
const ViewVehiclePage   = React.lazy(() => import('../views/pages/ViewVehicle'))
const Page404           = React.lazy(() => import('../views/pages/NotFound'))

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
        path: "/login",
        component: LoginPage,
        private: false
    },
    {
        path: "/search",
        component: SearchPage,
        private: false
    },
    {
        path: "/vehicle",
        component: ViewVehiclePage,
        private: false
    },
    {
        path: "*",
        component: Page404,
        private: false
    },
]