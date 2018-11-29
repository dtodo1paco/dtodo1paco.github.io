import { 
  SECTION_ID_WORK_EXPERIENCE, 
  SECTION_ID_EDUCATION 
} from 'data/sections';

const items = [
  {
    type: SECTION_ID_WORK_EXPERIENCE,
    date_join: {
      year: 2017,
      month: 11,
    },
    date_leave: null,
    company: "company-own",
    company_url: "#",
    subtitle: "Málaga",
    title: "position-fullstack-engineer-title",
    description: "position-fullstack-engineer-description",
    tags: ["React", "redux", "nodeJS", "javascript", "jest", "enzyme", "Liferay", "Java", "SpringBoot", "JUnit", "Python", "PostgreSQL", "performance", "MongoDB"],
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
    subtitle: "Salamanca",
    title: "position-usal-1-title",
    description: "position-usal-1-description",
    tags: ["ASP","HTML","Javascript","SQL Server"],
  },
]

export default items;