import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import banner from '../assets/images/banner.jpg';
import PortfolioCard from '../components/PortfolioCard';

import fresh from '../assets/images/fresh-food.jpg';
import akira from '../assets/images/restaurant-japonais.jpg';
import spa from '../assets/images/espace-bien-etre.jpg';
import seo from '../assets/images/seo.jpg';
import coder from '../assets/images/coder.jpg';
import screens from '../assets/images/screens.jpg';

export default function Portfolio(){
  return (
    <>
      <Seo title="Contact — John Doe" description="Formulaire de contact (tous champs obligatoires) + coordonnées et carte." />

      <div className="hero" style={{backgroundImage:`url(${banner})`, minHeight:'30vh'}}>
        <div className="hero-content container"><h1>Portfolio</h1></div>
      </div>

      <div className="section-title"><p className="section-subtitle">Voici quelques-unes de mes réalisations.</p><div className="bar"></div></div>

      <Container className="pb-5">
        <Row className="gy-4">
          <Col md={4}><PortfolioCard img={fresh} title="Fresh Food" desc="Site de vente de produits frais en ligne" footer="Site réalisé avec PHP et MySQL" /></Col>
          <Col md={4}><PortfolioCard img={akira} title="Restaurant Akira" desc="Site de vente de produits frais en ligne" footer="Site réalisé avec WordPress" /></Col>
          <Col md={4}><PortfolioCard img={spa} title="Espace bien-être" desc="Site de vente de produits frais en ligne" footer="Site réalisé avec LARAVEL" /></Col>
          <Col md={4}><PortfolioCard img={seo} title="SEO" desc="Amélioration du référencement d’un site e-commerce" footer="Utilisation des outils SEO" /></Col>
          <Col md={4}><PortfolioCard img={coder} title="Création d'une API" desc="Création d’une API RESTful publique" footer="PHP · SYMFONY" /></Col>
          <Col md={4}><PortfolioCard img={screens} title="Maquette d'un site web" desc="Création d’un prototype de site" footer="Réalisé avec FIGMA" /></Col>
        </Row>
      </Container>
    </>
  );
}