<template>
	<div class="pt-[72px]">
		<div class="bg-[#f4f4f4] flex justify-center py-10 container">
			<div class="form-card">
				<div class="box-header">
					<h1
						class="font-medium text-3xl text-[#fff]"
					>
						Register
					</h1>
					<h2
						class="font-light text-sm text-[#fff]"
					>
						Register to start your sweet
						journey
					</h2>
				</div>
				<div class="box-body">
					<!-- First Name and Last Name -->
					<div class="flex flex-row gap-3 mb-3">
						<div>
							<label
								class="form-label"
								for="firstName"
								>First
								Name</label
							>
							<a-input
								v-model:value="
									formData.firstName
								"
								class="form"
								placeholder="First Name"
								:status="
									firstNameStatus
								"
							/>
							<p
								v-if="
									firstNameStatus ===
									'error'
								"
								class="errorMessage"
							>
								at least 2
								characters
							</p>
						</div>
						<div>
							<label
								class="form-label"
								for="lastName"
								>Last
								Name</label
							>
							<a-input
								v-model:value="
									formData.lastName
								"
								class="form"
								placeholder="Last Name"
								:status="
									lastNameStatus
								"
							/>
							<p
								v-if="
									lastNameStatus ===
									'error'
								"
								class="errorMessage"
							>
								at least 2
								characters
							</p>
						</div>
					</div>

					<!-- Mobile Number -->
					<div>
						<label
							class="form-label"
							for="tel"
							>Mobile no.</label
						>
						<a-input
							v-model:value="
								formData.tel
							"
							class="form"
							placeholder="10-digit mobile number"
							:status="telStatus"
							maxlength="10"
						/>

						<p
							v-if="
								telStatus ===
								'error'
							"
							class="errorMessage"
						>
							Mobile number must be 10
							digits
						</p>
					</div>
					<!-- Email -->
					<div class="mt-5 mb-3">
						<label
							class="form-label"
							for="email"
							>Email</label
						>
						<a-input
							v-model:value="
								formData.email
							"
							class="form"
							placeholder="email"
							:status="emailStatus"
						/>
						<p
							v-if="
								emailStatus ===
								'initial'
							"
							class="errorMessage"
						>
							Please ensure you enter
							a valid email address.
							The email cannot be
							changed after
							registration.
						</p>
						<p
							v-if="
								emailStatus ===
								'error'
							"
							class="errorMessage"
						>
							Invalid email
						</p>
					</div>

					<!-- Password -->
					<div class="mb-3">
						<!-- <div class="mt-5 mb-3"> -->
						<label
							class="form-label"
							for="password"
							>Password</label
						>
						<a-input-password
							class="form"
							placeholder="Password"
							v-model:value="
								formData.password
							"
							:status="passwordStatus"
						/>
						<p
							v-if="
								passwordStatus ===
								'error'
							"
							class="errorMessage"
						>
							Password must be at
							least 8 characters
						</p>
					</div>

					<!-- Gender -->
					<div>
						<div class="form-label">
							Gender (optional)
						</div>
						<div
							class="inline-grid grid-cols-3 gap-4 w-full"
						>
							<button
								class="gender"
								:class="{
									selected:
										selectedGender ===
										'male',
								}"
								@click="
									toggleGender(
										'male'
									)
								"
							>
								Male
							</button>
							<button
								class="gender"
								:class="{
									selected:
										selectedGender ===
										'female',
								}"
								@click="
									toggleGender(
										'female'
									)
								"
							>
								Female
							</button>
							<button
								class="gender"
								:class="{
									selected:
										selectedGender ===
										'notSpecified',
								}"
								@click="
									toggleGender(
										'notSpecified'
									)
								"
							>
								Not Specified
							</button>
						</div>
					</div>

					<!-- Birth Date -->
					<div>
						<div class="form-label mb-3">
							Birth Date
						</div>
						<a-date-picker
							v-model:value="
								formData.birthDate
							"
							placeholder="dd/mm/yyyy"
							format="DD/MM/YYYY"
							class="w-full px-2 py-3"
						/>
					</div>

					<!-- Terms and Info Checkbox -->
					<div class="flex flex-col gap-3 my-5">
						<a-checkbox
							v-model:checked="
								formData.acceptTerms
							"
							class="checkbox-item"
						>
							I have read and accepted
							the terms & conditions
							and privacy policy of
							Swensen’s.
						</a-checkbox>
						<a-checkbox
							v-model:checked="
								formData.recieveInfo
							"
							class="checkbox-item"
						>
							I agree to receive the
							information including
							other marketing
							activities from
							Swensen’s and affiliated
							companies. We will keep
							your data confidential.
							Learn more about privacy
							policy from company’s
							website.
						</a-checkbox>
					</div>

					<!-- Submit Button -->
					<a-button
						class="button w-full mt-5"
						type="primary"
						@click="submitData"
						:disabled="!isFormValid"
					>
						Register
					</a-button>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const formData = reactive({
	firstName: '',
	lastName: '',
	tel: '',
	email: '',
	password: '',
	gender: '',
	birthDate: '',
	acceptTerms: false,
	recieveInfo: false,
});

