import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  demoUrl: string;
  learnMoreUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  benefits,
  demoUrl,
  learnMoreUrl,
}) => {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <a href={demoUrl}>View Demo</a>
      <a href={learnMoreUrl}>Learn More</a>
    </div>
  );
};

export default FeatureCard;
