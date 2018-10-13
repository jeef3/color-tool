import React from 'react';
import ntcjs from 'ntcjs';
import styled from 'styled-components';

import ColorBox from './ColorBox';

const rgba = ({ r, b, g, a }) => `rgba(${r}, ${g}, ${b}, ${a})`;

const Layout = styled.div`
  display: grid;

  grid-template-columns: 40px 1fr 1fr;
`;
Layout.displayName = 'ColorInfo_Layout';

export default ({ color }) => (
  <Layout>
    <ColorBox color={color.hex} />
    <div>{ntcjs.name(color.hex)[1]}</div>

    <div style={{ textAlign: 'right', color: '#ccc', fontSize: 13 }}>
      <div>{color.hex}</div>
      <div>{rgba(color.rgb || { r: 0, g: 0, b: 0, a: 1 })}</div>
    </div>
  </Layout>
);
