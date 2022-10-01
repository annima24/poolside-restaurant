import buildHeader from './components/headerBuilder';
import buildMain from './components/mainBuilder';
import menu from './components/menuObject';

//individual menu items
function createMenuItem(name, description, price) {
  //creating the elements for display
  const item = document.createElement('div');
  //rows used for styling purposes
  const topRow = document.createElement('div');
  const bottomRow = document.createElement('div');
  //create the elements
  const itemName = document.createElement('h3');
  const itemDescription = document.createElement('p');
  const itemPrice = document.createElement('h3');
  //add class to style/format in css
  topRow.classList.add('topRow');
  //set the text for each element
  itemName.innerText = name;
  itemPrice.innerText = price;
  itemDescription.innerText = description;
  //append the elements to the rows
  topRow.appendChild(itemName);
  topRow.appendChild(itemPrice);
  bottomRow.appendChild(itemDescription);
  //append the rows to the item div
  item.appendChild(topRow);
  item.appendChild(bottomRow);
  return item;
}

function createMenuSection(sectionName, sectionSubText, menuItems) {
  const section = document.createElement('div');
  const name = document.createElement('h2');
  const subText = document.createElement('p');
  const items = document.createElement('div');

  section.classList.add('section');
  items.classList.add('items');
  subText.classList.add('subText');

  name.innerText = sectionName;
  subText.innerText = sectionSubText;
  section.appendChild(name);
  section.appendChild(subText);
  section.appendChild(items);

  menuItems.forEach((item) => items.appendChild(item));
  menuItems.forEach((item) => item.classList.add('menuItemBox'));
  return section;
}

function menuContent() {
  const mainContent = document.querySelector('.mainContent');

  mainContent.classList.add('menu');

  mainContent.appendChild(
    createMenuSection(
      'Eggs',
      `All eggs are served with homefries and your choice of toast or house made english muffin.`,
      menu.eggs,
    ),
  );
  mainContent.appendChild(
    createMenuSection(
      `Omelettes`,
      `All omelettes are served with homefries and your choice of toast or house made english muffin.`,
      menu.omlettes,
    ),
  );
  mainContent.appendChild(
    createMenuSection(`The sweeter side`, ``, menu.sweeterSide),
  );
  mainContent.appendChild(createMenuSection(`Sides`, ``, menu.sides));

  mainContent.appendChild(createMenuSection(`Hot or cold cereal`, ``, menu.cereal));

  return mainContent;
}

function buildMenu() {
  buildHeader();
  buildMain();
  menuContent();
}

export { buildMenu, createMenuItem };

//in menu content, grab the main content div so that you can build your menu on top of it
