const homeContent = document.createElement('div');

const content = document.createElement('div');
const h1Main = document.createElement('h1');

homeContent.classList.add('main-content');
content.classList.add('content');

h1Main.textContent = 'We do what you can imagine';
content.append(h1Main);

const homeArticles = [
    {
        title: 'Try new!',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias in fugiat exercitationem blanditi is at. Voluptatum sequi velit dolorem in exceptur i! Aliquid voluptates error molestiae consectetur pariatur corporis dolorum, id architecto quas di gnissimos voluptatum beatae velit delectus aperi am accusamus adipisci nisi aut doloremque nostru m laborum sapiente voluptas repudiandae qui quia ? Accusantium.'
    },
    {
        title: 'We are open now!',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium laboriosam exercitationem error quasi, impedit aperiam unde vel eaque excepturi, porro omnis, optio atque voluptatibus odit ad hic deleniti consectetur consequuntur velit corporis sunt provident.'
    },
    {
        title: 'Come here, we are waiting for you!',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ea deserunt, laboriosam eius eum magnam commodi maxime assumenda nemo enim architecto veritatis ut fugiat quam!'
    },
];

for (let i = 0; i < homeArticles.length; i++) {
    const article = document.createElement('div');
    const h2Article = document.createElement('h2');
    const para = document.createElement('p');
    article.classList.add('article');
    h2Article.textContent = `${homeArticles[i].title}`;
    para.textContent = `${homeArticles[i].des}`;

    article.append(h2Article, para);
    content.append(article);
}

homeContent.append(content);

export { homeContent };