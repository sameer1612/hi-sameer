import { projects } from './projects';
import { techStack } from './stack';
import './tech.scss';
import Image from 'next/image';

export default async function Tech() {
  return (
    <main>
      <div className="text-center">
        <h1 className="title-1 text-primary my-5">Let's talk tech</h1>
        <p className="text-primary container my-4 intro">
          I'm a polyglot developer, free from bounds of technologies, with a passion for building things. I don't align
          with the hype train philosophy and prioritise depth over shallow breadth. I spend weekends building little fun
          projects. Do check out them below.
        </p>

        <div className="container my-5">
          {techStack.map(({ label, technologies }) => (
            <div className="card my-2">
              <p className="font-weight-bold text-primary mx-3 my-2 tech-label">{label}</p>
              <div className="techs row">
                {technologies.map(tech => (
                  <div className="col-lg-2 col-md-3 col-sm-6 my-2 img-wrapper" key={tech.name}>
                    <img src={tech.imageUrl} alt={tech.name} title={tech.name} className="p-2" />
                    <a href={tech.url} target="blank">
                      <small>{tech.name}</small>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-acorn text-primary mt-5 pt-5">Fun Projects</h1>
        <div className="container mt-4 mb-5">
          <div className="row">
            {projects.map(project => (
              <div className="col-md-6 col-sm-12 my-2 container" key={project.title}>
                <div className="card p-3 h-100 d-flex flex-col justify-content-between">
                  <h4 className="text-primary mb-3">{project.title}</h4>
                  <p>{project.description} </p>
                  <a href={project.url} target="blank">
                    <button className="btn btn-primary">
                      Visit <i className="ms-2 bi bi-box-arrow-up-right"></i>{' '}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
