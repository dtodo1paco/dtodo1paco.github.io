const SECTION_ID_ABOUT = 'about';
const SECTION_ID_FURTHER_TRAINING = 'furtherTraining';
const SECTION_ID_PUBLICATIONS = 'publications';
const SECTION_ID_SKILLS = 'skills';
const SECTION_ID_PORTFOLIO = 'portfolio';
const SECTION_ID_VOLUNTEER_WORK = 'volunteerWork';
const SECTION_ID_INTERESTS = 'interests';

export const SECTION_ID_TIMELINE = 'timeline';
export const SECTION_ID_WORK_EXPERIENCE = 'workExperience';
export const SECTION_ID_EDUCATION = 'education';

export const SECTION_INTERESTS = {
  id: SECTION_ID_INTERESTS,
  icon: 'fa-heart',
};
export const SECTION_VOLUNTEER_WORK = {
  id: SECTION_ID_VOLUNTEER_WORK,
  icon: 'fa-child',
};
export const SECTION_PUBLICATIONS = {
  id: SECTION_ID_PUBLICATIONS,
  icon: 'fa-book',
};
export const SECTION_FURTHER_TRAINING = {
  id: SECTION_ID_FURTHER_TRAINING,
  icon: 'fa-tachometer-alt',
};
export const SECTION_WORK_EXPERIENCE = {
  id: SECTION_ID_WORK_EXPERIENCE,
  icon: 'fa-building',
  pos: 4,
};
export const SECTION_EDUCATION = {
  id: SECTION_ID_EDUCATION,
  icon: 'fa-graduation-cap',
  pos: 5,
};
export const SECTION_PORTFOLIO = {
  id: SECTION_ID_PORTFOLIO,
  icon: 'fa-eye',
};
export const SECTION_ABOUT = {
  id: SECTION_ID_ABOUT,
  icon: 'fa-file-alt',
};
export const SECTION_SKILLS = {
  id: SECTION_ID_SKILLS,
  icon: 'fa-code',
};

// define an order
const sections = [
  SECTION_SKILLS,
  SECTION_ABOUT,
  SECTION_PORTFOLIO,
  SECTION_WORK_EXPERIENCE,
  SECTION_EDUCATION,
  SECTION_FURTHER_TRAINING,
  SECTION_PUBLICATIONS,
  SECTION_VOLUNTEER_WORK,
  SECTION_INTERESTS
];

export default sections;