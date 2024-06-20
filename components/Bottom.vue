<template>
	<div class="page-bottom">
		<div class="container">
			<div
				class="page-bottom-row-wrap ant-row-flex ant-row-flex-middle"
			>
				<div
					class="column-image ant-col ant-col-md-10 ant-col-md-offset-2"
				>
					<div class="app-screen">
						<img
							src="/assets/images/app-screen-webp.webp"
							alt="App Screen"
						/>
					</div>
				</div>
				<div
					class="column-content ant-col ant-col-md-9 ant-col-md-offset-1"
				>
					<div class="app-download">
						<h2 class="heading">
							Download on
						</h2>
						<div class="download-list">
							<div
								class="ant-row"
								style="
									margin-left: -12px;
									margin-right: -12px;
								"
							>
								<div
									class="ant-col ant-col-12"
									style="
										padding-left: 12px;
										padding-right: 12px;
									"
								>
									<div
										class="download-item"
									>
										<a
											href="https://play.google.com/store/apps/details?id=com.swensens1112.swensens"
											target="_blank"
										>
											<img
												src="/assets/images/google-play.png"
												alt="Google Play"
											/>
										</a>
									</div>
								</div>
								<div
									class="ant-col ant-col-12"
									style="
										padding-left: 12px;
										padding-right: 12px;
									"
								>
									<div
										class="download-item"
									>
										<a
											href="https://apps.apple.com/th/app/swensens/id1553427962"
											target="_blank"
										>
											<img
												src="/assets/images/app-store.png"
												alt="App Store"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.page-bottom {
	background-image: url('/assets/images/bg-page-bottom.jpg');
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	padding-top: 70px;
}

@media (max-width: 820px) {
	.page-bottom {
		padding-top: 40px;
	}

	.page-bottom .column-image {
		order: 1;
	}

	.page-bottom .app-screen {
		max-width: 90%;
	}

	.page-bottom .column-content {
		order: 0;
		width: 100%;
	}

	.page-bottom .app-download {
		text-align: center;
		margin-bottom: 40px;
	}

	.page-bottom .app-download .heading {
		font-size: 32px;
	}

	.page-bottom .app-download .download-list {
		max-width: 450px;
		margin-left: auto;
		margin-right: auto;
	}
}

.app-screen img {
	display: block;
	width: 100%;
	height: auto;
}

.download-list .download-item img {
	display: block;
	width: 100%;
	height: auto;
}

.app-download .heading {
	font-size: 40px;
	margin: 0 0 24px;
}
.container,
.container-fluid {
	padding: 0 24px;
	margin: 0 auto;
	max-width: 1200px;
}

@media (max-width: 820px) {
	.container,
	.container-box,
	.container-fluid {
		padding: 0 16px;
	}
}
</style>
