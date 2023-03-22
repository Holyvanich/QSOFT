/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from './modules/tabs.js';
import swiper from './modules/swiper';
import select from './modules/select';
import spoiler from './modules/spoiler';
import toolTip from './modules/toolTip';
import validate from './modules/validate';
import placeholder from './modules/placeholder';
import masks from './modules/masks';
import modal from './modules/modal';
import showMore from './modules/show-more';


const app = {
    ready() {
        // Пример вызова импортированных функций
        // pluginName();

        // myModule();
        tabs();
        swiper();
        select();
        spoiler();
        toolTip();
        validate();
        placeholder();
        masks();
        modal();
        showMore();


    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
