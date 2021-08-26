import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { client } from '../../client';
import Loader from '../Loader';
import UniversityCard from '../UnivesityCard';
import styles from './Carousel.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.getEntries({
          content_type: 'universityCard',
        });
        setItems(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          customTransition='all .3'
          transitionDuration={200}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-20-px'
        >
          {items.map((item) => {
            return <UniversityCard data={item.fields} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselContainer;
