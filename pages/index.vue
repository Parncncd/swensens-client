<script setup>
import HeroBanner from '../components/HeroBanner.vue';
import Bottom from '../components/Bottom.vue';
import Footer from '../components/Footer.vue';
import Deals from '../components/Deals.vue';
import Rewards from '../components/Rewards.vue';
const isAuthenticated = computed(() => state.isAuthenticated);
const logout = () => {
	actions.logout();
};
</script>
<template>
	<div class="flex flex-col">
		<HeroBanner class="" />
		<button v-if="isAuthenticated" @click="logout">log out</button>
		<p v-else>Please log in to access this page.</p>
		<div class="page-body bg-[#fff]"><Deals /> <Rewards /></div>
		<Bottom />
		<Footer />
	</div>
</template>
<style></style>
