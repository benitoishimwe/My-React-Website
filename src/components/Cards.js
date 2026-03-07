import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/15889904/pexels-photo-15889904.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='services'
            />
            <CardItem
              src='https://images.pexels.com/photos/4319881/pexels-photo-4319881.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/13228336/pexels-photo-13228336.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='services'
            />
            <CardItem
              src='https://images.pexels.com/photos/577696/pexels-photo-577696.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='products'
            />
            <CardItem
              src='https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
