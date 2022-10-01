function buildMain() {
    const content = document.querySelector('.content');
    const main = document.createElement('main');
    main.classList.add('mainContent');
    content.appendChild(main);
    return main;
  }

  export default buildMain;