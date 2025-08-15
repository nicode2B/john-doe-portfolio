import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import banner from '../assets/images/banner.jpg';
import ServiceCard from '../components/ServiceCard';

export default function Services(){
  return (
    <>
      <Seo title="Services — John Doe" description="UX Design, Développement web, Référencement (SEO)." />

      <div className="hero" style={{backgroundImage:`url(${banner})`, minHeight:'25vh'}}></div>

      <div className="section-title mb-5">
        <h1>Mon offre de services</h1>
        <p className="section-subtitle">Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="bar"></div>
      </div>

      <Container className="pb-5">
        <Row className="gy-4">
          <Col md={4}><ServiceCard icon="bi-pencil" title="UX Design">L’UX Design est une dicipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible</ServiceCard></Col>
          <Col md={4}><ServiceCard icon="bi-code-slash" title="Développement web">Le développement de sites web consiste à Créer de sites internet en utilisant des langages de programmation ( HTML, CSS, JavaScript, PHP, etc. ) et des frameworks (Bootstrap, React, Agular, etc.).</ServiceCard></Col>
          <Col md={4}><ServiceCard icon="bi-search" title="Référencement">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats de recherches (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site</ServiceCard></Col>
        </Row>
      </Container>
    </>
  );
}