import React, { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import StarIcon from '@/assets/icons/star.svg';

import { RatingProps } from './Rating.types';
import styles from './Rating.module.scss';

const Rating = (props: RatingProps) => {
  const {
    isEditable = false,
    ratingNumber,
    setRatingHandler,
    className,
    ...otherProps
  } = props;

  const [ratingArray, setRatingArray] = useState<Array<JSX.Element>>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(ratingNumber);
  }, [ratingNumber]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating: JSX.Element, idx: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditable,
          })}
          key={idx}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(ratingNumber)}
          onClick={() => clickHandler(idx + 1)}
        >
          <StarIcon
            onKeyDown={(event: KeyboardEvent<SVGAElement>) =>
              isEditable && keySpaceHandler(idx + 1, event)
            }
            tabIndex={isEditable ? 0 : -1}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (ratingNumber: number) => {
    if (!isEditable) return;
    constructRating(ratingNumber);
  };

  const clickHandler = (ratingNumber: number) => {
    if (!isEditable || !setRatingHandler) return;
    setRatingHandler(ratingNumber);
  };

  const keySpaceHandler = (
    ratingNumber: number,
    event: KeyboardEvent<SVGAElement>
  ) => {
    if (event.code != 'Space' || !setRatingHandler) return;
    setRatingHandler(ratingNumber);
  };

  return (
    <div className={cn(styles.container, className)} {...otherProps}>
      {ratingArray.map((rating: JSX.Element, idx: number) => (
        <span key={idx}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
