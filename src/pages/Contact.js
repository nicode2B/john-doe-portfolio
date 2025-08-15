import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';

export default function Contact(){
  return (
    <>
      <Seo title="Contact — John Doe" description="Formulaire de contact (tous champs obligatoires) + coordonnées et carte." />

      <div className="section-title mt-4">
        <h1>Contact</h1>
        <p className="section-subtitle">Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.</p>
        <div className="bar"></div>
      </div>

      <Container className="pb-5">
        <Row className="gy-4">
          <Col md={6}>
            <div className="p-3 rounded-3 bg-white shadow-sm">
              <h5 className="fw-semibold">Formulaire de contact</h5>
              <hr className="hr-blue" />
              <ContactForm />
            </div>
          </Col>
          <Col md={6}>
            <div className="p-3 rounded-3 bg-white shadow-sm">
              <h5 className="fw-semibold">Mes coordonnées</h5>
              <hr className="hr-blue" />
              <address>
                <div className="mb-1"><i className="bi bi-buildings me-2"/>40 rue Laure Diebold</div>
                <div className="mb-1"><i className="bi bi-geo-alt me-2"/>69009 Lyon, France</div>
                <div className="mb-1"><i className="bi bi-telephone me-2"/>10 20 30 40 50</div>
                <div className="mb-3"><i className="bi bi-envelope me-2"/><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></div>
              </address>
              <div className="ratio ratio-4x3">
                <iframe title="Google Map" src="https://www.google.com/maps?q=40+rue+Laure+Diebold+Lyon&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}