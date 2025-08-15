import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import ModalGithub from '../components/ModalGithub';
import SkillsBar from '../components/SkillsBar';

import hero from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/john-doe-about.jpg';

export default function Home(){
  const [show, setShow] = useState(false);
  const [github, setGithub] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/John-Doe')
      .then(r => r.json())
      .then(setGithub)
      .catch(console.error);
  }, []);

  return (
    <>
      <Seo
      title="Accueil — John Doe"
      description="Bonjour, je suis John Doe — développeur web full-stack. Découvrez mon profil, compétences et projets."
      />

      <header className="hero" style={{backgroundImage:`url(${hero})`}}>
        <div className="hero-content container">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full-stack</h2>
          <button className="btn btn-danger mt-3" onClick={() => setShow(true)}>En savoir plus</button>
        </div>
      </header>

      <section className="py-4">
        <Container>
          <div className="p-3 p-md-4 rounded-3 bg-white shadow-sm">
            <Row className="gy-4">
              <Col md={6}>
                <h5 className="fw-semibold">A propos</h5>
                <hr className="hr-blue mb-3" />
                <img src={aboutImg} alt="John Doe à son bureau" className="img-fluid rounded mb-3" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat?</p>
              </Col>
              <Col md={6}>
                <h5 className="fw-semibold">Mes compétences</h5>
                <hr className="hr-blue mb-3" />
                <SkillsBar />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <ModalGithub show={show} onHide={() => setShow(false)} data={github} />
    </>
  );
}