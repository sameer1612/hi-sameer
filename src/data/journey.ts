type Journey = {
  title: string;
  roles: {
    position: string;
    description: string;
  }[];
};

export const journeyList: Journey[] = [
  {
    title: 'Zensar Technologies',
    roles: [
      {
        position: 'Senior Lead of Engineering',
        description: `Leading workforce transformation through agentic engineering acceleration and establishing a Center of Excellence.`,
      },
    ],
  },
  {
    title: 'Sedin Technologies',
    roles: [
      {
        position: 'Senior Technical Consultant',
        description: `Led frontend and full-stack modernization across aviation, analytics, healthcare, and enterprise SaaS platforms, using Angular, React, Rails, Django, NestJS, Spring Boot, and cloud-native tooling.
        Specialized in platform migrations, microservices adoption, performance optimization, reusable component systems, and CI/CD. In healthcare, built SSR-enabled React inside Rails monoliths, FHIR integrations, secure data ingestion pipelines, and document processing automation.`,
      },
    ],
  },
  {
    title: 'Mindfire Solutions',
    roles: [
      {
        position: 'Software Engineer',
        description: `Built real-time influencer analytics and content intelligence platforms for theAmplify using Ruby, Python, React, and Google AutoML technologies.
        Developed data visualization dashboards, NLP utilities, anomaly detection systems, and modernized legacy Rails + React applications into scalable TypeScript-based architectures.`,
      },
    ],
  },
];
