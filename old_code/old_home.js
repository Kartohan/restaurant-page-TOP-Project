// export default class main {
//     init() {
//         const content = document.querySelector('#content');
//         const header = document.createElement('div');
//         header.classList.add('header');
//         const menu = document.createElement('div');
//         menu.classList.add('menu');
//         const ulMenu = document.createElement('ul');
//         menu.appendChild(ulMenu);
//         content.appendChild(menu);
//         content.appendChild(header);

//         const headerContent = document.createElement('div');
//         headerContent.classList.add('header-content');
//         const h1Header = document.createElement('h1');
//         const h3Header = document.createElement('h3');
//         const btnHeader = document.createElement('button')
//         btnHeader.textContent = 'More';
//         h1Header.textContent = 'Cheesy Dreams';
//         h3Header.textContent = 'Welcome to';
//         btnHeader.classList.add('btn-more')
//         headerContent.appendChild(h3Header);
//         headerContent.appendChild(h1Header);
//         headerContent.appendChild(btnHeader);
//         header.appendChild(headerContent);

//         const mainContent = document.createElement('div');
//         const mcontent = document.createElement('div');
//         mainContent.classList.add('main-content');
//         mcontent.classList.add('content');
//         const h1Main = document.createElement('h1');
//         h1Main.textContent = 'We do what you can imagine';
//         mcontent.appendChild(h1Main);
//         mainContent.appendChild(mcontent);
//         content.appendChild(mainContent);

//         const footer = document.createElement('div');
//         const footerPara = document.createElement('p');
//         footer.classList.add('footer');
//         footerPara.innerHTML = '&copy 2022 Created by Kartohan';
//         footer.appendChild(footerPara);
//         content.appendChild(footer);
//     }
//     createUl(value) {
//         const ulMenu = document.querySelector('ul');
//         const li = document.createElement('li');
//         li.innerText = value;
//         if (value === "Home") {
//             li.classList.add('Active');
//         }
//         ulMenu.appendChild(li);
//     }
//     createArticle(header,p) {
//         const content = document.querySelector('.content')
//         const article = document.createElement('div');
//         const h2Article = document.createElement('h2');
//         const para = document.createElement('p');
//         article.classList.add('article');
//         para.textContent = p;
//         h2Article.textContent = header;

//         article.appendChild(h2Article);
//         article.appendChild(para);
//         content.appendChild(article);
//     }
//     initHome() {
//         const header = document.querySelector('.header');
//         const headerContent = document.createElement('div');
//         headerContent.classList.add('header-content');
//         const h1Header = document.createElement('h1');
//         const h3Header = document.createElement('h3');
//         const btnHeader = document.createElement('button')
//         btnHeader.textContent = 'More';
//         h1Header.textContent = 'Cheesy Dreams';
//         h3Header.textContent = 'Welcome to';
//         btnHeader.classList.add('btn-more')
//         headerContent.appendChild(h3Header);
//         headerContent.appendChild(h1Header);
//         headerContent.appendChild(btnHeader);
//         header.appendChild(headerContent);

//         const mainContent = document.querySelector('.main-content');
//         const mcontent = document.createElement('div');
//         mcontent.classList.add('content');
//         const h1Main = document.createElement('h1');
//         h1Main.textContent = 'We do what you can imagine';
//         mcontent.appendChild(h1Main);
//         mainContent.appendChild(mcontent);
//     }
// }