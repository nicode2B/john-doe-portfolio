export default function ServiceCard({ icon, title, children }){
  return (
    <div className="card card-hover h-100">
      <div className="card-body text-center">
        <div className="display-6 mb-3 text-primary">
          <i className={`bi ${icon}`}></i>
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{children}</p>
      </div>
    </div>
  );
}