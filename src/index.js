import users from './data';
import userTemplate from './templates/userTemplate.hbs';

const list = document.querySelector('.list');

const markUp = userTemplate(users);
list.insertAdjacentHTML('beforeend', markUp);