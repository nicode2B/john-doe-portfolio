import { Accordion } from 'react-bootstrap';

export default function LegalAccordion(){
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Éditeur du site</Accordion.Header>
        <Accordion.Body>
          <p className="mb-1 fw-semibold">John Doe</p>
          <p className="mb-1"><i className="bi bi-buildings me-2"/>40 rue Laure Diebold</p>
          <p className="mb-1"><i className="bi bi-geo-alt me-2"/>69009 Lyon, France</p>
          <p className="mb-1"><i className="bi bi-telephone me-2"/>10 20 30 40 50</p>
          <p className="mb-0"><i className="bi bi-envelope me-2"/><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
          <p className="mb-1 fw-semibold">alwaysdata</p>
          <p className="mb-1">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
          <p className="mb-0"><i className="bi bi-globe me-2"/><a href="https://www.alwaysdata.com" target="_blank" rel="noopener nofollow">www.alwaysdata.com</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de Formation.</p>
          <p>Les images utilisées sur ce site sont libres de droits et ont été obtenue sur le site  <a href="https://pixabay.com/" target="_blank" rel="noopener nofollow">Pixabay</a>.</p>
          <p>La favicon de ce site a été est fournie par <a href="https://www.flaticon.com/free-icons/john-doe" target="_blank" rel="noopener nofollow">Flaticon</a>.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}