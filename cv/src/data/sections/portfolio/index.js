import CVdemo from 'images/CVdemo.gif';
import APARIV from 'images/apariv.png';
import cuadernoanimal_image from 'images/cuadernoanimal_icon.png';

const items = [
  {
    key: "cuadernoanimal",
    title: "cuadernoanimal-title",
    url: "http://cuadernoanimal.com/",
    github: null,
    image: cuadernoanimal_image,
    description: "cuadernoanimal-description",
    tags: ["React", "cloud", "IA", "NodeJS", "MongoDB"],
  },
  {
    key: "url-shortener",
    title: "url-shortener-title",
    url: "https://dtodo1paco-url-shortener.herokuapp.com/",
    github: "https://github.com/dtodo1paco/url-shortener",
    image: "https://github.com/dtodo1paco/url-shortener/raw/master/images/demo.gif",
    description: "url-shortener-description",
    tags: ["SpringBoot", "Java", "REST", "React", "MongoDB"],
  },
  {
    key: "my-credentials",
    title: "my-credentials-title",
    url: "https://my-credentials.herokuapp.com/",
    github: "https://github.com/dtodo1paco/my-credentials/",
    image: "https://github.com/dtodo1paco/my-credentials/raw/master/images/demo.gif",
    description: "my-credentials-description",
    tags: ["NodeJS", "pug", "REST", "cloud", "MongoDB"],
  },
  {
    key: "chatbot",
    title: "chatbot-title",
    url: "https://dtodo1paco.github.io/react-simple-chatbot/",
    github: "https://github.com/dtodo1paco/react-simple-chatbot/tree/master",
    image: "https://github.com/dtodo1paco/react-simple-chatbot/raw/master/screenshots/20180810_02.png",
    description: "chatbot-description",
    tags: ["React", "axios", "REST", "google", "integration", "Heroku"],
  },
  {
    key: "population",
    title: "population-title",
    url: "https://my-population.herokuapp.com/",
    github: "https://github.com/dtodo1paco/python-with-redux",
    image: "https://raw.githubusercontent.com/dtodo1paco/python-with-redux/master/screenshots/demo.gif",
    description: "population-description",
    tags: ["Python", "Flask", "REST", "React", "PostgreSQL"],
  },
  {
    key: "apariv",
    title: "apariv-title",
    url: "https://www.youtube.com/watch?v=gCfUrathIVc",
    github: null,
    image: APARIV,
    description: "apariv-description",
    tags: ["Liferay", "Angular1.2", "Java", "Spring", "MySQL"],
  },
  {
    key: "this",
    title: "this-title",
    url: "https://dtodo1paco.github.io/cv/index.html",
    github: "https://github.com/dtodo1paco/dtodo1paco.github.io",
    image: CVdemo,
    description: "this-description",
    tags: ["React", "react-intl", "bootstrap", "jest", "reactstrap", "fontawesome", "sass"],
  },
  {
    key: "athento",
    title: "athento-title",
    url: "https://github.com/athento/athento-nx-automation-extended/commits?author=pacoalias",
    github: "https://github.com/pacoalias?tab=repositories",
    image: "https://jira.nuxeo.com/secure/attachment/65118/nuxeo-logo-3.png",
    description: "athento-description",
    tags: ["Java", "maven", "Nuxeo", "OSGi"],
  },
];

export default items;