'use client';

import { type FormEvent, useState } from 'react';
import styles from './Contact.module.css';

const SERVICES_LIST = [
  'Software Development',
  'Web Application Development',
  'Mobile Application Development',
  'AI & Machine Learning',
  'Cloud Services',
  'IT Consulting & Digital Transformation',
  'Cybersecurity',
  'Managed IT Services',
] as const;

const BUDGETS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
] as const;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 14px',
  background: 'var(--bg-card)',
  border: '1px solid var(--line-strong)',
  borderRadius: '8px',
  color: 'var(--text-0)',
  fontFamily: 'var(--body)',
  fontSize: '14px',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12.5px',
  fontFamily: 'var(--mono)',
  color: 'var(--text-2)',
  marginBottom: '8px',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section bg-1" id="contact">
      <div className={`wrap ${styles.contactGrid}`}>
        <div className="reveal">
          <div className="eyebrow">Contact</div>
          <h2>Let&apos;s build something exceptional together.</h2>
          <p style={{ marginTop: '20px', maxWidth: '420px' }}>
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>

          <div style={{ marginTop: '44px', fontSize: '14.5px' }}>
            <p style={{ color: 'var(--text-0)', fontWeight: 600, marginBottom: '6px' }}>
              Htech Solutions Pvt. Ltd.
            </p>
            <p>
              431/B Pushpak Corner, Nr. Devi Cinema,
              <br />
              Naroda, Ahmedabad – 382330, India
            </p>
            <p style={{ marginTop: '14px' }}>
              +91 79846 49969
              <br />
              +91 94085 34684
            </p>
            <p style={{ marginTop: '14px' }}>
              <a href="mailto:harikesh@htechsolution.net" style={{ color: 'var(--cyan)' }}>
                harikesh@htechsolution.net
              </a>
              <br />
              <a href="mailto:mahil@htechsolution.net" style={{ color: 'var(--cyan)' }}>
                mahil@htechsolution.net
              </a>
            </p>
          </div>
        </div>

        <form className="reveal" style={{ transitionDelay: '.1s' }} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <input required type="text" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>COMPANY NAME</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
          <div className={styles.formRow} style={{ marginTop: '16px' }}>
            <div>
              <label style={labelStyle}>EMAIL</label>
              <input required type="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>PHONE</label>
              <input type="tel" style={inputStyle} />
            </div>
          </div>
          <div className={styles.formRow} style={{ marginTop: '16px' }}>
            <div>
              <label style={labelStyle}>SERVICE INTERESTED IN</label>
              <select style={inputStyle}>
                {SERVICES_LIST.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>ESTIMATED BUDGET</label>
              <select style={inputStyle}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <label style={labelStyle}>PROJECT DESCRIPTION</label>
            <textarea
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '22px', width: '100%', justifyContent: 'center' }}
          >
            Send Message <span className="btn-arrow">→</span>
          </button>
          <p
            style={{
              marginTop: '14px',
              fontSize: '13.5px',
              color: 'var(--cyan)',
              minHeight: '18px',
            }}
          >
            {submitted ? "Thanks — we'll be in touch shortly." : ''}
          </p>
        </form>
      </div>
    </section>
  );
}
