import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import thunk from 'redux-thunk';
import RandomUser from './RandomUser';
import { rootReducer } from './reducers';
import { MainHeader } from './styles';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<div>
				<MainHeader>Random User Generator</MainHeader>
				<RandomUser />
			</div>
		</Provider>
	);
}
