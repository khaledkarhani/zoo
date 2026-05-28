import { useState } from 'react';
import '../styles/Animals.css';

import { BirdsList } from '../data/BirdsList';
import BirdsItem from '../components/BirdsItem';

import { MammalsList } from '../data/MammalsList';
import MammalsItem from '../components/MammalsItem';

const Animals = () => {
  const [category, setCategory] = useState('birds');

  

  return (
    <div>
      <h1>Animals Section 🐾</h1>

      <button onClick={() => setCategory('birds')}>Birds</button>
      <button onClick={() => setCategory('mammals')}>Mammals</button>

      {category === 'birds' && (
        <div className="section">
          {BirdsList.map((item, index) => (
            <BirdsItem
            key={index}
            image={item.img}
            name={item.name}
            canFly={item.canFly}
            />
          ))}

        </div>
      )}

      {category === 'mammals' && (
        <div className="section">
          {MammalsList.map((item, index) => (
            <MammalsItem
            key={index}
            image={item.img}
            name={item.name}
            nb={item.nb}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Animals;