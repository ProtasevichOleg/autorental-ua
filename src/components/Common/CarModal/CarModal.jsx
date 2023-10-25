import ProductTags from '../ProductTags/ProductTags';
import {
  StyledCarModal,
  CarModalContentWrapper,
  ModalSection,
  ModalSubSection,
  ModalTitle,
  ModalSectionTitle,
  Picture,
  Image,
  ModalTagContainer,
  CarModel,
  ModalDescription,
  ConditionList,
  ConditionItem,
  RentCarLink,
} from './CarModal.styled';

const CarModal = ({ car }) => {
  console.log(car);
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
        <CarModalContentWrapper>
          <ModalSection>
            <ModalSubSection>
              <ModalTitle>
                {car.make}
                <CarModel> {car.model}</CarModel>, {car.year}
              </ModalTitle>
              <ModalSectionTitle className="visually-hidden">
                About Car
              </ModalSectionTitle>
              <ModalTagContainer $isOrdered>
                <ProductTags elements={baseModalTags} />
              </ModalTagContainer>
            </ModalSubSection>
            <Picture>
              <source srcSet={`${car.modalImage}, ${car.modalImage2x} 2x`} />
              <Image
                src={car.modalImage}
                alt={`${car.make} ${car.model}`}
                width="461"
                height="248"
              />
            </Picture>
            <ModalDescription>{car.description}</ModalDescription>
          </ModalSection>

          <ModalSection>
            <ModalSubSection>
              <ModalSectionTitle>
                Accessories and functionalities:
              </ModalSectionTitle>
              <ModalTagContainer>
                <ProductTags elements={accessoriesAndFunctionalities} />
              </ModalTagContainer>
            </ModalSubSection>
          </ModalSection>
          <ModalSection>
            <ModalSubSection>
              <ModalSectionTitle>Rental Conditions:</ModalSectionTitle>
              <ConditionList>
                <ConditionItem>
                  {firstConditionTitle}: <strong>{firstConditionValue}</strong>
                </ConditionItem>
                <ConditionItem>{secondCondition}</ConditionItem>
                <ConditionItem>{thirdCondition}</ConditionItem>
                <ConditionItem>
                  Mileage: <strong>{car.mileage.toLocaleString()}</strong>
                </ConditionItem>
                <ConditionItem>
                  Price: <strong>{car.rentalPrice}</strong>
                </ConditionItem>
              </ConditionList>
            </ModalSubSection>
          </ModalSection>

          <RentCarLink href="tel:+380730000000">Rental Car</RentCarLink>
        </CarModalContentWrapper>
      </StyledCarModal>
    )
  );
};

export default CarModal;
