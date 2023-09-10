import { StyledSectionTitle } from './SectionTitle.styled';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <StyledSectionTitle>{title}</StyledSectionTitle>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
