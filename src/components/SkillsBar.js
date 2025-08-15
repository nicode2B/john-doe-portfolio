import { ProgressBar } from 'react-bootstrap';

export default function SkillsBar(){
  const skills = [
    { label: 'HTML5', now: 90, variant: 'danger' },
    { label: 'CSS3', now: 80, variant: 'info' },
    { label: 'JAVASCRIPT', now: 70, variant: 'warning' },
    { label: 'PHP', now: 60, variant: 'success' },
    { label: 'REACT', now: 50, variant: 'primary' }
  ];
  return (
    <div className="vstack gap-3">
      {skills.map(s => (
        <div key={s.label}>
          <div className="small fw-semibold mb-1">{s.label} {s.now}%</div>
          <ProgressBar now={s.now} variant={s.variant} />
        </div>
      ))}
    </div>
  );
}