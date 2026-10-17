import styles from './WhyChoose.module.css';

interface Reason {
  num: string;
  title: string;
  desc: string;
}

const REASONS: Reason[] = [
  { num: '01', title: 'Experienced Professionals', desc: 'A senior team with a decade of production engineering behind it.' },
  { num: '02', title: 'Customized Solutions', desc: 'No templates — every build starts from your actual requirements.' },
  { num: '03', title: 'Innovation-Driven', desc: 'We evaluate new tools and approaches, and use them only when they earn their place.' },
  { num: '04', title: 'Customer-Centric', desc: 'You\'re looped into decisions, not just delivery dates.' },
  { num: '05', title: 'Quality & Security', desc: 'Testing and security review are part of the build, not an afterthought.' },
  { num: '06', title: 'Competitive Pricing', desc: 'Transparent scoping so you know exactly what you\'re paying for.' },
  { num: '07', title: 'Timely Delivery', desc: 'Realistic timelines, and a plan for what happens if scope changes.' },
  { num: '08', title: 'Long-Term Support', desc: 'We stay on after launch — maintenance, monitoring and updates.' },
];

export default function WhyChoose() {
  return (
    <section className="section bg-1">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Why Htech</div>
          <h2>Reasons technology leaders choose to build with us.</h2>
        </div>
        <div className={`${styles.whyGrid} reveal`}>
          {REASONS.map((reason) => (
            <div key={reason.num} className={styles.whyCard}>
              <span className={styles.whyMark}>{reason.num}</span>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
