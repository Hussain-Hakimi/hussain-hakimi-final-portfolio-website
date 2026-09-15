import { Link } from 'react-router-dom';
import { certifications } from '../../data';

export default function Certifications() {
  if (!certifications.length) return null;
  return <section className="section section-alt"><div className="container"><span className="section-label">Credentials</span><h2 className="section-title">Learning in public</h2><div className="certifications-grid">{certifications.map(certificate => <article className="certification-card" key={certificate.title}><p className="section-label">{certificate.issuer}</p><h3>{certificate.title}</h3></article>)}</div><p><Link className="btn btn-secondary btn-sm" to="/certifications">All credentials</Link></p></div></section>;
}
