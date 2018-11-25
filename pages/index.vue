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
    <section class="section">
        <div class="container container-expand">
            <div class="content">
                <h1>Kaban on premise AND cloud</h1>
                <div class="description">
                    <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. </p>
                </div>
                <form action="#" class="form-send">
                    <fieldset>
                        <input type="email" placeholder="Enter your email to know more">
                        <input type="submit" value="ENTER">
                    </fieldset>
                </form>
            </div>
        </div>
    </section>
    <section class="section section-about">
        <div class="container">
            <h2>About Kaban</h2>
            <strong class="subtitle">video</strong>
            <p>It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.</p>
        </div>
    </section>
    <section class="section section-subscribe">
        <div class="container">
            
        </div>
    </section>
    <section class="section">
        <div class="container">
            
        </div>
    </section>
    <section class="section">
        <div class="container">
            
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