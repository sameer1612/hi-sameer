import './testimonials.scss';

export function Testimonials() {
  const testimonials = [
    {
      author: 'Tarini Charana Mishra',
      designation: 'Silicon Tech Lab, Bhubaneswar',
      content: `Sameer was an exceptional student in terms of intellectual capability and his interest in development. He has undertaken
        projects in field of IOT and Web development. He was a technology enthusiast as well as a good teacher at college mentoring
        his fellows and junior students.`
    },
    {
      author: 'Sarthak Sahoo',
      designation: 'Software Engineer at Cisco',
      content: `Sameer is a very good learner of new technologies and worked in different projects with new technologies. He is a very
        good team player and his commitment for a work is one of the best thing.`
    },
    {
      author: 'Alok Patnaik',
      designation: 'Professor, Astronomy Researcher at KIIT',
      content: `It's always a pleasure to discuss ideas with him for his in-depth knowledge of the subject. He is a thorough professional
        in his dealings - punctual, focused, sincere and dedicated. He is adventurous, would not hesitate to get in to new ideas
        and new technologies. He is an asset to any team he works with.`
    },
    {
      author: 'Nirmal Hota',
      designation: 'Director | Co-founder | CEO',
      content: `Sameer is a very technology passionate guy I have ever met. He has started his career in my team as an intern to fresher
        to a fully grown developer. I witnessed his quick growth and maturity of technology in him.`
    },
    {
      author: 'Rishav Kumar',
      designation: 'Software Engineer, Big Binary',
      content: `Sameer's multitasking ability was unlike I've seen before. I've worked with many developers but when it comes to Ruby on
        Rails, he's really good at it. In short span of time, he has gained ample of experience in Ruby on Rails. Sameer will be a
        valuable asset to any company.`
    },
    {
      author: 'JP Mohapatra',
      designation: 'Sr. Software engineer',
      content: `He proves his uniqueness and dedication each time he get a chance to resolve complex issues or handling the client. Never
        forgets to add some extra efforts towards sharing the same knowledge among team mates. It was a pleasure working with
        Sameer and wish him a great future ahead.`
    }
  ];

  return (
    <>
      <h1 className="font-acorn text-primary mt-5 mb-0 my-journey-title">Testimonials</h1>
      <small className="mb-5 text-primary source-linkedin">Sourced from LinkedIn</small>
      <div className="row testimonial-grid container gx-4 gy-3">
        {testimonials.map(testimonial => (
          <div className="col-sm-12 col-md-6" key={testimonial.author}>
            <div className="testimonial-card rounded-4">
              <p className="content">{testimonial.content}</p>
              <small className="mt-auto">
                - {testimonial.author}, {testimonial.designation}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
