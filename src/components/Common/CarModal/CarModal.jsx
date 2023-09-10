import ProductTags from '../ProductTags/ProductTags';
import {
  Image,
  ModalTagContainer,
  ModalTitle,
  StyledCarModal,
  CarModel,
  ModalDescription,
  ModalThirdTitle,
} from './CarModal.styled';

const CarModal = ({ car }) => {
  const { rentalConditions } = car;
  const [firstCondition, secondCondition, thirdCondition] =
    rentalConditions.split('\n');

  const [firstConditionTitle, firstConditionValue] = firstCondition.split(': ');

  const {
    accessories,
    functionalities,
    address,
    id,
    year,
    type,
    fuelConsumption,
    engineSize,
  } = car;
  const [, city, country] = address.split(', ');
  const accessoriesAndFunctionalities = {
    ...Object.keys(accessories).reduce((acc, key) => {
      acc[`acc_${key}`] = accessories[key];
      return acc;
    }, {}),
    ...Object.keys(functionalities).reduce((acc, key) => {
      acc[`func_${key}`] = functionalities[key];
      return acc;
    }, {}),
  };
  const baseModalTags = {
    city,
    country,
    id: `Id: ${id}`,
    year: `Year: ${year}`,
    type: `Type: ${type}`,
    fuelConsumption: `Fuel Consumption: ${fuelConsumption}`,
    engineSize: `Engine Size: ${engineSize}`,
  };

  return (
    car && (
      <StyledCarModal>
        <picture>
          <source srcSet={`${car.modalImage}, ${car.modalImage2x} 2x`} />
          <Image
            src={car.modalImage}
            alt={`${car.make} ${car.model}`}
            width="461"
            height="248"
          />
        </picture>

        <ModalTitle>
          {car.make}
          <CarModel> {car.model}</CarModel>, {car.year}
        </ModalTitle>
        <ModalTagContainer>
          <ProductTags elements={baseModalTags} />
        </ModalTagContainer>
        <ModalDescription>{car.description}</ModalDescription>

        <div>
          <ModalThirdTitle>Accessories and functionalities:</ModalThirdTitle>
          <ModalTagContainer>
            <ProductTags elements={accessoriesAndFunctionalities} />
          </ModalTagContainer>
        </div>
        <ModalThirdTitle>Rental Conditions:</ModalThirdTitle>
        <ul>
          <li>
            {firstConditionTitle}: <strong>{firstConditionValue}</strong>
          </li>
          <li>{secondCondition}</li>
          <li>{thirdCondition}</li>
          <li>
            Mileage: <strong>{car.mileage}</strong>
          </li>
          <li>
            Price: <strong>{car.price}</strong>
          </li>
        </ul>

        <a href="tel:+380730000000">Rental Car</a>
      </StyledCarModal>
    )
  );
};

export default CarModal;
