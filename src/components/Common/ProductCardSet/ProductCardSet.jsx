import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {
  StyledCardSet,
  LoadMoreButton,
  ButtonWrapper,
} from './ProductCardSet.styled';
import { fetchCars } from 'api/api';
import Modal from '../Modal/Modal';

const ProductCardSet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const fetchedCars = await fetchCars(page);
        if (fetchedCars.length > 0) {
          setCars(prevCars => {
            const newCars = fetchedCars.filter(
              fetchedCar =>
                !prevCars.some(prevCar => prevCar.id === fetchedCar.id)
            );
            return [...prevCars, ...newCars];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    };

    loadCars();
  }, [page]);

  const loadMoreCars = () => {
    setPage(prevPage => prevPage + 1);
  };

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
      {hasMore && (
        <ButtonWrapper><LoadMoreButton onClick={loadMoreCars}>Load More</LoadMoreButton></ButtonWrapper>
      )}
      {isModalOpen && <Modal car={selectedCar} toggleModal={toggleModal} />}
    </>
  );
};

export default ProductCardSet;
