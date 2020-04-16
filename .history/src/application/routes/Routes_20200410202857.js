import React from 'react';

const WelcomePage 	        = React.lazy(() => import('../views/pages/Welcome'))
const RegisterPage 	        = React.lazy(() => import('../views/pages/Register'))
const LoginPage 	        = React.lazy(() => import('../views/pages/Login'))
const SearchPage            = React.lazy(() => import('../views/pages/Search'))
const ViewVehiclePage       = React.lazy(() => import('../views/pages/ViewVehicle'))
const UserAddVehiclePage    = React.lazy(() => import('../views/pages/user/AddVehicle'))
const UserEditVehiclePage   = React.lazy(() => import('../views/pages/user/EditVehicle'))
const UserViewVehiclesPage  = React.lazy(() => import('../views/pages/user/ViewVehicles'))
const Page404               = React.lazy(() => import('../views/pages/NotFound'))
const profiilePage           = React.lazy(() => import('../views/pages/user/profle'))

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
        private: true
    },
    {
        path: "/user/vehicle/add",
        component: UserAddVehiclePage,
        private: true
    },
    {
        path: "/user/vehicle/edit",
        component: UserEditVehiclePage,
        private: true
    },
    {
        path: "/user/vehicle/view",
        component: UserViewVehiclesPage,
        private: true
    },
    {
        path: "*",
        component: Page404,
        private: false
    },
]