import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  function handleChange(e){ setForm({ ...form, [e.target.name]: e.target.value }); }

  function handleSubmit(e){
    e.preventDefault();
    if(!form.name || !form.email || !form.phone || !form.subject || !form.message){
      alert('Merci de renseigner tous les champs.');
      return;
    }
    console.log('Form data', form);
    setSent(true);
  }

  if(sent){
    return <p className="alert alert-success">Merci ! Votre message a été envoyé (simulation front).</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-2">
        <input className="form-control" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input type="email" className="form-control" name="email" placeholder="Votre adresse email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input className="form-control" name="phone" placeholder="Votre numéro de téléphone" value={form.phone} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <input className="form-control" name="subject" placeholder="Sujet" value={form.subject} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <textarea className="form-control" name="message" rows="8" placeholder="Votre message" value={form.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
  );
}