import project01 from './../img/projects/01.jpg';
import project01Big from './../img/projects/01-big.jpg';

import project02 from './../img/projects/02.jpg';
import project02Big from './../img/projects/02-big.jpg';

import project03 from './../img/projects/03.jpg';
import project03Big from './../img/projects/03-big.jpg';

import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg';

import project05 from './../img/projects/05.jpg';
import project05Big from './../img/projects/05-big.jpg';

import project06 from './../img/projects/06.jpg';
import project06Big from './../img/projects/06-big.jpg';

const projects = [
  {
    title: 'Web-studio',
    skills: 'JS, HTML, CSS, SASS/SCSS',
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com/SVolochandrey/goit-markup-hw-08',
    livePageLink: 'https://svolochandrey.github.io/goit-markup-hw-08/',
    descr:
      '[HTML, SASS, JS, Parcel] A website with adaptive layout. Build project on github, check for build errors and live page performance. Role: Team Lead, developer.',
  },
  {
    title: 'Mimino',
    img: project02,
    imgBig: project02Big,
    skills: 'HTML, CSS, JS, SASS/SCSS',
    gitHubLink: 'https://github.com/davydiukdmytro/project-11',
    livePageLink: 'https://davydiukdmytro.github.io/project-11/index.html',
    descr:
      '[HTML, SASS, JS, Parcel] A website with adaptive layout. Build project on github, check for build errors and live page performance. Role: developer.',
  },
  {
    title: 'News-viewer app',
    img: project03,
    imgBig: project03Big,
    skills: 'JS, HTML, CSS',
    gitHubLink: 'https://github.com/davydiukdmytro/NewsViewerWebApplicatio',
    livePageLink: 'https://davydiukdmytro.github.io/NewsViewerWebApplicatio/',
    descr:
      '[HTML, SASS, JS, Handlebars, REST API, AJAX, Parcel] News search and viewing application with the ability to add news to "Read" and "Favorites" sections, utilizing pagination and offering the option to change the theme. Role: developer.',
  },
  {
    title: 'Movies app',
    img: project04,
    imgBig: project04Big,
    skills: 'React, JS, HTML, CSS',
    gitHubLink: 'https://github.com/SVolochandrey/goit-react-hw-05-movies',
    livePageLink: 'https://svolochandrey.github.io/goit-react-hw-05-movies/',
    descr:
      '[React, JS, HTML, API] Application with the ability to search for movies by title, view cast information, and read descriptions. Role: developer.',
  },
  {
    title: 'Phonebook',
    img: project05,
    imgBig: project05Big,
    skills: 'React, Redux, JS, HTML, CSS',
    gitHubLink: 'https://github.com/SVolochandrey/goit-react-hw-07-phonebook',
    livePageLink: 'https://svolochandrey.github.io/goit-react-hw-07-phonebook/',
    descr:
      '[React, Redux, JS, API, HTML,CSS] Application with the ability to add, delete, and search for contacts in your phonebook. Role: developer.',
  },
  {
    title: 'Tweets-app',
    img: project06,
    imgBig: project06Big,
    skills: 'React, Redux, JS, HTML, CSS',
    gitHubLink: 'https://github.com/SVolochandrey/tweets-app',
    livePageLink: 'https://svolochandrey.github.io/tweets-app/tweets',
    descr:
      '[React, JS, API, HTML,CSS] Application with the ability to follow and unfollow people and the ability to filter subscriptions based on their status: "Follow", "No follow", "All".',
  },
];

export { projects };
