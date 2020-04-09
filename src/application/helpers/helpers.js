import React from 'react';
import axios from 'axios';
import { createMemoryHistory } from 'history';
import { Route, Redirect } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import { toast } from 'react-toastify';
import { startSubmit, stopSubmit, reset } from 'redux-form';
import store from '../../system/engine/store'

export const history = typeof window === 'undefined'? createMemoryHistory() : createHistory();


export function ajaxRequest(args = {}) {
    args.url = `${process.env.REACT_APP_API_URL}/${args.url}`
    console.log('ajaxRequest => ', args.url)
    let headers = {apikey: process.env.REACT_APP_API_KEY, apisecret: process.env.REACT_APP_API_SECRET}
    return axios({...args, headers: headers });
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('Turdo_Token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export function submitStart(form_name) {
    store.dispatch(startSubmit(form_name))
}

export function formSuccessHandler(form_name, message){
    if (form_name !== undefined) {
        if (typeof message === 'string') toast.success(message);
        store.dispatch(stopSubmit(form_name))
        store.dispatch(reset(form_name))
    }
}

export function formErrorHandler(form_name, error){
    if (form_name !== undefined) {
        if (error.response === undefined) {
            return toast.error("Server not responding");
        }

        if (typeof error.response.data.message === 'string') {
            toast.success(error.response.data.message);
            store.dispatch(stopSubmit(form_name))
        }
        if (typeof error.response.data.message === 'object') {
            store.dispatch(stopSubmit(form_name, error.response.data.message))
        } 
    }
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function succesMessage(message) {
    toast.success(message);
}

export function serverErrorHandler(error,  form_name){
    if (error.response === undefined) {
        return toast.error("Server not responding");
    } 

    if (error.response.data && error.response.data.status === 401) {
        return toast.error(error.response.data.message);
    }

    if (error.response.data && error.response.data.status === 404) {
        return toast.error(error.response.data.message);
    }

    if (error.response.data && error.response.data.status === 405) {
        return toast.error(error.response.data.message);
    }
    
    if (error.response.data && error.response.data.status === 422) {
        toast.error("422 Validation Error");
    }
    
    if (error.response.data && error.response.data.status === 500) {
        return toast.error("500 Internal Server Error");
    } 

    if (error.response.data && error.response.data.status === 502) {
        return toast.error("502 Bad Gateway");
    }
}

export function formatDate(givenDate) {
    return (givenDate.getMonth() + 1) + "/"+givenDate.getDate() + "/" + givenDate.getFullYear();
}