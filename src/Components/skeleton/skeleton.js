import React from 'react';
import './skeleton.css'; // Optional: for custom skeleton styles

const PortfolioItemSkeleton = () => {
  return (
    <article className="skeleton">
      <div className="skeleton__image-placeholder" />
      <h3 className="skeleton-text title-placeholder" />
      <div className="skeleton__item-cta">
        <div className="btn-placeholder" />
        <div className="btn-placeholder" />
      </div>
    </article>
  );
};

export default PortfolioItemSkeleton;
