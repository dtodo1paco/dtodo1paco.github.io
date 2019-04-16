import { 
  SECTION_ID_WORK_EXPERIENCE, 
  SECTION_ID_EDUCATION 
} from 'data/sections';

import codespace_image from 'images/codespace.png';
import athento_image from 'images/athento-logo1-300x105.png';
import primum_image from 'images/cropped-logo_primum-s.png';
import fesalud_image from 'images/fesalud.png';
import delaware_image from 'images/delaware.png';
import tecsidel_image from 'images/tecsidel-logo.png';
import mkz_image from 'images/mkz.jpeg';
import usal_image from 'images/usal_logo.png';
import dtodo1paco_image from 'images/favicon.ico';
import eoi_image from 'images/eoi-300x172.gif';

const items = [
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2019,
      month: 0,
    },
    date_leave: null,
    company: "company-codespace",
    company_url: "https://www.codespaceacademy.com/",
    company_image: codespace_image,
    subtitle: "Málaga",
    title: "position-codespace-teacher-title",
    description: "position-codespace-teacher-description",
    tags: ["React", "nodeJS", "express", "javascript", "jest", "enzyme", "MySQL", "MongoDB"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2017,
      month: 11,
    },
    date_leave: null,
    company: "company-own",
    company_url: "#",
    company_image: dtodo1paco_image,
    subtitle: "Málaga",
    title: "position-fullstack-engineer-title",
    description: "position-fullstack-engineer-description",
    tags: ["React", "redux", "nodeJS", "javascript", "jest", "enzyme", "Liferay", "Java", "SpringBoot", "JUnit", "Python", "PostgreSQL", "performance", "MongoDB"],
  },
  {
    type: SECTION_ID_EDUCATION,
    date: "2015 - 2015",
    date_join: {
      year: 2015,
      month: 3,
    },
    date_leave: {
      year: 2015,
      month: 6,
    },
    company: "company-eoi",
    company_url: "https://www.eoi.es/",
    company_image: eoi_image,
    subtitle: "Madrid",
    title: "position-eoi-title",
    description: "position-eoi-description",
    tags: ["Innovation", "Master", "Management"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date: "2014 - 2017",
    date_join: {
      year: 2014,
      month: 8,
    },
    date_leave: {
      year: 2017,
      month: 11,
    },
    company: "company-athento",
    company_url: "https://www.athento.com",
    company_image: athento_image,
    subtitle: "Málaga",
    title: "position-athento-title",
    description: "position-athento-description",
    tags: ["Nuxeo", "Java", "JSF", "maven", "Mirth", "javascript", "Python", "Django", "PostgreSQL", "MongoDB", "Elasticsearch", "Incident Management", "Helpdesk", "Monitoring"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2014,
      month: 3,
    },
    date_leave: {
      year: 2017,
      month: 8,
    },
    company: "company-own",
    company_url: "#",
    company_image: dtodo1paco_image,
    subtitle: "Málaga",
    title: "position-fullstack-developer-title",
    description: "position-fullstack-developer-description",
    tags: ["Liferay", "Java", "JUnit", "jQuery", "MySQL", "Apache"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2013,
      month: 0,
    },
    date_leave: {
      year: 2014,
      month: 4,
    },
    company: "company-primum",
    company_url: "http://www.primum.es/",
    company_image: primum_image,
    subtitle: "Sevilla",
    title: "position-primum-title",
    description: "position-primum-description",
    tags: ["Liferay", "Java", "JUnit", "jQuery", "REST", "PostgreSQL", "Apache"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2011,
      month: 2,
    },
    date_leave: {
      year: 2013,
      month: 0,
    },
    company: "company-fesalud",
    company_url: "https://www.linkedin.com/company/fesalud/",
    company_image: fesalud_image,
    subtitle: "Málaga",
    title: "position-fesalud-title",
    description: "position-fesalud-description",
    tags: ["Java", "JUnit", "Mirth", "javascript", "jQuery", "Liferay", ".NET", "PostgreSQL", "Apache"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2006,
      month: 8,
    },
    date_leave: {
      year: 2010,
      month: 11,
    },
    company: "company-delaware",
    company_url: "http://www.grupodelaware.com/",
    company_image: delaware_image,
    subtitle: "Madrid",
    title: "position-delaware-title",
    description: "position-delaware-description",
    tags: ["Java", "JUnit", "javascript", "JSF", ".NET", "Oracle", "Apache"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2005,
      month: 8,
    },
    date_leave: {
      year: 2006,
      month: 8,
    },
    company: "company-tecsidel",
    company_url: "http://tecsidel.com/",
    company_image: tecsidel_image,
    subtitle: "Madrid",
    title: "position-tecsidel-2-title",
    description: "position-tecsidel-2-description",
    tags: ["bash", "QA", "Tests", "PJs", "Configuration Management", "Staging"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2005,
      month: 0,
    },
    date_leave: {
      year: 2005,
      month: 8,
    },
    company: "company-mkz",
    company_url: "http://www.mkzsoluciones.com/",
    company_image: mkz_image,
    subtitle: "Zamora",
    title: "position-mkz-title",
    description: "position-mkz-description",
    tags: ["Java", "JSP", "PostgreSQL", "javascript", "Project Management", "Staging"],
  },
  {
    type: SECTION_ID_EDUCATION,
    date_join: {
      year: 2001,
      month: 9,
    },
    date_leave: {
      year: 2005,
      month: 2,
    },
    company: "company-usal",
    company_url: "https://www.usal.es/departamento-de-informatica-y-automatica",
    company_image: usal_image,
    subtitle: "Salamanca",
    title: "position-usal-2-title",
    description: "position-usal-2-description",
    tags: ["Java", "OpenGL", "AI", "Software Agents", "XML"],
  },
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2000,
      month: 7,
    },
    date_leave: {
      year: 2002,
      month: 1,
    },
    company: "company-tecsidel",
    company_url: "http://tecsidel.com/",
    company_image: tecsidel_image,
    subtitle: "Madrid",
    title: "position-tecsidel-1-title",
    description: "position-tecsidel-1-description",
    tags: ["bash", "QA", "Tests", "PJs", "Configuration Management", "Staging"],
  },
  {
    type: SECTION_ID_EDUCATION,
    date_join: {
      year: 1997,
      month: 9,
    },
    date_leave: {
      year: 2001,
      month: 2,
    },
    company: "company-usal",
    company_url: "https://www.usal.es/departamento-de-informatica-y-automatica",
    company_image: usal_image,
    subtitle: "Salamanca",
    title: "position-usal-1-title",
    description: "position-usal-1-description",
    tags: ["ASP","HTML","Javascript","SQL Server"],
  },
]

export default items;