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
      'AnyFilm is a comprehensive movie and TV show search platform that offers users detailed information on a wide array of films and series including cast and crew information, plot summaries, and ratings.',
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
      'Discover a world of delicious dishes on our recipe website, where you can explore a vast collection of tasty recipes. Our intuitive search function allows you to find any recipe',
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
      'This is a to-do list app to manage your daily tasks and activities that you want to do. I have made this using React js. This app follows the CRUD operation. You can add, delete, mark your to-do items.',
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
      'This is a simple demo website having some dummy products. You can see the product information by clicking on the product. I have made this in React JS and Bootstrap. I have used React Router v6 to navigate through different pages without reloading.',
    techStack: ['React JS', 'Bootstrap'],
  },
];
