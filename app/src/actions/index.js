import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const fetchData = () => (dispatch) => {
	dispatch({
		type: FETCH_DATA,
	});

	axios
		.get('https://randomuser.me/api/')
		.then((res) => {
			console.log(res.data.results);
			dispatch({
				type: DATA_SUCCESS,
				payload: res.data.results,
			});
		})
		.catch((err) => {
			dispatch({
				type: DATA_ERROR,
				payload: err.message,
			});
		});
};
