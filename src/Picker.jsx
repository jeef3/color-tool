import React from 'react';
import { CustomPicker } from 'react-color';
import { Alpha, Hue, Saturation } from 'react-color/lib/components/common';

import SliderPointer from './SliderPointer';

const Picker = props => (
  <div style={{ width: 150 }}>
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 150,
        marginBottom: 10
      }}
    >
      <Saturation {...props} />
    </div>
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 15,
        marginBottom: 10
      }}
    >
      <Hue pointer={SliderPointer} {...props} />
    </div>
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 15
      }}
    >
      <Alpha pointer={SliderPointer} {...props} />
    </div>
  </div>
);

export default CustomPicker(Picker);
