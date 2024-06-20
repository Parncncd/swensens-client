// import { reactive } from 'vue';

// // Reactive state for authentication
// const state = reactive({
// 	isAuthenticated: false,
// });

// // Actions to mutate the state
// const actions = {
// 	login() {
// 		state.isAuthenticated = true;
// 	},
// 	logout() {
// 		state.isAuthenticated = false;
// 	},
// };

// export { state, actions };

import { reactive } from 'vue';

const initialState = () => {
	let isAuthenticated = false;

	// Check if localStorage is available
	if (typeof window !== 'undefined' && window.localStorage) {
		isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
	}

	return {
		isAuthenticated: isAuthenticated,
	};
};

const state = reactive(initialState());

const actions = {
	login() {
		state.isAuthenticated = true;
		try {
			localStorage.setItem('isLoggedIn', 'true');
		} catch (error) {
			console.error('localStorage is not available:', error);
		}
	},
	logout() {
		state.isAuthenticated = false;
		try {
			localStorage.removeItem('isLoggedIn');
		} catch (error) {
			console.error('localStorage is not available:', error);
		}
	},
};

export { state, actions };
