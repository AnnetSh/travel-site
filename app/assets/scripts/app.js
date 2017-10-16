import MobileMenu from './moduls/MobileMenu';
import RevealonScroll from './moduls/RevealonScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealonScroll($(".feature-item"), "85%");
new RevealonScroll($(".testimonial"), "60%");