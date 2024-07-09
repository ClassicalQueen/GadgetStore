import React from "react";

function Newsletter() {
  return (
    <section className="newsletter">
      <h3>Newsletter</h3>
      <p>Suscribe to get information abot products and coupons.</p>
      <form>
        <input type="email" placeholder="Email Address" />
        <button type="submit">Shop Now</button>
      </form>
    </section>
  );
}

export default Newsletter;