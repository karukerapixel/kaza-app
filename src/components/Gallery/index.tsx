import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryList, GalleryListItem, GalleryWrapper } from './style';
const housings: Housing[] = require('../../data/housings.json');

type Housing = {
  id: string;
  title: string;
  location: string;
  cover: string;
  host: {
    name: string
  }
  available_dates: string;
  price_per_night: string;
};

const Gallery: React.FC = () => {
  return (
    <GalleryWrapper>
      <GalleryList>
        {housings.map((housing: Housing) => (
          <GalleryListItem key={housing.id}>
            <Link to={`/housings/${housing.id}`}>
              <img src={housing.cover} alt={`Couverture de : ${housing.title}`} />
              <h2>{housing.location}</h2>
              <p>Hôte : {housing.host.name.split(" ")[0]}</p>
              <p>{housing.available_dates[0]}</p>
              <span>{housing.price_per_night}€ par nuit</span>
            </Link>
          </GalleryListItem>
        ))}
      </GalleryList>
    </GalleryWrapper>
  );
};

export default Gallery;
