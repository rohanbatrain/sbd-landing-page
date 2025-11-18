import React from 'react';
import Image from 'next/image';

interface ShowcaseCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  image,
  features,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="showcase-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt={title} width={500} height={300} />
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={ctaLink}>{ctaText}</a>
    </div>
  );
};

export default ShowcaseCard;
