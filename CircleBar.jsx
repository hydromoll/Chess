import React from "react";
import Svg, { Circle } from "react-native-svg";
function CircleBar() {
  return (
    <Svg height={440} width={440}>
      <Circle
        cx={220}
        cy={220}
        fill="none"
        stroke="#2162cc"
        r={100}
        strokeWidth={30}
      />
    </Svg>
  );
}

export default CircleBar;
