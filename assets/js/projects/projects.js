const projects = [
  {
    name: 'Earthbnb',
    description: `This web application is built to enable users browser 
    through different houses which they can reserve on choice basis. The 
    users can add their own houses to let other users reserve that for 
    extra income. Users can register an account to use the website with 
    full access with a unique username. It uses a REST API build with nodejs
    <a href="https://github.com/ShinhyoBelok/earthbnb-backend-js" target="_blank">earthbnb-backend</a>`,
    resume: `This web application is built to enable users browser 
    through different houses which they can reserve on choice basis. The 
    users can add their own houses to let other users reserve that for 
    extra income. Users can register an account to use the website with 
    full access with a unique username.`,
    image: 'img/portfolio/ebnb.jpeg',
    technologies: ['Reactjs', 'JavaScript', 'Redux', 'Bootstrap', 'HTML', 'CSS', 'Nodejs', 'Expressjs', 'REST API'],
    linkToLiveVersion: 'https://earthbnb-react.onrender.com/',
    linkToSource: 'https://github.com/PrangonGhose/Earthbnb-frontend/tree/js-backend',
    dot: 'img/Counter.svg',
    devType: 'Full Stack',
    canopyli2: '2023',
    btnId: 'see-project-1',
    contentDirection: '',
  },

  {
    name: 'Chopin Concerts',
    description: `The Chopin Concerts. This extraordinary website is dedicated 
    to showcasing the extraordinary talent and artistry of world-class pianists, 
    as they bring the timeless compositions of Frederic Chopin to life. Let the melodies 
    of the piano ignite your soul and transport you to a world of pure artistic bliss.`,
    resume: `Welcome to the website for the Chopin Concerts! This platform 
    showcases exceptional performances by numerous highly skilled pianists. 
    Here, you can access all the necessary information for the upcoming events.`,
    image: 'img/portfolio/chopin.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://shinhyobelok.github.io/Classical-music-concert/',
    linkToSource: 'https://github.com/ShinhyoBelok/Classical-music-concert',
    dot: 'img/Counter.svg',
    devType: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-2',
    contentDirection: '',
  },

  {
    name: 'Space Travelers Hub',
    description: `This project involves the use of React and real-time 
    data sourced from the SpaceX API. Our objective is to develop a web 
    application for a company specializing in commercial and scientific 
    space travel services. Through this application, users will have the 
    opportunity to reserve rockets and participate in specific space missions.`,
    resume: `This project involves the use of React and real-time data 
    sourced from the SpaceX API. Through this application, users will 
    have the opportunity to reserve rockets and participate in specific 
    space missions.`,
    image: 'img/portfolio/spacehub.png',
    technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://alejandrakeber-space-travelers-hub.onrender.com/',
    linkToSource: 'https://github.com/ShinhyoBelok/space-travelers-hub',
    dot: 'img/Counter.svg',
    devType: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-3',
    contentDirection: '',
  },

  {
    name: 'Crypto Currencies',
    description: `Crypto Currencies is a web application that provides 
    live information about the top 100 cryptocurrencies through a live API. 
    The web app allows users to get all details related to the top cryptos.`,
    resume: `Crypto Currencies is a web application that provides 
    live information about the top 100 cryptocurrencies through a live API. 
    The web app allows users to get all details related to the top cryptos.`,
    image: 'img/portfolio/crypto.png',
    technologies: ['React', 'Redux', 'JavaScript', 'Jest', 'API', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://crypto-currencies-shinhyobelok.netlify.app/',
    linkToSource: 'https://github.com/ShinhyoBelok/crypto-webapp',
    dot: 'img/Counter.svg',
    devType: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-4',
    contentDirection: 'reverseGrid',
  },

  {
    name: 'BigOven',
    description: `BigOven is a ruby on rails app that help you 
    save your favorites recipes and let you keep track of your 
    food inventory by adding the food in the app, When you want 
    to cook a recipe you can generate a shopping list to see what 
    you missing to be able to do that recipe.`,
    resume: `BigOven is a ruby on rails app that help you 
    save your favorites recipes and let you keep track of your 
    food inventory.`,
    image: 'img/portfolio/bigoven.png',
    technologies: ['Ruby on Rails', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://bigoven.onrender.com',
    linkToSource: 'https://github.com/ShinhyoBelok/BigOven',
    dot: 'img/Counter.svg',
    devType: 'Back End Dev',
    canopyli2: '2023',
    btnId: 'see-project-5',
    contentDirection: 'reverseGrid',
  },

  {
    name: 'To-do list',
    description: `To do taks is a convenient website that empowers 
    you to effortlessly compile and manage your tasks in an online 
    format. Seamlessly create and organize a comprehensive task list,
     ensuring that your important to-dos are securely stored and 
     easily accessible anytime, anywhere.`,
    resume: `To do taks is a convenient website that empowers 
    you to effortlessly compile and manage your tasks in an online 
    format.`,
    image: 'img/todo-list.png',
    technologies: ['Webpack', 'JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://shinhyobelok.github.io/To-do-list/',
    linkToSource: 'https://github.com/ShinhyoBelok/To-do-list',
    dot: 'img/Counter.svg',
    devType: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-6',
    contentDirection: '',
  },
];

const projectDiv = document.getElementById('projectsDiv');

for (let i = 0; i < projects.length; i += 1) {
  const projectCard = `
  <!-- Start Single Portfolio -->
  <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
      <div class="rn-portfolio" data-bs-toggle="modal" data-bs-target="#popupModal${i}">
          <div class="inner">
              <div class="thumbnail">
                  <a href="javascript:void(0)">
                      <img src="assets/images/portfolio/portfolio-01.jpg" alt="Personal Portfolio Images">
                  </a>
              </div>
              <div class="content">
                  <div class="category-info">
                      <div class="category-list">
                          <a href="javascript:void(0)">web development</a>
                      </div>
                  </div>
                  <h4 class="title"><a href="javascript:void(0)">${projects[i].name}<i
                      class="feather-arrow-up-right"></i></a></h4>
              </div>
          </div>
      </div>
  </div>
  <!-- End Single Portfolio -->
  `;
  projectDiv.innerHTML += projectCard;
}