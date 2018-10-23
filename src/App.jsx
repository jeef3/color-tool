import React from 'react';
import tinycolor from 'tinycolor2';

import AppLayout from './AppLayout';
import ColorInfo from './ColorInfo';
import ColorInput from './ColorInput';
import Library from './Library';
import Picker from './Picker';

const palettes = [
  {
    id: 1,
    name: 'Emirates',
    swatches: [
      { id: 1, color: '#D71920' },
      { id: 2, color: '#FFFFFF' },
      { id: 3, color: '#231F20' },
      { id: 4, color: '#BC9B6A' }
    ]
  },
  {
    id: 2,
    name: 'Skilitics',
    swatches: [
      { id: 5, color: '#E6E6E6' },
      { id: 6, color: '#616366' },
      { id: 7, color: '#7AB800', name: 'Thrive Green' },
      { id: 8, color: '#009ED9', name: 'Interact Blue' }
    ]
  }
];

const toColor = hex => {
  const color = tinycolor(hex);
  const hsl = color.toHsl();
  const hsv = color.toHsv();
  const rgb = color.toRgb();

  if (hsl.s === 0) {
    hsl.h = 0;
    hsv.h = 0;
  }

  const transparent = hex === '000000' && rgb.a === 0;

  const v = {
    hsl,
    hex: transparent ? 'transparent' : `${hex}`,
    rgb,
    hsv,
    source: 'hex'
  };

  console.log('setting', v, 'from', hex);
  return v;
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentColor: toColor('#FFC0CB')
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSwatchSelected = this.handleSwatchSelected.bind(this);
  }

  componentDidMount() {}

  handleChange(color) {
    console.log('change', color);
    this.setState({ currentSwatch: null, currentColor: color });
  }

  handleSwatchSelected(id) {
    console.log('looking for swatch', id);
    const palette = palettes.filter(
      palette => palette.swatches.findIndex(swatch => swatch.id === id) !== -1
    )[0];
    console.log('found palette', palette);
    const swatch = palette.swatches.filter(swatch => swatch.id === id)[0];

    console.log('setting', { hex: swatch.color, source: 'hex' });

    this.setState({
      currentSwatch: id,
      currentColor: toColor(swatch.color)
    });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <AppLayout>
        <div>
          <div>
            <div>
              <ColorInput color={currentColor} onChange={this.handleChange} />
            </div>
          </div>

          <ColorInfo color={currentColor} />

          <Picker color={currentColor} onChange={this.handleChange} />
        </div>

        <Library
          library={palettes}
          selectedSwatch="1"
          onSwatchSelected={this.handleSwatchSelected}
        />
      </AppLayout>
    );
  }
}
