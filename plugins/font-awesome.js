import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronRight, faChevronLeft, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faChevronRight,
	faChevronLeft,
	faBars,
	faTimes,
	faEnvelope,
	faCheckCircle,
	faFacebookF,
	faGooglePlusG,
	faLinkedinIn,
	faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
