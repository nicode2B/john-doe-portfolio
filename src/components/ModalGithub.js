import { Modal, Image, ListGroup } from 'react-bootstrap';

export default function ModalGithub({ show, onHide, data }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static">
      <Modal.Header closeButton aria-label="Fermer"> {/* Changement ici */}
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light">
        <div className="d-flex flex-column flex-md-row gap-4 align-items-center align-items-md-start">
          <Image src={data?.avatar_url} alt="Avatar GitHub" rounded style={{maxWidth: 340}} />
          <div className="flex-fill w-100">
            <ListGroup variant="flush" className="text-light">
              <ListGroup.Item className="bg-dark text-light">
                <i className="bi bi-person me-2" />
                <a href={data?.html_url} target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-underline">
                  {data?.name || data?.login}
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                <i className="bi bi-geo-alt me-2" />{data?.location || ''}
              </ListGroup.Item>
              {data?.bio && (
                <ListGroup.Item className="bg-dark text-light">
                  <i className="bi bi-journal-text me-2" />{data.bio}
                </ListGroup.Item>
              )}
              <ListGroup.Item className="bg-dark text-light">
                <i className="bi bi-box-seam me-2" />Repositories : {data?.public_repos}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                <i className="bi bi-people me-2" />Followers : {data?.followers}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light">
                <i className="bi bi-person-check me-2" />Following : {data?.following}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <button className="btn btn-secondary" onClick={onHide}>Fermer</button>
      </Modal.Footer>
    </Modal>
  );
}