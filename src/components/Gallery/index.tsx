import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryList, GalleryListItem, GalleryWrapper } from './style';
const housings: Housing[] = require('../../data/housings.json');

type Housing = {
  id: string;
  title: string;
  location: string;
  cover: string;
};

const Gallery: React.FC = () => {
  return (
    <GalleryWrapper>
      <GalleryList>
        {housings.map((housing: Housing) => (
          <GalleryListItem key={housing.id}>
            <Link to={`/housings/${housing.id}`}>
              <img src={housing.cover} alt={`Couverture de : ${housing.title}`} />
              <h2>{housing.title}</h2>
              <p>{housing.location}</p>
            </Link>
          </GalleryListItem>
        ))}
      </GalleryList>
    </GalleryWrapper>
  );
};

export default Gallery;