const selectedGender = ref('');
const router = useRouter();

const toggleGender = (gender) => {
	selectedGender.value = gender === selectedGender.value ? '' : gender;
};

// Validation computed properties
const firstNameStatus = computed(() => {
	return formData.firstName.length === 0
		? ''
		: formData.firstName.length >= 2
		? ''
		: 'error';
});
const lastNameStatus = computed(() => {
	return formData.lastName.length === 0
		? ''
		: formData.lastName.length >= 2
		? ''
		: 'error';
});

const emailStatus = computed(() => {
	const emailPattern = /^\S+@\S+\.\S+$/;
	if (formData.email.length === 0) return 'initial';
	return emailPattern.test(formData.email) ? '' : 'error';
});

const passwordStatus = computed(() => {
	if (formData.password.length === 0) return '';
	return formData.password.length >= 8 && formData.password.length <= 20
		? ''
		: 'error';
});

const telStatus = computed(() => {
	if (formData.tel.length === 0) return '';
	return formData.tel.length === 10 && /^\d+$/.test(formData.tel)
		? ''
		: 'error';
});

const formattedBirthDate = computed(() =>
	formData.birthDate.format('YYYY-MM-DD')
);

// Computed property to check if the form is valid for submission
const isFormValid = computed(() => {
	return (
		formData.firstName.trim() !== '' &&
		formData.lastName.trim() !== '' &&
		formData.tel.trim() !== '' &&
		formData.tel.length === 10 &&
		/^\d+$/.test(formData.tel) &&
		formData.email.trim() !== '' &&
		/\S+@\S+\.\S+/.test(formData.email) &&
		formData.password.trim() !== '' &&
		formData.password.length >= 8 &&
		formData.password.length <= 20 &&
		formData.acceptTerms
	);
});

// Function to submit form data to API
const submitData = async () => {
	if (!isFormValid.value) {
		console.error('Form is not valid. Cannot submit.');
		return;
	}

	try {
		const response = await fetch('http://127.0.0.1:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: formData.firstName,
				lastName: formData.lastName,
				tel: formData.tel,
				email: formData.email,
				password: formData.password,
				gender: formData.gender,
				birthDate: formattedBirthDate.value,
				acceptTerms: formData.acceptTerms,
				receiveInfo: formData.receiveInfo,
			}),
		});

		if (response.ok) {
			const responseData = await response.json();
			console.log('Registration successful:', responseData);
			// Navigate to success page or handle success state
			router.push({ name: 'success' });
		} else {
			const errorData = await response.json();
			console.error('Registration failed:', errorData);
			// Handle error state
		}
	} catch (error) {
		console.error('Error during registration:', error);
		// Handle network errors or other exceptions
	}
};

const togglePasswordVisibility = () => {
	passwordVisible.value = !passwordVisible.value;
};

// Log formData whenever it changes
watch(
	formData,
	(newFormData) => {
		console.log('formData changed:', newFormData);
	},
	{ deep: true }
);
</script>

<style scoped>
.selected {
	background-color: red;
	color: white;
}

.gender {
	font-weight: 200;
	border-color: rgba(153, 151, 151, 0.582);
	border-style: solid;
	border-width: 1px;
	margin-top: 10px;
	margin-bottom: 14px;
	min-width: max-content;
}

.checkbox-item {
	margin-top: 10px;
}

.button,
button {
	min-width: 140px;
	height: 48px;
	padding: 0 15px;
	border-radius: 30px;
}

.button:hover {
	color: #fff;
	background-color: #f04343;
	border-color: #f04343;
}
</style>
