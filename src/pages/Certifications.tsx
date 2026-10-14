import { Award } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Credentials</span>
          <h1>Certifications</h1>
          <p>Verified courses and credentials will be listed here as they are added.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          {certifications.length > 0 ? (
            <div className="certifications-grid">
              {certifications.map((certificate) => (
                <article className="certification-card" key={certificate.title}>
                  <p className="section-label">{certificate.issuer}</p>
                  <h2>{certificate.title}</h2>
                  {certificate.credentialUrl ? (
                    <a className="btn btn-secondary btn-sm" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                      View certificate
                    </a>
                  ) : (
                    <p className="certificate-pending">Credential link available on request.</p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="resource-empty-state">
              <Award size={28} aria-hidden="true" />
              <h2>No certificates published yet</h2>
              <p>Only completed and verifiable credentials will appear here.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
