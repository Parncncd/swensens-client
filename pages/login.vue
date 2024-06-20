<template>
	<div class="flex flex-col min-h-screen">
		<div class="pt-[72px] flex-grow flex flex-col">
			<div class="bg-[#f4f4f4] flex justify-center container">
				<div class="form-card">
					<div class="box-header">
						<h2
							class="font-medium text-3xl text-[#fff]"
						>
							Welcome
						</h2>
						<p class="font-light">
							Login to begin your
							journey
						</p>
					</div>
					<div class="box-body">
						<div>
							<div>
								<label
									class="form-label"
									for="email"
									>Email</label
								>
								<a-input
									class="form"
									v-model:value="
										formData.email
									"
									:status="
										emailStatus
									"
									placeholder="Email"
								/>
								<p
									v-if="
										emailStatus ===
										'error'
									"
									class="errorMessage"
								>
									Please
									include
									an @ in
									the
									email
									address
								</p>
							</div>

							<div class="mt-5 mb-3">
								<label
									class="form-label"
									for="password"
									>Password</label
								>
								<a-input-password
									class="form"
									v-model:value="
										formData.password
									"
									:status="
										passwordStatus
									"
									placeholder="Password"
								/>
								<p
									v-if="
										passwordStatus ===
										'error'
									"
									class="errorMessage"
								>
									Password
									must be
									at least
									8
									characters
								</p>
							</div>
							<h2
								class="text-primary text-end text-sm font-light"
							>
								Forgot password?
							</h2>
						</div>
						<RouterLink to="/">
							<a-button
								class="button w-full mt-5"
								type="primary"
								@click="
									submitData
								"
								:disabled="
									!isFormValid
								"
							>
								Login
							</a-button>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue';
// import { Footer } from 'ant-design-vue/es/layout/layout';
import { state, actions } from '../stores/auth';
const formData = reactive({
	email: '',
	password: '',
});

// Computed properties for form validation
const emailStatus = computed(() =>
	formData.email.includes('@') || formData.email === '' ? '' : 'error'
);

const passwordStatus = computed(() =>
	formData.password.length >= 8 || formData.password === '' ? '' : 'error'
);

// Computed property to check if the form is valid for submission
const isFormValid = computed(() => {
	return (
		formData.email.trim() !== '' &&
		/\S+@\S+\.\S+/.test(formData.email) &&
		formData.password.trim() !== '' &&
		formData.password.length >= 8 &&
		formData.password.length <= 20
	);
});

// Function to submit form data to API
const submitData = async () => {
	try {
		const response = await fetch('http://127.0.0.1:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: formData.email,
				password: formData.password,
			}),
		});

		if (response.ok) {
			const responseData = await response.json();
			console.log('Login successful:', responseData);
			// !!!!!!!!! WARNING !!!!!!!!!
			// for test only !! dont forget to remove this line !!
			actions.login();
			router.push('/');
		} else {
			const errorData = await response.json();
			console.error('Login failed:', errorData);
		}
		actions.login();
		router.push('/');
	} catch (error) {
		// !!!!!!!!! WARNING !!!!!!!!!
		// for test only !! dont forget to remove this line !!
		actions.login();
		console.error('Error during login:', error);
	}
};
</script>

<style scoped>
.min-h-screen {
	min-height: 100vh;
}
.flex {
	display: flex;
}
.flex-col {
	flex-direction: column;
}
.flex-grow {
	flex-grow: 1;
}

.container {
	display: flex;
	justify-content: center;
}
</style>
