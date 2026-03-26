import trustItems from "../../data/trustItems";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-strip__items">
          {trustItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}