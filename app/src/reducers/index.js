import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions';

const initialState = {
	user: [
		{
			name: { first: 'John', last: 'Doe' },
			location: { city: 'No City', country: 'No Land' },
			email: 'john.doe@mail.com',
			picture: {
				large:
					'http://clinicaesperanza.org/wp-content/uploads/2019/09/profile-placeholder.png',
			},
			id: { value: '123' },
		},
	],
	isLoading: false,
	error: '',
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isLoading: true,
			};
		case DATA_SUCCESS:
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: '',
			};
		case DATA_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
