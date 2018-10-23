import styled from 'styled-components';

const SliderPointer = styled.div`
  box-sizing: border-box;
  width: 6px;
  height: 19px;

  background: transparent;
  border: solid 2px #fafafa;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);

  transform: translate(-3px, -2px);
`;
SliderPointer.displayName = 'SliderPointer';

export default SliderPointer;
