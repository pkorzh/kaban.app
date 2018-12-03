<template>
	<div class="slider">
		<div class="slider-holder">
			<div class="slider-track" :style="{ transform: 'translate(-' + transformTrack + 'px)' }">
				<div class="slider-slide" :style="{ width: slideWidth + 'px' }">
					<h2>Features</h2>
					<strong class="section-subtitle">why kaban</strong>
					<ul class="section-list slider-list">
						<li>
							<strong>Multiple Editing</strong>
							Create and edit tickets in a batch
						</li>
						<li>
							<strong>Guest Users</strong>
							Invite contractors for limited time
						</li>
						<li>
							<strong>Estimated waiting time</strong>
							Know when ticket will be worked on
						</li>
					</ul>
				</div>
				<div class="slider-slide" :style="{ width: slideWidth + 'px' }">
					<h2>Features2</h2>
					<strong class="section-subtitle">why kaban</strong>
					<ul class="section-list slider-list">
						<li>
							<strong>Multiple Editing</strong>
							Create and edit tickets in a batch
						</li>
						<li>
							<strong>Guest Users</strong>
							Invite contractors for limited time
						</li>
						<li>
							<strong>Estimated waiting time</strong>
							Know when ticket will be worked on
						</li>
					</ul>
				</div>
				<div class="slider-slide" :style="{ width: slideWidth + 'px' }">
					<h2>Features3</h2>
					<strong class="section-subtitle">why kaban</strong>
					<ul class="section-list slider-list">
						<li>
							<strong>Multiple Editing</strong>
							Create and edit tickets in a batch
						</li>
						<li>
							<strong>Guest Users</strong>
							Invite contractors for limited time
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="slider-nav">
			<span class="slider-arrow slider-prev" @click="prev"><font-awesome-icon icon="chevron-left" /></span>
			<span class="slider-arrow slider-next" @click="next"><font-awesome-icon icon="chevron-right" /></span>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Slider',
		data () {
			return {
				slideWidth: 0,
				sliderCount: 0,
				currentItem: 0
			}
		},
		computed: {
			transformTrack() {
				return this.currentItem * this.slideWidth
			}
		},
		methods: {
			initSlider: function () {
				let slide = this.$el;
				this.sliderCount = slide.querySelectorAll('.slider-slide').length;
				this.slideWidth = slide.clientWidth;
			},
			prev: function () {
				if (this.currentItem === 0) {
					return
				}
				this.currentItem--
			},
			next: function () {
				if (this.currentItem === this.sliderCount - 1) {
					return
				}
				this.currentItem++;
			}
		},

		mounted () {
			this.initSlider();
			window.addEventListener('resize', () => {
				this.initSlider()
			})
		}
	};
</script>

<style>
</style>
