import DropdownFilter from 'components/Common/DropdownFilter/DropdownFilter';
import {
  FilterFieldset,
  StyledCarFilter,
  SubmitButton,
} from './CarFilter.styled';
import MileageFilter from 'components/Common/MileageFilter/MileageFilter';

const CarFilter = () => {
  const carOptions = [
    'Buick',
    'Volvo',
    'Hummer',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
  ];
  const priceOptions = [
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
    '110',
    '120',
    '130',
    '140',
  ];

  return (
    <StyledCarFilter>
      <FilterFieldset>
        <DropdownFilter label="Car brand" options={carOptions} type="brand" />
        <DropdownFilter
          label="Price/ 1 hour"
          options={priceOptions}
          type="price"
        />
        <MileageFilter />
      </FilterFieldset>
      <SubmitButton>Search</SubmitButton>
    </StyledCarFilter>
  );
};

export default CarFilter;
