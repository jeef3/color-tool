import React from 'react';

import AppLayout from './AppLayout';
import ColorInfo from './ColorInfo';
import ColorInput from './ColorInput';
import Library from './Library';
import Picker from './Picker';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentColor: { hex: '#000000', rgb: { r: 0, g: 0, b: 0, a: 1 } }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(color) {
    console.log('change', color);
    this.setState({ currentColor: color });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <AppLayout>
        <div>
          <div>
            <button>P</button>
            <div>
              <ColorInput color={currentColor} onChange={this.handleChange} />
            </div>
          </div>

          <ColorInfo color={currentColor} />

          <Picker color={currentColor} onChange={this.handleChange} />
        </div>

        <Library
          library={[
            {
              id: 1,
              name: 'Emirates',
              colors: [
                { id: 1, color: 'red' },
                { id: 2, color: 'white' },
                { id: 3, color: 'black' },
                { id: 4, color: 'gold' }
              ]
            },
            {
              id: 2,
              name: 'Skilitics Health',
              colors: [{ id: 5, color: 'lightblue' }, { id: 6, color: 'blue' }]
            }
          ]}
        />
      </AppLayout>
    );
  }
}
