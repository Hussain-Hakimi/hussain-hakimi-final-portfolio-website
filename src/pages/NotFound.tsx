import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">Go Home</Link>
        <Link to="/projects" className="btn btn-secondary">View Projects</Link>
      </div>
    </div>
  );
}
