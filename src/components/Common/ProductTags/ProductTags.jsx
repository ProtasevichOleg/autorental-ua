import React, { useEffect, useRef } from 'react';
import { Tag, TagSet } from './ProductTags.styled';

const ProductTags = ({ elements }) => {
  const tagSetRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      const tagSet = tagSetRef.current;
      const rows = {};

      Array.from(tagSet.children).forEach(tag => {
        const rect = tag.getBoundingClientRect();
        const bottom = rect.bottom;
        if (!rows[bottom]) {
          rows[bottom] = [];
        }
        rows[bottom].push(tag);
      });

      Object.values(rows).forEach(row => {
        row.forEach((tag, index, self) => {
          if (index !== self.length - 1) {
            tag.classList.add('has-after');
          }
        });
      });
    });
  }, []);

  return (
    <TagSet ref={tagSetRef}>
      {Object.entries(elements).map(([key, value]) => (
        <Tag key={key}>{value}</Tag>
      ))}
    </TagSet>
  );
};

export default ProductTags;
