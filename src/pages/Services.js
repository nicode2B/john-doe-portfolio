import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import banner from '../assets/images/banner.jpg';
import ServiceCard from '../components/ServiceCard';

export default function Services(){
  return (
    <>
      <Seo title="Services — John Doe" description="UX Design, Développement web, Référencement (SEO)." />

      <div className="hero" style={{backgroundImage:`url(${banner})`, minHeight:'40vh'}}>
        <div className="hero-content container"><h1>Mon offre de services</h1></div>
      </div>

      <p className="section-subtitle">Voici les prestations sur lesquelles je peux intervenir</p>
      <div className="section-title"><div className="bar"></div></div>

      <Container className="pb-5">
        <Row className="gy-4">
          <Col md={4}><ServiceCard icon="bi-pencil" title="UX Design">L’UX Design consiste à concevoir des produits en plaçant l’utilisateur au centre des préoccupations.</ServiceCard></Col>
          <Col md={4}><ServiceCard icon="bi-code-slash" title="Développement web">Création de sites en HTML, CSS, JavaScript, PHP et frameworks (Bootstrap, React...).</ServiceCard></Col>
          <Col md={4}><ServiceCard icon="bi-search" title="Référencement">Optimisation SEO pour améliorer la visibilité sur les moteurs de recherche.</ServiceCard></Col>
        </Row>
      </Container>
    </>
  );
}