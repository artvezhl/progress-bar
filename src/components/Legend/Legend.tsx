import React, { FC } from "react";

import s from "./Legend.module.scss";
import LegendPoint from "../UI/LegendPoint/LegendPoint";
import { IBar } from "../../models";

interface ILegendProps {
    data: Array<IBar>
}

const Legend: FC<ILegendProps> = ({ data }) => {
    return (
        <div className={s.legend}>
            {data.map((el) => (
                <div className={s.legend__elem} key={Date.now() * Math.random()}>
                    <LegendPoint color={ el.color } />
                    <p>{`${el.name}: ${el.value} (${el.percentage} %)`}</p>
                </div>
            ))}
        </div>
    );
}

export default Legend;
