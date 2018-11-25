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
						<a :href="item.link">{{ item.title }}</a>
					</li>
				</ul>
			</nav>
			<a class="header-menu" href="#" @click="toggleMenu"><font-awesome-icon icon="bars" /></a>
		</header>
		<section class="section section-hero">
			<div class="container container-large">
				<div class="content">
					<h1>Kaban on premise AND cloud <span>soon</span></h1>
					<div class="description">
						<p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. </p>
					</div>
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
				<div class="media">
					<img src="../assets/images/page@2x.png" alt="image description"/>
					<div class="media-people">
						<img src="../assets/images/people.svg" alt="image description"/>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-about">
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
		<section class="section section-subscribe">
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
		<section class="section section-features">
			<div class="container">
					
			</div>
		</section>
		<section class="section section-roadmap">
			<div class="container">
				<div class="section-area">
					<h2>What is New</h2>
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
							<a :href="item.link">{{ item.title }}</a>
						</li>
					</ul>
				</div>
				<div class="footer-area footer-area-bottom">
					<p>© Kaban Inc. All rights reserved.</p>
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
	export default {
		name: 'landing',
		components: {},
		data () {
			return {
				displayMenu: false,
				navList: [
					{
						link: '#',
						title: 'About'
					},
					{
						link: '#',
						title: 'Subscribe'
					},
					{
						link: '#',
						title: 'How it Works'
					},
					{
						link: '#',
						title: 'Features'
					},
					{
						link: '#',
						title: 'roadmap'
					}
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