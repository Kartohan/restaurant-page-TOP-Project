const menuContent = document.createElement('div');
const h1Content = document.createElement('h1');
const content = document.createElement('div');

menuContent.classList.add('menu-content');
content.classList.add('content-menu');

h1Content.textContent = 'Explore our menu!';
const itemContent = [
    {
        img: '../src/cheesecake.jpg',
        h2: 'Best cheesecake',
        des: 'You will definitely love this dessert!'
    },
    {
        img: '../src/made_dish.jpg',
        h2: 'Made dish',
        des: 'This dish has everything you could want!'
    },
    {
        img: '../src/cheesecake.jpg',
        h2: 'Best cheesecake',
        des: 'You will definitely love this dessert!'
    },
    {
        img: '../src/made_dish.jpg',
        h2: 'Made dish',
        des: 'This dish has everything you could want!'
    },
    {
        img: '../src/cheesecake.jpg',
        h2: 'Best cheesecake',
        des: 'You will definitely love this dessert!'
    },
    {
        img: '../src/made_dish.jpg',
        h2: 'Best cheesecake',
        des: 'You will definitely love this dessert!'
    },
    {
        img: '../src/cheesecake.jpg',
        h2: 'Best cheesecake',
        des: 'You will definitely love this dessert!'
    },
    {
        img: '../src/made_dish.jpg',
        h2: 'Made dish',
        des: 'This dish has everything you could want!'
    },
];

for (let i = 0; i < itemContent.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemImg = document.createElement('img');
    const itemPara = document.createElement('p');
    const itemh2 = document.createElement('h2');
    itemImg.setAttribute('src', itemContent[i].img);
    itemh2.textContent = itemContent[i].h2;
    itemPara.textContent = itemContent[i].des;
    item.append(itemImg, itemh2, itemPara);
    content.append(item);
}
menuContent.append(h1Content, content);

export { menuContent }
