import React, { useState, useEffect } from 'react';
import { getPets, getProducts } from '../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const articles = [
  {
      id: 1,
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus...",
      image: "/pom1.png"
  },
  {
      id: 2,
      title: "Dog Diet You Need To Know",
      description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...",
      image: "/pom2.png"
  },
  {
      id: 3,
      title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
      image: "pom3.png"
  }
];

const petSellers = [
  { id: 1, name: 'Sheba', logo: '/sheba-logo.png' },
  { id: 2, name: 'Whiskas', logo: '/whiskas-logo.png' },
  { id: 3, name: 'Bakers', logo: '/bakers-logo.png' },
  { id: 4, name: 'Felix', logo: '/felix-logo.png' },
  { id: 5, name: 'Good Boy', logo: '/goodboy-logo.png' },
  { id: 6, name: 'Butchers', logo: '/butchers-logo.png' },
  { id: 7, name: 'Pedigree', logo: '/pedigree-logo.png' },
];

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [petsResponse, productsResponse] = await Promise.all([
          getPets(),
          getProducts(),
        ]);
        setPets(petsResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  

  return (
    <>
      <div className="bg-background mt-20">
        <div className="sm:px-6">
          <section className="bg-background-light w-full rounded-lg">
            <div className="w-full md:grid grid-cols-3 gap-4 items-center mb-16 bg-background-light rounded-lg md:h-[500px] mx-auto">
              <div className="col-span-2 ml-12 pl-12">
                <h1 className="text-5xl font-bold text-primary mb-4">
                  One More Friend
                </h1>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Thousands More Fun!
                </h2>
                <p className="text-gray-600 mb-8">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
                <div className="flex space-x-4">
                  <button
                    className="flex items-center bg-white text-primary border border-primary px-6 py-3 rounded-full 
                   hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out
                  "
                  >
                    <span className="mr-2">
                      View Intro <NavigateNextIcon />
                    </span>
                  </button>
                  <button
                    className="bg-primary text-white px-6 py-3 rounded-full
                  hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                  >
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="col-start-3 mr-4">
                <img
                  src="/pet.png"
                  alt="Happy person with a dog"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-black">What's new?</h3>
              <button
                className="flex items-center bg-white text-primary-dark border border-primary-dark px-6 py-3 rounded-full 
              hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                  View More <NavigateNextIcon />
                </span>
              </button>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Take A Look At Some Of Our Pets
            </h2>
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
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-primary">
                        {pet.name}
                      </h4>
                      <span className="text-black font-bold">
                        {pet.id} - <span>{pet.breed}</span>
                      </span>
                      <div className="grid grid-cols-4">
                        <div className="col-span-2 col-start-1">
                          <span className="text-black font-bold">
                            Gender:{" "}
                            <span className="text-gray-600">{pet.gender}</span>
                          </span>
                        </div>
                        <div className="col-span-2 col-start-3">
                          <span className="text-black font-bold">
                            Age:{" "}
                            <span className="text-gray-600">{pet.age}</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-primary font-bold mt-2">{pet.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:grid grid-cols-3 gap-4 items-center mb-16 bg-background-light rounded-lg md:h-[500px]">
            <div className="col-start-1 mr-4 pl-10">
              <img
                src="/pet2.png"
                alt="Happy person with a dog"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-2 ml-12 pl-12">
              <h1 className="text-5xl font-bold text-primary mb-4">
                One More Friend
              </h1>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Thousands More Fun!
              </h2>
              <p className="text-gray-600 mb-8">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex space-x-4">
                <button
                  className="flex items-center bg-white text-primary border border-primary px-6 py-3 rounded-full
                 hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out
                "
                >
                  <span className="mr-2">
                    View Intro <NavigateNextIcon />
                  </span>
                </button>
                <button
                  className="bg-primary-dark text-white px-6 py-3 rounded-full  
                hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-black">What's new?</h3>
              <button
                className="flex items-center bg-white text-primary-dark border border-primary-dark px-6 py-3 rounded-full 
              hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                  View More <NavigateNextIcon />
                </span>
              </button>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Take A Look At Some Of Our Pets
            </h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-black">
                        {product.name}
                      </h4>
                      <div className="grid grid-cols-4">
                        <div className="col-start-1 col-span-2">
                          <p>
                            <span className="font-bold">Product :</span>
                            {product.product}
                          </p>
                        </div>
                        <div className="col-start-3 col-span-2">
                          <p>
                            <span className="font-bold text-black">Size :</span>
                            {product.size}
                          </p>
                        </div>
                      </div>

                      <p className="text-black font-bold mt-2">
                        {product.price}
                      </p>
                      <div className="flex justify-center mt-4">
                        <button className="bg-background-light text-black font-bold px-6 py-3 rounded-md w-full hover:bg-red-300 hover:text-black transition duration-150 ease-in-out">
                          {product.description}
                        </button>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pet Sellers Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <p className="font-semibold text-black">Proud to be part of
                <b className="text-xl font-bold text-primary mb-8"> Pet Sellers</b>
              </p>
              <button className="flex items-center bg-white text-primary-dark border border-primary-dark px-6 py-3 rounded-full hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out">
                <span className="mr-2">
                  View all our sellers <NavigateNextIcon />
                </span>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {petSellers.map((seller) => (
                <div key={seller.id} className="flex justify-center items-center">
                  <img src={seller.logo} alt={seller.name} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Adoption Section */}
          <div className="mb-16">
            <div className="bg-adoption-main rounded-lg overflow-hidden">
              <div className="p-8 md:flex items-center">
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-primary mb-4">Adoption</h2>
                  <h3 className="text-2xl font-semibold text-primary-dark mb-4">We need help. So do they.</h3>
                  <p className="text-gray-700 mb-6">
                    Adopt a pet and give it a home, it will be love you back unconditionally.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition duration-150 ease-in-out">
                      Explore Now
                    </button>
                    <button className="flex items-center bg-white text-primary-dark border border-primary-dark px-6 py-3 rounded-full hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out">
                      <span className="mr-2">View Intro</span>
                      <NavigateNextIcon />
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <img src="/adoption-image.png" alt="Pet adoption" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>    

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-black">
                You alredy know ?
              </h3>
              <button
                className="flex items-center bg-white text-primary-dark border border-primary-dark px-6 py-3 rounded-full 
              hover:bg-primary-dark hover:text-white transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                  View More <NavigateNextIcon />
                </span>
              </button>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Useful Pet Knowledge
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <button className="bg-blue-400 text-white  tracking-wide text-sm font-bold rounded-full w-1/4 h-[30px] flex justify-center items-center">
                      Pet knowledge
                    </button>
                    <h2 className="mt-2 mb-2 font-bold text-lg">
                      {article.title}
                    </h2>
                    <p className="text-gray-700 text-base">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;