import { projects } from './projects';
import { techStack } from './stack';

export default async function Tech() {
  return (
    <main>
      <div className="mx-auto flex flex-col items-center justify-center p-4 md:w-5/6 lg:w-4/5 xl:w-3/4">
        <div>
          <h1 className="title-1 mb-8 text-center text-primary">Let's talk tech</h1>
          <p className="my-4 text-justify text-primary">
            I'm a polyglot developer, free from bounds of technologies, with a passion for building things. I don't
            align with the hype train philosophy and prioritise depth over shallow breadth. I spend weekends building
            little fun projects. Do check out them below.
          </p>
        </div>

        <div className="my-5">
          {techStack.map(({ label, technologies }) => (
            <div className="card my-2 p-4 text-center" key={label}>
              <p className="mx-auto font-medium text-primary">{label}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                {technologies.map(tech => (
                  <div className="flex flex-col items-center justify-between p-4 px-8 md:p-4 md:px-4" key={tech.name}>
                    <img src={tech.imageUrl} alt={tech.name} title={tech.name} className="p-2" />
                    <a href={tech.url} className="text-xs" target="blank">
                      {tech.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-acorn my-4 text-primary">Fun Projects</h1>
        <div className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
          {projects.map(project => (
            <div className="card flex flex-col justify-between gap-4 p-4" key={project.title}>
              <h4 className="font-medium text-primary">{project.title}</h4>
              <p>{project.description} </p>
              <a href={project.url} target="blank">
                <button className="rounded bg-primary px-4 py-2 text-white">Visit</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
