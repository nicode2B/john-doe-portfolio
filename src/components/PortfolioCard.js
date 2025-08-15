export default function PortfolioCard({ img, title, desc, footer }){
  return (
    <div className="card card-hover h-100">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title text-center fw-bold">{title}</h6>
        <p className="card-text text-center small text-muted">{desc}</p>
        <div className="text-center">
          <a href="#" className="btn btn-primary btn-sm btn-lighten" onClick={e=>e.preventDefault()}>Voir le site</a>
        </div>
      </div>
      {footer && <div className="card-footer text-center small text-muted">{footer}</div>}
    </div>
  );
}