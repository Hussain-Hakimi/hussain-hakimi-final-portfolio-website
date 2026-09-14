import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { ref.current?.classList.add('visible'); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className="animate-on-scroll">{children}</div>;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="section-label">Contact</span>
            <h1>Get in Touch</h1>
            <p>Have a project in mind, want to collaborate, or just say hello? I'd love to hear from you.</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <AnimatedSection>
              <div className="contact-section" style={{ textAlign: 'left' }}>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <span id="name-error" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span id="email-error" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message *</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell me about your project, idea, or just say hi..."
                      value={formData.message}
                      onChange={e => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      style={{ minHeight: '160px' }}
                    />
                    {errors.message && <span id="message-error" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Send Message →
                  </button>
                  
                  {submitted && (
                    <div className="form-success" role="alert">
                      ✓ Message sent successfully! I'll get back to you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <h3 style={{ marginBottom: '8px' }}>Or reach out directly</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Prefer a more direct approach? Find me on these platforms.
                </p>
                <div className="contact-links">
                  <a href={siteConfig.github} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true">⚡</span> GitHub
                  </a>
                  <a href={siteConfig.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true">💼</span> LinkedIn
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="social-pill">
                    <span aria-hidden="true">✉️</span> {siteConfig.email}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
