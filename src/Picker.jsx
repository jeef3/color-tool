import React from 'react';
import { CustomPicker } from 'react-color';
import {
  Alpha,
  EditableInput,
  Hue,
  Saturation
} from 'react-color/lib/components/common';

class Picker extends React.Component {
  render() {
    const { hex, rgb, hsl, onChange } = this.props;

    return (
      <div>
        <div
          style={{
            position: 'relative',
            width: 100,
            height: 100
          }}
        >
          <Saturation {...this.props} />
        </div>
        <div
          style={{
            position: 'relative',
            width: 50,
            height: 10
          }}
        >
          <Hue {...this.props} />
        </div>
        <div
          style={{
            position: 'relative',
            width: 50,
            height: 10
          }}
        >
          <Alpha {...this.props} />
        </div>
      </div>
    );
  }
}

export default CustomPicker(Picker);
