<script setup>
import { state } from '../stores/auth';
import RewardCarousel from './RewardCarousel.vue';
const isAuthenticated = computed(() => state.isAuthenticated);
watch(
	isAuthenticated,
	(authenStatus) => {
		console.log('authenStatus changed to:', authenStatus);
	},
	{ deep: true }
);
</script>
<template>
	<div class="sw-section section-reward">
		<div class="container">
			<div v-if="!isAuthenticated" class="section-header">
				<h2 class="section-heading has-action">News</h2>
				<div class="reward-carousel">
					<div class="container"><!----></div>
				</div>
			</div>
			<div v-else>
				<h2 class="section-heading has-action">
					Rewards for you
				</h2>
				<RewardCarousel />
			</div>
		</div>
	</div>
</template>
<style scoped>
.section-header {
	margin-bottom: 28px;
}
.section-reward {
	margin-top: 0;
}
</style>
