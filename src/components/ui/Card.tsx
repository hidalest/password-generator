import React from 'react';
import classes from './Card.module.scss';

interface CardInterface {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardInterface) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
