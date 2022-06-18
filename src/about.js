export default class about {
    init() {
      const header = document.querySelector('.header');
      const headerContent = document.createElement('div');
      headerContent.classList.add('header-content');
      const h1Header = document.createElement('h1');
      h1Header.classList.add('about-header')
      h1Header.textContent = 'About Us';
      headerContent.appendChild(h1Header);
      header.appendChild(headerContent);
    }
}