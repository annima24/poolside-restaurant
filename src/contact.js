import buildHeader from './components/headerBuilder';
import buildMain from './components/mainBuilder';
import mapPhoto from './assets/mapPhoto.png';

function contactContent() {
  const mainContent = document.querySelector('.mainContent');
  mainContent.classList.add('contact');
  const phone = createPhoneInfo();
  const location = createLocationInfo();
  const map = createMapImage();
  mainContent.appendChild(phone);
  mainContent.appendChild(location);
  mainContent.appendChild(map);
}

function createPhoneInfo() {
  const phone = document.createElement('div');
  phone.classList.add('phoneInfo');
  const phoneInfoText = document.createElement('p');
  phoneInfoText.textContent = `Call here for more information, or to make a reservation:`;
  const phoneElement = document.createElement('a');
  const phoneElementTextNode = document.createTextNode('(508) 255-4000');
  phoneElement.href = 'tel:+15082554000';
  phoneElement.appendChild(phoneElementTextNode);
  phone.appendChild(phoneInfoText);
  phone.appendChild(phoneElement);
  return phone;
}

function createLocationInfo() {
  const location = document.createElement('p');
  location.textContent = `We're located at 3620 State Hwy, Eastham, MA 02642`;
  return location;
}

function createMapImage() {
  const mapImage = new Image(900, 500);
  mapImage.src = mapPhoto;
  mapImage.alt = 'Image of location on map';
  return mapImage;
}

function buildContact() {
  buildHeader();
  buildMain();
  contactContent();
}

export default buildContact;
