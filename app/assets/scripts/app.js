import MobileMenu from './moduls/MobileMenu';
import RevealonScroll from './moduls/RevealonScroll';
import $ from 'jquery';
import StickyHeader from './moduls/StickyHeader';
import Modal from './moduls/Modal';

var mobileMenu = new MobileMenu();
new RevealonScroll($(".feature-item"), "85%");
new RevealonScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();