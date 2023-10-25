import icon from 'assets/icons/sprite.svg';
import {
  ImgWrapper,
  Image,
  ProductCardStyled,
  CardContentWrapper,
  AddToFavoriteWrapper,
  AddToFavorite,
  Icon,
  CardDetails,
  TopDetails,
  CardTitle,
  CarModel,
  Price,
  LearnMoreBtn,
  CardTagContainer,
} from './ProductCard.styled';
import ProductTags from '../ProductTags/ProductTags';

const ProductCard = ({ car, setIsModalOpen }) => {
  const {
    address,
    rentalCompany,
    isPremium,
    type,
    showModelInsteadOfMake,
    model,
    make,
    id,
    favoriteAccessoryOrFunctionality,
  } = car;

  const [, city, country] = address.split(', ');
  const modelOrMake = showModelInsteadOfMake ? model : make;

  const onCardTags = [
    city,
    country,
    rentalCompany,
    ...(isPremium ? ['Premium'] : []),
    type,
    modelOrMake,
    id,
    favoriteAccessoryOrFunctionality,
  ];

  return (
    <ProductCardStyled>
      <CardContentWrapper>
        <ImgWrapper>
          {car.img && (
            <picture>
              <source srcSet={`${car.cardImage}, ${car.cardImage2x} 2x`} />
              <Image
                src={car.img}
                alt={`${car.make} ${car.model}`}
                width="274"
                height="268"
              />
            </picture>
          )}
          <AddToFavoriteWrapper>
            <AddToFavorite></AddToFavorite>
            <Icon width="18" height="18">
              <use href={icon + '#heart'}></use>
            </Icon>
          </AddToFavoriteWrapper>
        </ImgWrapper>
        <CardDetails>
          <TopDetails>
            <CardTitle>
              {car.make}
              {car.showModelInTitle && <CarModel> {car.model}</CarModel>},{' '}
              {car.year}
            </CardTitle>
            <Price>{car.rentalPrice}</Price>
          </TopDetails>
          <CardTagContainer>
            <ProductTags elements={onCardTags} />
          </CardTagContainer>
        </CardDetails>
      </CardContentWrapper>
      <LearnMoreBtn onClick={() => setIsModalOpen(car)}>
        Learn More
      </LearnMoreBtn>
    </ProductCardStyled>
  );
};

export default ProductCard;
