<template>
	<div id="wrapper">
		<header class="header" :class="{'nav-open': this.displayMenu === true}">
			<a href="#" class="header-logo"><img src="../assets/images/logo_header.svg" alt="logo"/></a>
			<nav class="header-nav">
				<a class="header-close" href="#" @click="toggleMenu">
					<font-awesome-icon icon="times" />
					close
				</a>
				<ul>
					<li v-for="item in navList">
						<a :href="item.link" :target="item.target">{{ item.title }}</a>
					</li>
				</ul>
			</nav>
			<a class="header-menu" href="#" @click="toggleMenu"><font-awesome-icon icon="bars" /></a>
		</header>
		<section class="section section-hero">
			<div class="container container-large">
				<div class="content">
					<h1>Open Source Issue Tracker</h1>
					<div class="description">
						<p>Kaban is minimalistic easy to use issue tracking app build for mid-size teams.</p>
					</div>
					<a href="https://docs.kaban.app/" class="btn" target="_blank">
						Get Started
					</a>
				</div>
				<div class="media">
					<img src="../assets/images/boards@2x.png" alt="Kaban board"/>
					<div class="media-people">
						<img src="../assets/images/people.svg" alt="People"/>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-about" id="about">
			<div class="container">
				<div class="content">
					<h2>About Kaban</h2>
					<strong class="section-subtitle">video</strong>
					<p>It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.</p>
				</div>
				<div class="video">
					<a href="#" class="video-play"></a>
				</div>
			</div>
		</section>
		<section class="section section-subscribe" id="subscribe">
			<div class="container">
				<div class="section-area">
					<h2>Subscribe</h2>
					<strong class="section-subtitle">enter email</strong>
					<p>It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font.</p>
					<form action="#" class="form">
						<fieldset>
							<div class="form-holder">
								<div class="form-area form-area-mail">
									<input type="email" placeholder="Enter your email to know more">
								</div>
								<input type="submit" value="ENTER">
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
		<section class="section section-features" id="features">
			<div class="container">
				<div class="media">
					<img src="../assets/images/backlogs@2x.png" alt="Kaban backlog"/>
				</div>
				<div class="content">
					<Slider />
				</div>
			</div>
		</section>
		<section class="section section-roadmap" id="roadmap">
			<div class="container">
				<div class="section-area">
					<h2>Roadmap</h2>
					<strong class="section-subtitle">best in our product</strong>
					<p>It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.</p>
					<ul class="section-list section-list-check">
						<li>
							<strong>Feature 1</strong>
							Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over. content. 
						</li>
						<li>
							<strong>Feature 2</strong>
							Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over. content. 
						</li>
						<li>
							<strong>Feature 3</strong>
							Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over. content. 
						</li>
					</ul>
				</div>
			</div>
		</section>
		<footer class="footer">
			<div class="container">
				<div class="footer-area">
					<a href="#" class="footer-logo"><img src="../assets/images/logo_footer.svg" alt="logo"/></a>
					<ul class="footer-nav">
						<li v-for="item in navList">
							<a :href="item.link" :target="item.target">{{ item.title }}</a>
						</li>
					</ul>
				</div>
				<div class="footer-area footer-area-bottom">
					<p>© Kaban App</p>
					<ul class="footer-social">
						<li><a href="#" class="facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
						<li><a href="#" class="google"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a></li>
						<li><a href="#" class="linkedin"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a></li>
						<li><a href="#" class="twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	import Slider from '@/components/Slider';

	export default {
		name: 'landing',
		components: {
			Slider
		},
		data () {
			return {
				displayMenu: false,
				navList: [
					{
						link: '#about',
						title: 'About'
					},
					{
						link: '#subscribe',
						title: 'Subscribe'
					},
					{
						link: '#features',
						title: 'Features'
					},
					{
						link: '#roadmap',
						title: 'roadmap'
					},
					{
						link: 'https://docs.kaban.app',
						target: '_blank',
						title: 'Docs'
					},
					{
						link: 'https://github.com/pkorzh/kaban',
						target: '_blank',
						title: 'GitHub'
					},
				]
			}
		},
		methods: {
			toggleMenu () {
				this.displayMenu = !this.displayMenu
			},
		}
	}
</script>