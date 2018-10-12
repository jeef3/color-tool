import React from 'react';
import Color from 'color';
import ntcjs from 'ntcjs';

import ColorBox from './ColorBox';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentColor: Color('#ffaa09')
    };

    this.handleColorInputChange = this.handleColorInputChange.bind(this);
  }

  componentDidMount() {}

  handleColorInputChange(e) {
    let color;
    try {
      color = Color(e.target.value);
    } catch (e) {
      console.error(e);
    }

    this.setState({ currentColor: color || Color('black') });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            value={currentColor.hex()}
            onChange={this.handleColorInputChange}
          />
        </div>

        <div>
          <ColorBox color={currentColor.hex()} />
          <div>{ntcjs.name(currentColor.hex())[1]}</div>
          <div>{currentColor.hex().toLowerCase()}</div>
          <div>{currentColor.rgb().string()}</div>
        </div>
      </div>
    );
  }
}
