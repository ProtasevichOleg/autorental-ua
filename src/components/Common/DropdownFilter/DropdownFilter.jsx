import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  StyledLabel,
  InputContainer,
  ToggleButton,
  Icon,
  StyledInput,
  OptionsList,
  OptionItem,
} from './DropdownFilter.styled';
import icon from 'assets/icons/sprite.svg';

const DropdownFilter = ({ label, options, type }) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('Enter the text');
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (type === 'price') {
      setPlaceholder('To $');
    }
  }, [type]);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = event => {
    if (type !== 'price') {
      setInputValue(event.target.value);
      setIsOpen(true);
    }
  };

  const handleOptionMouseDown = option => {
    setInputValue(option);
    setIsOpen(false);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const trimmedInput = inputValue.trim();
      const firstMatch = options.find(option =>
        option.toLowerCase().startsWith(trimmedInput.toLowerCase())
      );

      if (firstMatch) {
        setInputValue(firstMatch);
        setIsOpen(false);
      }
    }
  };

  const getDisplayValue = () => {
    if (type === 'price' && inputValue) {
      return `To ${inputValue}$`;
    }
    return inputValue;
  };

  const trimmedInput = inputValue.trim();

  return (
    <DropdownContainer $type={type}>
      <StyledLabel htmlFor="filter">{label}</StyledLabel>
      <InputContainer ref={wrapperRef}>
        <StyledInput
          autoComplete="off"
          list="options"
          id="filter"
          value={getDisplayValue()}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          readOnly={type === 'price'}
          $type={type}
        />
        <ToggleButton onClick={handleButtonClick} tabIndex="-1">
          <Icon $isOpen={isOpen} width="20" height="20">
            <use href={icon + '#chevron-down'}></use>
          </Icon>
        </ToggleButton>
      </InputContainer>
      {isOpen && (
        <OptionsList>
          {options.map(option => (
            <OptionItem
              key={option}
              $matched={
                trimmedInput.length > 0 &&
                option.toLowerCase().startsWith(trimmedInput.toLowerCase())
              }
              className={
                option.toLowerCase().startsWith(trimmedInput.toLowerCase())
                  ? 'matched'
                  : ''
              }
              onMouseDown={() => handleOptionMouseDown(option)}
            >
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </DropdownContainer>
  );
};

export default DropdownFilter;
