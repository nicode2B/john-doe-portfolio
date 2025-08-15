import { Container } from 'react-bootstrap';
import LegalAccordion from '../components/LegalAccordion';
import Seo from '../components/Seo';
import { useEffect } from 'react';

export default function MentionsLegales(){
    
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
    return () => { robots.setAttribute('content', 'index, follow');};
  }, []);

  return (
    <>
      <Seo title="Mentions légales — John Doe" description="" />
      <Container className="py-4">
        <div className="section-title">
          <h1>Mentions légales</h1>
          <div className="bar"></div>
        </div>
        <LegalAccordion />
      </Container>
    </>
  );
}