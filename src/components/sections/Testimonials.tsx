import { testimonials } from '../../data';

export default function Testimonials() {
  if (!testimonials.length) return null;
  return <section className="section"><div className="container"><span className="section-label">Recommendations</span><h2 className="section-title">What collaborators say</h2>{testimonials.map(testimonial => <blockquote key={testimonial.name}><p>“{testimonial.quote}”</p><footer>{testimonial.name}, {testimonial.role}</footer></blockquote>)}</div></section>;
}
