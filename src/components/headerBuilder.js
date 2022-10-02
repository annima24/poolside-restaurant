import buildContact from '../contact';
import buildHome from '../home';
import {buildMenu} from '../menu';

function createTitle() {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Poolside Restaurant';
  return title;
}

function createNavLink(title, link) {
  const navLink = document.createElement('a');
  const textNode = document.createTextNode(`${title}`);
  navLink.addEventListener('click', link);
  navLink.appendChild(textNode);
  navLink.classList.add('navLink');
  return navLink;
}

function createNavBar() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.appendChild(createNavLink('home', buildHome));
  nav.appendChild(createNavLink('menu', buildMenu));
  nav.appendChild(createNavLink('contact', buildContact));
  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(createTitle());
  header.appendChild(createNavBar());
  return header;
}

function buildHeader() {
  const content = document.querySelector('.content');
  content.innerHTML = '';  
  content.appendChild(createHeader());
  return content;
}

export default buildHeader;
