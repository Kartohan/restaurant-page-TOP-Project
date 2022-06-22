const menu = document.createElement('div');
const ulMenu = document.createElement('ul');
let li = [];

for (let i = 0; i < 3; i++) {
    const liMenu = document.createElement('li');
    liMenu.id = i;
    switch (liMenu.id) {
        case '0': liMenu.textContent = 'Home';
        liMenu.classList.add('Active');
        break;
        case '1': liMenu.textContent = 'Menu';
        break;
        case '2': liMenu.textContent = 'Contact';
        break;
    }
    ulMenu.append(liMenu);
}
menu.append(ulMenu);

menu.classList.add('menu');

export { menu };
