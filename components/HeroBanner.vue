<script>
import { ref, onMounted } from 'vue';
import banner_pre_login from '../assets/text'; // Import the data

const title = ref(''); // Initialize empty refs
const subtitle = ref('');

onMounted(() => {
	console.log(banner_pre_login.title); // Now inside onMounted
	title.value = banner_pre_login.title;
	subtitle.value = banner_pre_login.subtitle;
});
</script>

<template>
	<!-- <div class="hero-banner"> -->
	<!-- <div class="banner-wrap container">
		<div class="py-4 w-1/2 flex flex-col justify-center">
			<h1 class="text-5xl">
				สมัครเป็นสมาชิก สเวนเซ่นส์วันนี้
				พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
			</h1>
			<h2 class="text-lg mt-4 font-light">
				พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน
				ยิ่งได้ ยิ่งคุ้ม ใครๆ ก็สมัครได้
				ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ
				รอไม่ได้แล้ว สมัครเลย
			</h2>
		</div>
		<img
			class="hero-banner"
			src="~/assets/images/banner-image.svg"
			alt=""
		/>
	</div> -->
	<div data-v-cd91a40a="" class="page-banner">
		<div data-v-cd91a40a="" class="banner-wrap">
			<div data-v-cd91a40a="" class="container">
				<div
					data-v-cd91a40a=""
					class="banner-row-wrap ant-row-flex ant-row-flex-middle"
					style="
						margin-left: -15px;
						margin-right: -15px;
					"
				>
					<div
						data-v-cd91a40a=""
						class="column-content ant-col ant-col-md-20 ant-col-lg-12"
						style="
							padding-left: 15px;
							padding-right: 15px;
						"
					>
						<div
							data-v-cd91a40a=""
							class="banenr-content"
						>
							<h1
								data-v-cd91a40a=""
								class="heading"
							>
								สมัครเป็นสมาชิก<br
									data-v-cd91a40a=""
								/>สเวนเซ่นส์วันนี้
								พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
							</h1>
							<div
								data-v-cd91a40a=""
								class="content"
							>
								<p
									data-v-cd91a40a=""
								>
									พิเศษสุดๆ!&nbsp;สำหรับสมาชิกสเวนเซ่นส์
									ยิ่งกิน
									ยิ่งได้
									ยิ่งคุ้ม&nbsp;ใครๆ
									ก็สมัครได้
									ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ&nbsp;รอไม่ได้แล้ว
									สมัครเลย
								</p>
							</div>
							<div
								data-v-cd91a40a=""
								class="ant-row"
								tyle="flex"
							>
								<div
									data-v-cd91a40a=""
									class="ant-col ant-col-sm-24 ant-col-md-12 ant-col-lg-12"
								>
									<div
										data-v-cd91a40a=""
										class="action to-delivery-wrapper"
									>
										<a
											data-v-cd91a40a=""
											href=""
											class="wrap image-btn-en"
										></a>
									</div>
								</div>
								<div
									data-v-cd91a40a=""
									class="ant-col ant-col-sm-24 ant-col-md-12 ant-col-lg-12"
								></div>
							</div>
						</div>
					</div>
					<div
						data-v-cd91a40a=""
						class="column-image ant-col ant-col-md-20 ant-col-lg-12"
						style="
							padding-left: 15px;
							padding-right: 15px;
						"
					>
						<div
							data-v-cd91a40a=""
							class="banner-image"
						>
							<img
								data-v-cd91a40a=""
								src="/assets/images/banner-image.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div data-v-cd91a40a="" class="ribbon"></div>
	</div>
</template>
<style scoped>
.page-banner {
	display: block;
	margin-top: 72px;
}
.banner-wrap .to-delivery-wrapper .image-btn-en[data-v-cd91a40a] {
	width: 100%;
	height: 82px;
	content: url('~/assets/images/EN_normal.svg');
}
.banner-wrap .to-delivery-wrapper .image-btn-en[data-v-cd91a40a]:hover {
	content: url('~/assets/images/EN_hover.svg');
}
</style>
