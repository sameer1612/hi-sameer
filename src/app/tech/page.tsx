import './tech.scss';

export default async function Tech() {
  const techStack: { label: string; technologies: { name: string; imageUrl: string; url: string }[] }[] = [
    {
      label: 'You can interview me for',
      technologies: [
        {
          name: 'Ruby on Rails',
          imageUrl: 'https://brandeps.com/logo-download/R/Rails-logo-vector-01.svg',
          url: 'https://rubyonrails.org/'
        },
        {
          name: 'Node.js',
          imageUrl: 'https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg',
          url: 'https://nodejs.org/'
        },
        {
          name: 'React',
          imageUrl: 'https://brandeps.com/logo-download/R/React-logo-vector-01.svg',
          url: 'https://reactjs.org/'
        },
        {
          name: 'Python',
          imageUrl: 'https://brandeps.com/logo-download/P/Python-logo-vector-01.svg',
          url: 'https://www.python.org/'
        },
        {
          name: 'Angular',
          imageUrl: 'https://brandeps.com/icon-download/A/Angular-wordmark-icon-vector-01.svg',
          url: 'https://angular.io/'
        },
        {
          name: 'JavaScript/TypeScript',
          imageUrl: 'https://brandeps.com/icon-download/T/Typescript-wordmark-icon-vector-01.svg',
          url: 'https://www.typescriptlang.org/'
        },
        {
          name: 'MySQL',
          imageUrl: 'https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg',
          url: 'https://www.mysql.com/'
        },
        {
          name: 'MongoDB',
          imageUrl: 'https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg',
          url: 'https://www.mongodb.com/'
        },
        {
          name: 'Nest JS',
          imageUrl: 'https://docs.nestjs.com/assets/logo-small.svg',
          url: 'https://nestjs.com/'
        },
        {
          name: 'Bootstrap',
          imageUrl: 'https://brandeps.com/icon-download/B/Bootstrap-icon-vector-07.svg',
          url: 'https://getbootstrap.com/'
        },
        {
          name: 'Material UI',
          imageUrl: 'https://brandeps.com/icon-download/M/Material-ui-icon-vector-01.svg',
          url: 'https://mui.com/'
        }
      ]
    },
    {
      label: 'My other pocket contains',
      technologies: [
        {
          name: 'Vue',
          imageUrl: 'https://brandeps.com/logo-download/V/Vue-JS-logo-vector-01.svg',
          url: 'https://vuejs.org/'
        },
        {
          name: 'Flutter',
          imageUrl: '/images/flutter.png',
          url: 'https://flutter.dev/'
        },
        {
          name: 'Java',
          imageUrl: 'https://brandeps.com/logo-download/J/Java-logo-vector-01.svg',
          url: 'https://www.java.com/'
        },
        {
          name: 'Firebase',
          imageUrl: 'https://brandeps.com/logo-download/F/Firebase-logo-vector-02.svg',
          url: 'https://firebase.google.com/'
        },
        {
          name: 'Linux',
          imageUrl: 'https://brandeps.com/icon-download/L/Linux-icon-vector-02.svg',
          url: 'https://www.linux.org/'
        },
        {
          name: 'Haskell',
          imageUrl: 'https://brandeps.com/icon-download/H/Haskell-wordmark-icon-vector-01.svg',
          url: 'https://www.haskell.org/'
        },
        {
          name: 'C++',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
          url: 'https://isocpp.org/'
        }
      ]
    }
  ];

  return (
    <main>
      <div className="text-center">
        <h1 className="title-1 text-primary my-5">Technologies</h1>
        <div className="container my-5">
          {techStack.map(({ label, technologies }) => (
            <div className="card my-2">
              <p className="font-weight-bold text-start text-primary mx-3 my-2 tech-label">{label}</p>
              <div className="techs row">
                {technologies.map(tech => (
                  <div className="col-lg-2 col-md-3 col-sm-6 my-2 img-wrapper" key={tech.name}>
                    <a href={tech.url} target="blank">
                      <img src={tech.imageUrl} alt={tech.name} title={tech.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
