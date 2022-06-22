import './style.css';
import { menu } from './nav.js';
import { header, headerMenu, headerContact } from './header.js';
import { homeContent } from './home.js';
import { footer } from './footer.js';
import { menuContent } from './menu.js';
import { contactContent } from './contact.js';

const content = document.querySelector('#content');

content.append(menu, header, homeContent, footer);

const linkHome = document.getElementById('0');
const linkMenu = document.getElementById('1');
const linkContact = document.getElementById('2');
const btn = document.querySelector('.btn-more');

function refreshActive(item) {
    const li = document.querySelectorAll('li');
    li.forEach(li => li.className === 'Active' ? li.classList.remove('Active') : '');
    item.classList.add('Active');
}

function homeBtn() {
    if (linkHome.className === '') {
    content.innerHTML = '';
    content.append(menu, header, homeContent, footer);
    }
    refreshActive(linkHome);
}

function menuBtn() {
    if (linkMenu.className === '') {
        content.innerHTML = '';
        content.append(menu, headerMenu, menuContent, footer);
    }
    refreshActive(linkMenu);
}

function contactBtn() {
    if (linkContact.className === '') {
        content.innerHTML = '';
        content.append(menu, headerContact, contactContent, footer);
    }
    refreshActive(linkContact);
}

linkHome.addEventListener('click', homeBtn);
linkMenu.addEventListener('click', menuBtn);
linkContact.addEventListener('click', contactBtn);

btn.addEventListener('click', menuBtn);
