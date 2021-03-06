import React from 'react';
import styled from 'styled-components';

import ColorBox from './ColorBox';

const Palettes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 32px);
`;
Palettes.displayName = 'Palettes';

export default ({ library, selectedSwatch, onSwatchSelected }) => (
  <div>
    {library.map(palette => (
      <div key={palette.id}>
        <div>{palette.name}</div>
        <Palettes>
          {palette.swatches.map(swatch => (
            <div key={swatch.id} onClick={() => onSwatchSelected(swatch.id)}>
              <ColorBox color={swatch.color} />
            </div>
          ))}
        </Palettes>
      </div>
    ))}
  </div>
);
