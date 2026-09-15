import { certifications } from '../data';

export default function Certifications() {
  return <><div className="page-hero"><div className="container"><span className="section-label">Credentials</span><h1>Certifications</h1><p>Courses and credentials that support my continuous learning in software and web development.</p></div></div><section className="section"><div className="container certifications-grid">{certifications.map(certificate => <article className="certification-card" key={certificate.title}><p className="section-label">{certificate.issuer}</p><h2>{certificate.title}</h2>{certificate.credentialUrl ? <a className="btn btn-secondary btn-sm" href={certificate.credentialUrl} target="_blank" rel="noreferrer">View certificate</a> : <p className="certificate-pending">Credential link available on request.</p>}</article>)}</div></section></>;
}
