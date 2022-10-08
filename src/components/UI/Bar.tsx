import React, {FC} from "react";

import { barWidth } from "../../data/constants";

interface BarProps {
    color: string,
    height: number
}

const styles = {
    width: `${barWidth}px`,
    borderRadius: "3px"
}

const Bar: FC<BarProps> = ({color, height}) => {
    return (
        <span style={{...styles, height: `${height}px`, backgroundColor: color}} />
    );
}

export default Bar;
