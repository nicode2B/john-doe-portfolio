import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md>
            <h5 className="fw-semibold">John Doe</h5>
            <address className="mb-2">
              40 rue Laure Diebold<br/>
              69009 Lyon, France<br/>
              10 20 30 40 50<br/>
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </address>
            <div className="social">
              <a href="https://github.com/github-johndoe" target="_blank" rel="noopener nofollow" aria-label="Github"><i className="bi bi-github"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener nofollow" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener nofollow" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
          <Col md>
            <h6 className="fw-semibold">Liens utiles</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </Col>
          <Col md>
            <h6 className="fw-semibold">Mes dernières réalisations</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d'une API</Link></li>
              <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}