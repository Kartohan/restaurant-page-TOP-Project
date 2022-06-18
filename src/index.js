import main from './home.js';
import about from './about.js';
import './style.css';

let home = new main();
let ab = new about();

home.init();
home.createUl('Home');
home.createUl('About');
home.createUl('Contact Us');
home.createArticle('Try new!', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias in fugiat exercitationem blanditi is at. Voluptatum sequi velit dolorem in exceptur i! Aliquid voluptates error molestiae consectetur pariatur corporis dolorum, id architecto quas di gnissimos voluptatum beatae velit delectus aperi am accusamus adipisci nisi aut doloremque nostru m laborum sapiente voluptas repudiandae qui quia ? Accusantium.")
home.createArticle('We are open now!', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium laboriosam exercitationem error quasi, impedit aperiam unde vel eaque excepturi, porro omnis, optio atque voluptatibus odit ad hic deleniti consectetur consequuntur velit corporis sunt provident.")
home.createArticle('Come here, we are waiting for you!', "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ea deserunt, laboriosam eius eum magnam commodi maxime assumenda nemo enim architecto veritatis ut fugiat quam!");

const ul = document.querySelector('ul');
function clear() {
    const li = document.querySelectorAll('li');
    const header = document.querySelector('.header');
    header.removeChild(header.lastChild);
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    li.forEach(li => li.classList = '');
}
function menu(e) {
    if (e.target.textContent === 'About') {
        if (e.target.className === '') {
            clear();
            ab.init();
            e.target.classList.add('Active');
        }
    } if (e.target.textContent === 'Home') {
        if (e.target.className === '') {
            clear();
            home.initHome();
            e.target.classList.add('Active');
            home.createArticle('Try new!', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias in fugiat exercitationem blanditi is at. Voluptatum sequi velit dolorem in exceptur i! Aliquid voluptates error molestiae consectetur pariatur corporis dolorum, id architecto quas di gnissimos voluptatum beatae velit delectus aperi am accusamus adipisci nisi aut doloremque nostru m laborum sapiente voluptas repudiandae qui quia ? Accusantium.")
            home.createArticle('We are open now!', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium laboriosam exercitationem error quasi, impedit aperiam unde vel eaque excepturi, porro omnis, optio atque voluptatibus odit ad hic deleniti consectetur consequuntur velit corporis sunt provident.")
            home.createArticle('Come here, we are waiting for you!', "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ea deserunt, laboriosam eius eum magnam commodi maxime assumenda nemo enim architecto veritatis ut fugiat quam!");
        }
    }
}
ul.addEventListener('click', menu);
