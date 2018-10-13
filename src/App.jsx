import React from 'react';
import ntcjs from 'ntcjs';

import ColorBox from './ColorBox';
import Picker from './Picker';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentColor: { hex: '#000000' }
    };

    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  componentDidMount() {}

  handleChangeComplete(color) {
    console.log('change', color);
    this.setState({ currentColor: color });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <div>
        <div />

        <div>
          <ColorBox color={currentColor.hex} />
          <div>{ntcjs.name(currentColor.hex)}</div>
        </div>

        <Picker color={currentColor} onChange={this.handleChangeComplete} />
      </div>
    );
  }
}
