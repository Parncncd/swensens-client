import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		email: '',
		password: '',
		firstname: '',
		lastname: '',
	}),
	actions: {
		updateProfile(userData) {
			this.email = userData.email;
			this.password = userData.password;
			this.firstname = userData.firstname;
			this.lastname = userData.lastname;
		},
	},
});
