require('./bootstrap');

import Vue from "vue";
import App from './components/app'

const app = new Vue ({
     el:'#app',
     components:{App}
});
