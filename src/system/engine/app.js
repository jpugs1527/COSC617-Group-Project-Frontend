import React, { Component, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Helpers } from '../../application/helpers';
import Routes from './routes';
import '../../application/views/assets/css/App.css'

console.log(process.env.REACT_APP_API_URL)


class App extends Component {
  	render() {
    	return (
			<Suspense fallback={<div>Loading...</div>}>
				<Provider store={store}>
					<ToastContainer autoClose={2000}/> 
					<Router history={Helpers.history}>
						<Routes/>
					</Router>
				</Provider>
			</Suspense>
    	)
  	}
}

export default App;