import React from 'react';
import {
  MileageContainer,
  MileageTitle,
  BothInputsWrapper,
  MileageInputWrapper,
  StyledLabel,
} from './MileageFilter.styled';

const MileageFilter = () => {
  return (
    <MileageContainer>
      <MileageTitle>Car mileage / km</MileageTitle>

      <BothInputsWrapper>
        <MileageInputWrapper $position="left">
          <StyledLabel htmlFor="left">From</StyledLabel>
          <input type="text" id="left" />
        </MileageInputWrapper>
        <MileageInputWrapper $position="right">
          <StyledLabel htmlFor="right">To</StyledLabel>
          <input type="text" id="right" />
        </MileageInputWrapper>
      </BothInputsWrapper>
    </MileageContainer>
  );
};

export default MileageFilter;
