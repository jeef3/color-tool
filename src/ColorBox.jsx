import styled from 'styled-components';

const ColorBox = styled.div`
  width: 32px;
  height: 32px;

  background-color: ${props => props.color};
  border-radius: 4px;
`;
ColorBox.displayName = 'ColorBox';

export default ColorBox;
