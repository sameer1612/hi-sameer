import './tech.scss';

export default async function Tech() {
  const techStack: { label: string; technologies: { name: string; url: string }[] }[] = [
    {
      label: 'Languages',
      technologies: [
        {
          name: 'Ruby',
          url: 'https://www.ruby-lang.org/'
        },
        {
          name: 'Python',
          url: 'https://www.python.org/'
        },
        {
          name: 'Dart',
          url: 'https://dart.dev/'
        },
        {
          name: 'Java',
          url: 'https://www.java.com/'
        },
        {
          name: 'JavaScript',
          url: 'https://developer.mozilla.org/en/JavaScript/'
        },
        {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/'
        }
      ]
    },
    {
      label: 'Frontend',
      technologies: [
        {
          name: 'React',
          url: 'https://reactjs.org/'
        },
        {
          name: 'Angular',
          url: 'https://angular.io/'
        },
        {
          name: 'Vue',
          url: 'https://vuejs.org/'
        },
        {
          name: 'Flutter',
          url: 'https://flutter.dev/'
        },
        {
          name: 'Bootstrap',
          url: 'https://getbootstrap.com/'
        },
        {
          name: 'Material UI',
          url: 'https://mui.com/'
        }
      ]
    },
    {
      label: 'Backend',
      technologies: [
        {
          name: 'Ruby on Rails',
          url: 'https://rubyonrails.org/'
        },
        {
          name: 'Node.js',
          url: 'https://nodejs.org/'
        },
        {
          name: 'Flask',
          url: 'https://flask.palletsprojects.com'
        },
        {
          name: 'Express JS',
          url: 'http://expressjs.com'
        },
        {
          name: 'Nest JS',
          url: 'https://nestjs.com/'
        }
      ]
    },
    {
      label: 'Databases',
      technologies: [
        {
          name: 'PostgreSQL',
          url: 'http://www.postgresql.org'
        },
        {
          name: 'MySQL',
          url: 'https://www.mysql.com/'
        },
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/'
        },
        {
          name: 'Firebase',
          url: 'https://firebase.google.com/'
        }
      ]
    }
  ];

  return (
    <main>
      <div className="text-center">
        <h1 className="title-1 text-primary my-5">Technologies</h1>
        <div className="container my-5 row mx-auto">
          {techStack.map(({ label, technologies }) => (
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card tech-card my-2">
                <p className="font-weight-bold text-start text-primary mx-3 my-2 tech-label">{label}</p>
                <div className="techs row">
                  {technologies.map(tech => (
                    <a
                      className="text-start lead"
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      referrerPolicy="no-referrer">
                      ↗ {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
