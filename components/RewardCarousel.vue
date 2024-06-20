<template>
	<div class="reward-carousel">
		<div class="container">
			<div class="reward-card-row">
				<div
					class="card-col"
					v-for="(reward, index) in rewards"
					:key="index"
				>
					<div class="card-item card-reward">
						<a :href="reward.url">
							<div
								class="image"
								:style="{
									backgroundImage:
										'url(' +
										reward.imageUrl +
										')',
								}"
							>
								<span
									class="use-type ant-tag ant-tag-has-color"
									:style="{
										backgroundColor:
											reward.tagColor,
									}"
								>
									{{
										reward.tagText
									}}
								</span>
							</div>
							<div class="detail">
								<h3
									class="heading"
								>
									{{
										reward.title
									}}
								</h3>
								<div
									class="meta"
								>
									<p
										class="date"
									>
										Valid
										Until
										{{
											reward.validUntil
										}}
									</p>
								</div>
								<div
									class="amount"
								>
									<div
										class="amount-wrap point"
									>
										<img
											src="~/assets/images/icon-reward.svg"
											alt=""
											class="icon"
										/>
										<span
											>{{
												reward.points
											}}</span
										>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { rewards } from '~/assets/text/rewards.js';
</script>

<style scoped>
.reward-carousel {
	overflow: hidden;
}

.container {
	display: flex;
	flex-wrap: wrap;
	margin-left: -12px;
	margin-right: -12px;
}

.reward-card-row {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.card-col {
	padding-left: 12px;
	padding-right: 12px;
	margin-bottom: 24px;
	flex: 1 1 calc(25% - 24px); /* Flex for 4 columns */
	box-sizing: border-box;
}

@media (max-width: 992px) {
	.card-col {
		flex: 1 1 calc(33.33% - 24px); /* 3 columns on medium screens */
	}

	.reward-card-row .card-col {
		margin-bottom: 12px;
	}
}

@media (max-width: 768px) {
	.card-col {
		flex: 1 1 calc(50% - 24px); /* 2 columns on small screens */
	}

	.reward-card-row .card-col {
		margin-bottom: 8px;
	}
}

@media (max-width: 576px) {
	.card-col {
		flex: 1 1 100%; /* 1 column on extra small screens */
		margin-bottom: 12px;
	}
}

.card-reward .image {
	position: relative;
	background-position: center;
	background-size: cover;
	border-radius: 10px 10px 0 0;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	height: 0;
	padding-bottom: 66.667%; /* Maintain aspect ratio */
}

.card-reward .image .ant-tag {
	position: absolute;
	top: 16px;
	left: 16px;
	z-index: 2;
}

.card-reward .amount {
	color: #e21c23;
	font-size: 20px;
	font-weight: 500;
	display: flex;
	align-items: center;
	margin-top: 16px;
}

.card-reward .amount .price {
	color: #23d374;
}

.card-reward .amount .amount-wrap {
	display: flex;
	align-items: center;
}

.card-reward .amount img {
	display: block;
	width: 24px;
	height: auto;
	flex-shrink: 0;
	margin-right: 4px;
}

.card-reward .use-type {
	pointer-events: none;
}

@media (max-width: 576px) {
	.card-reward .image .ant-tag {
		top: 12px;
		left: 12px;
	}

	.card-reward .amount {
		font-size: 14px;
		margin-top: 8px;
	}

	.card-reward .amount img {
		width: 16px;
	}
}
</style>
