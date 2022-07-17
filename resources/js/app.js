/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from 'vue'

import HelloWorld from './components/HelloWorld.vue';

const app = createApp({});


// registers our HelloWorld component globally
app.component('hello-world', HelloWorld);

// mount the app to the DOM
app.mount('#app');

