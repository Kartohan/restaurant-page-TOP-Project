const header = document.createElement('div');
const headerContent = document.createElement('div');
const h1Header = document.createElement('h1');
const h3Header = document.createElement('h3');
const btnHeader = document.createElement('button');

h1Header.textContent = 'Cheesy Dreams';
h3Header.textContent = 'Welcome to';
btnHeader.textContent = 'Explore Menu';

header.classList.add('header');
headerContent.classList.add('header-content');
btnHeader.classList.add('btn-more');

headerContent.append(h3Header, h1Header, btnHeader);
header.append(headerContent);

const headerMenu = document.createElement('div');
const headerMenuContent = document.createElement('div');
headerMenu.classList.add('header');
headerMenuContent.classList.add('menu-header');
const h1Menu = document.createElement('h1');
h1Menu.textContent = 'Menu';
headerMenuContent.append(h1Menu);
headerMenu.append(headerMenuContent);

const headerContact = document.createElement('div');
const headerContactContent = document.createElement('div');
headerContact.classList.add('header');
headerContactContent.classList.add('contact-header');
const h1Contact = document.createElement('h1');
h1Contact.textContent = 'Contact Us';
headerContactContent.append(h1Contact);
headerContact.append(headerContactContent);

export { header, headerMenu, headerContact }
