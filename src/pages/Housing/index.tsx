import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HousingBlocLeft, HousingBlocRight, HousingContainer, HousingDropdowns } from './style';
import housings from '../../data/housings.json';

import Carousel from '../../components/Carousel';
import Dropdown from '../../components/Dropdown';
import Rating from '../../components/Rating';

// Define the structure of a housing object
interface HousingData {
  id: string;
  pictures: string[];
  title: string;
  location: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  description: string;
  equipments: string[];
}

const Housing: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the housing ID from the route
  const [data, setData] = useState<HousingData | undefined>(); // State to store housing data

  // Fetch housing data based on the ID
  useEffect(() => {
    const housing = housings.find((h: HousingData) => h.id === id); // Find the housing by ID
    setData(housing); // Update the state with the housing data
  }, [id]); // Effect runs whenever `id` changes

  // Display a message if no housing is found
  if (!data) {
    return <div>Housing Not Find.</div>;
  }

  return (
    <>

      <Carousel pictures={data.pictures} />

      <HousingContainer>
        <HousingBlocLeft>
          <h2>{data.title}</h2>
          <p>{data.location}</p>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li> // Render tags as a list
            ))}
          </ul>
        </HousingBlocLeft>

        <HousingBlocRight>
          <div>
            <span>{data.host.name}</span> {/* Display the host's name */}
            <img src={data.host.picture} alt={`profil de ${data.host.name}`} /> {/* Host profile picture */}
          </div>
          <Rating score={data.rating} /> {/* Display the rating */}
        </HousingBlocRight>
      </HousingContainer>

      <HousingDropdowns>
        <Dropdown heading={'description'} content={<p>{data.description}</p>} />
        <Dropdown
          heading={'équipement'}
          content={
            <ul>
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li> // Render equipment list
              ))}
            </ul>
          }
        />
      </HousingDropdowns>
    </>
  );
};

export default Housing;

