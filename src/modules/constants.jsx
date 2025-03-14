import minishopImage from '../assets/images/projects/minishop.jpeg';
import todoimg from '../assets/images/projects/todo.jpeg';
import anyfilmImg from '../assets/images/projects/anyfilm.png';
import biteBrowseImg from '../assets/images/projects/BiteBrowse.png';

export const workCardData = [
  {
    imgsrc: anyfilmImg,
    imgAlt: 'any-fIlm',
    aos: 'flip-left',
    demoLink: 'https://anyfilmco.netlify.app/',
    codeLink: 'https://github.com/somemohit/anyfilm',
    appName: 'AnyFilm',
    appDesc:
      'AnyFilm is a comprehensive platform developed using React.js, TypeScript, HTML, and Tailwind CSS, offering users detailed information on a wide array of movies and TV shows. It provides features such as searching for films and series, viewing top-rated content, exploring new releases, and checking what is currently playing. Users can access in-depth details including cast and crew information, plot summaries, and ratings.',
    techStack: ['React JS', 'TypeScript', 'Tailwind'],
  },
  {
    imgsrc: biteBrowseImg,
    imgAlt: 'biteBrowse',
    aos: 'flip-right',
    demoLink: 'https://bitebrowse.netlify.app/',
    codeLink: 'https://github.com/somemohit/BiteBrowse',
    appName: 'BiteBrowse',
    appDesc:
      'BiteBrowse is a culinary hub where you can search for recipes, view daily specials, and explore a variety of cuisines such as Thai, Indian, American, and Moroccan. Each recipe provides detailed information, including ingredients, instructions. Enjoy a personalized experience with features like watch history and customizable dark and light modes. Designed with user-friendly navigation, Find the perfect dish to suit your taste and dietary preferences.',
    techStack: ['React JS', 'TypeScript', 'Tailwind'],
  },
  {
    imgsrc: todoimg,
    imgAlt: 'todolist',
    aos: 'flip-left',
    demoLink: 'https://somemohit.github.io/todo/',
    codeLink: 'https://github.com/somemohit/todo',
    appName: 'To-do List App',
    appDesc:
      'This to-do list app, developed using React.js, HTML, and CSS, enables users to efficiently manage daily tasks. It supports CRUD operations, allowing users to add, delete, and mark tasks as complete. The application features a user-friendly interface for seamless task management.',
    techStack: ['React JS', 'CSS'],
  },
  {
    imgsrc: minishopImage,
    imgAlt: 'minishop',
    aos: 'flip-right',
    demoLink: 'https://somemohit.github.io/router_project/',
    codeLink: 'https://github.com/somemohit/router_project',
    appName: 'Minishop',
    appDesc:
      'MiniKart - a demo website, developed using React.js and Bootstrap, features a collection of dummy products. Users can interactively explore product details, including images and prices, by clicking on each item. Leveraging React Router v6, the site offers smooth, client-side navigation between pages without full reloads. In addition to product browsing, the website provides essential informational pages such as About Us, Contact, Sign Up, and Login. ',
    techStack: ['React JS', 'Bootstrap'],
  },
];
