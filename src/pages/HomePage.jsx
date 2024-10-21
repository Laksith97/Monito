import React, { useState, useEffect } from 'react';
import { getPets } from '../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-primary mb-4">One More Friend</h1>
            <h2 className="text-4xl font-bold text-primary mb-6">Thousands More Fun!</h2>
            <p className="text-gray-600 mb-8">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
            <div className="flex space-x-4">
              <button className="flex items-center bg-white text-primary border border-primary px-6 py-3 rounded-full">
                <span className="mr-2">View Intro</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-primary text-white px-6 py-3 rounded-full">Explore Now</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/hero-image.png" alt="Happy person with a dog" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-primary">What's new?</h3>
            <button className="flex items-center text-primary">
              <span className="mr-2">View more</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-8">Take A Look At Some Of Our Pets</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {pets.map((pet) => (
              <SwiperSlide key={pet.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-primary">{pet.name}</h4>
                    <p className="text-gray-600">{pet.breed}</p>
                    <p className="text-primary font-bold mt-2">${pet.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePage;