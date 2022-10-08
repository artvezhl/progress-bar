import React, {FC} from "react";

import s from "./LegendPoint.module.scss";

interface ILegendPointProps {
    color: string
}

const LegendPoint: FC<ILegendPointProps> = ({ color }) => {
    return (
        <span className={s.legend__point} style={{ backgroundColor: color }} />
    );
}

export default LegendPoint;
