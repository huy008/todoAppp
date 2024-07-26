require('./bootstrap');

import * as Vue from "vue";
import App from './components/app'
import {library} from'@fortawesome/fontawesome-svg-core';
import {faPlusSquare,faTrash} from '@fortawesome/free-solid-svg-core';
import {fontAwesomeIcon} from '@fortawesome/vue-fontawesome';
library.add(faPlusSquare,faTrash);
Vue.components('font-awesome-icon',fontAwesomeIcon )
const app = new Vue ({
     el:'#app',
     components:{App}
});
