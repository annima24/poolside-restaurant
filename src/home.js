import buildHeader from './components/headerBuilder';
import buildMain from './components/mainBuilder';
import restaurantImage from './assets/restaurant.jpg';

function homeContent() {
  const mainContent = document.querySelector('.mainContent');
  mainContent.appendChild(createWelcomeText());
  mainContent.appendChild(createHomeImage());
  mainContent.classList.add('home')
}

function createWelcomeText() {
  const welcomeTextBox = document.createElement('div');

  const heading = document.createElement('h2');
  const headingSubText = document.createElement('p');

  welcomeTextBox.classList.add('welcomeTextBox');
  heading.classList.add('mainHeading');
  headingSubText.classList.add('headingSubText');

  heading.textContent = 'Welcome to the Poolside Restaurantt';
  headingSubText.textContent = 'at the Town Crier Motel';

  welcomeTextBox.appendChild(heading);
  welcomeTextBox.appendChild(headingSubText);

  return welcomeTextBox;
}

function createHomeImage() {
  const homeImage = new Image(600, 400);
  homeImage.src = restaurantImage;
  homeImage.alt = 'Image of restaurant interior'
  return homeImage;
}

createHomeImage();

function buildHome() {  
  buildHeader();
  buildMain();
  homeContent();
}

export default buildHome;