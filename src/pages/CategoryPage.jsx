import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPets } from '../api/api'; // The API is defined in api.js

const CategoryPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    breed: [],
    priceRange: { min: 0, max: 10000000 },
  });

  const colors = [
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Apricot', color: 'bg-orange-300' },
    { name: 'Black', color: 'bg-black' },
    { name: 'Black & White', color: 'bg-gray-800' },
    { name: 'Silver', color: 'bg-gray-400' },
    { name: 'Tan', color: 'bg-yellow-700' },
  ];

  const breeds = ['Small', 'Medium', 'Large'];

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        console.log(response.data); // Log the response to inspect the structure
        setPets(response.data); // Assuming response.data contains an array of pets
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updatedFilter = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updatedFilter };
    });
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: value },
    }));
  };

  const applyFilters = (pets) => {
    return pets
      .filter((pet) => {
        if (filters.gender.length && !filters.gender.includes(pet.gender)) {
          return false;
        }
        if (filters.color.length && !filters.color.includes(pet.color)) {
          return false;
        }
        if (filters.breed.length && !filters.breed.includes(pet.breed)) {
          return false;
        }
        const price = parseInt(pet.price.replace(/\D/g, ''));
        if (price < filters.priceRange.min || price > filters.priceRange.max) {
          return false;
        }
        return true;
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link to="/" className="text-gray-600 hover:text-blue-900">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-blue-900">Small Dog</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <div className="bg-[#003459] rounded-lg flex items-center relative h-[400px]">
          <div className="absolute left-0 h-full w-1/2 flex justify-end pl-4">
            <img
              src="/dogs-banner.png"
              alt="Group of happy dogs"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
          <div className="relative ml-auto w-1/2 pr-16 pl-8">
                <div className="text-right">
                    <h1 className="text-white text-5xl font-bold mb-2">One More Friend</h1>
                    <h2 className="text-white text-3xl font-bold mb-4">Thousands More Fun!</h2>
                    <p className="text-white text-sm mb-6 max-w-md ml-auto">
                    Having a pet means you have more joy, a new friend, a happy person
                    who will always be with you to have fun. We have 200+ different pets
                    that can meet your needs!
                    </p>
                    <div className="flex justify-end space-x-4">
                        <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#003459] transition duration-300 text-sm flex items-center">
                            View Intro
                            <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                            </svg>
                        </button>
                        <button className="bg-white text-[#003459] px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 text-sm">
                            Explore Now
                        </button>
                    </div>
                </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Filter Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-6">Filter</h3>

            {/* Gender Filter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Gender</h4>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    onChange={() => handleFilterChange('gender', 'Male')}
                  />
                  <span className="ml-3">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    onChange={() => handleFilterChange('gender', 'Female')}
                  />
                  <span className="ml-3">Female</span>
                </label>
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Color</h4>
              <div className="space-y-3">
                {colors.map(({ name, color }) => (
                  <label key={name} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                      onChange={() => handleFilterChange('color', name)}
                    />
                    <span className={`w-4 h-4 rounded-full ${color} ml-3 mr-2`}></span>
                    <span>{name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Price</h4>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  className="w-24 p-2 border rounded-lg text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  className="w-24 p-2 border rounded-lg text-sm"
                />
              </div>
            </div>

            {/* Breed Filter */}
            <div>
              <h4 className="font-semibold mb-4">Breed</h4>
              <div className="space-y-3">
                {breeds.map((breed) => (
                  <label key={breed} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                      onChange={() => handleFilterChange('breed', breed)}
                    />
                    <span className="ml-3">{breed}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pet Grid */}
        <div className="col-span-9">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold inline-block mr-2">Small Dog</h2>
              <span className="text-gray-500 text-sm">{pets.length} puppies</span>
            </div>
            <select className="border p-2 rounded-full bg-white">
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {applyFilters(pets).map((pet) => (
                <div key={pet.id} className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{pet.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="mr-2">Gender:</span>
                        <span className="font-medium">{pet.gender}</span>
                        <span className="mx-2">•</span>
                        <span className="mr-2">Age:</span>
                        <span className="font-medium">{pet.age}</span>
                      </div>
                    </div>
                    <p className="text-blue-900 font-bold">{pet.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button className="p-2 rounded-lg border hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {[1, 2, 3, 4, '...', 28].map((page, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border hover:bg-gray-50 ${
                  page === 1 ? 'bg-blue-900 text-white' : ''
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg border hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
