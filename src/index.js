import users from './data';
import userTemplate from './templates/userTemplate.hbs';  // Імпорт шаблону

const template = userTemplate;
const context = { users };
const html = template(context);
document.body.innerHTML += html;