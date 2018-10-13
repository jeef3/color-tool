import React from 'react';
import { CustomPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';

const ColorInput = props => (
  <div
    style={{
      position: 'relative'
    }}
  >
    <EditableInput value={props.hex} onChange={props.onChange} />
  </div>
);

export default CustomPicker(ColorInput);
