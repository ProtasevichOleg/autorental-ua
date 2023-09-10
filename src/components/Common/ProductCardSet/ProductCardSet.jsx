import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { StyledCardSet } from './ProductCardSet.styled';
// import cars from 'assets/jsons/cars.json';
import { fetchCars } from 'api/api';
import Modal from '../Modal/Modal';

const ProductCardSet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const fetchedCars = await fetchCars();
        setCars(fetchedCars);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    };

    loadCars();
  }, []);

  const toggleModal = useCallback(open => {
    setIsModalOpen(open);
  }, []);

  const handleOpenModal = car => {
    setIsModalOpen(true);
    setSelectedCar(car);
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && isModalOpen) {
        toggleModal(false);
      }
    },
    [isModalOpen, toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <StyledCardSet onKeyDown={handleKeyDown} tabIndex="0">
        {cars.map(car => (
          <ProductCard
            key={car.id}
            car={car}
            setIsModalOpen={handleOpenModal}
          />
        ))}
      </StyledCardSet>
      {isModalOpen && <Modal car={selectedCar} toggleModal={toggleModal} />}
    </>
  );
};

export default ProductCardSet;
