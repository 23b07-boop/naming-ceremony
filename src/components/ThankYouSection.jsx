import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import './ThankYouSection.css';

const ThankYouSection = () => {
  return (
    <section className="thank-you-sec">
      <div className="container thank-you-sec__wrap">
        <div className="thank-you-sec__card">
          <div className="thank-you-sec__icon-wrap">
            <Heart className="thank-you-sec__heart-icon" size={32} fill="#e2a8cf" stroke="#cd8cb8" />
            <Sparkles className="thank-you-sec__sparkle-icon" size={24} color="#e6c885" />
          </div>

          <h2 className="thank-you-sec__title">Thank You!</h2>

          <p className="thank-you-sec__message">
            Thank you for sharing our happiness and blessing our precious baby.
          </p>

          <p className="thank-you-sec__signature">
            With love, the proud parents &amp; family ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
