const contactContent = document.createElement('div');
const h1Content = document.createElement('h1');
const h2Content = document.createElement('h2');
const content = document.createElement('div');
const map = document.createElement('div');
const ul = document.createElement('ul');

contactContent.classList.add('content-contact');
content.classList.add('contact-article');
map.classList.add('map');

h1Content.textContent = 'See our\'s contact below';
map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14951977.760307666!2d-19.277083357112335!3d-23.804897908218756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b10c91d2619%3A0xe4710f5b2b64dc6e!2z0L4uINCh0LIuINCV0LvQtdC90Ys!5e0!3m2!1sru!2sua!4v1655885634241!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>'
h2Content.textContent = 'Yes! We are in the middle of nowhere!';

const contactData = [
    {
        text: 'Phone: 000 - 000 - 000'
    },
    {
        text: 'Email: example@gmail.com'
    },
    {
        text: 'Post Code: xxx-xxx'
    },
    {
        text: 'Some example: 123-1345-1234'
    }
]

for(let i = 0; i < contactData.length; i++) {
    const li = document.createElement('li');
    li.textContent = contactData[i].text;
    ul.append(li);
}

content.append(ul)
contactContent.append(h1Content, content, h2Content, map)
export { contactContent }