import React, { FC, useEffect, useState } from "react";

import s from "./ProgressBar.module.scss";
import Bar from "../UI/Bar";
import { IBar } from "../../models";
import Legend from "../Legend/Legend";
import {getBarTotal, getModifiedData} from "../../utils";
import { barWidth, barGap } from "../../data/constants";

interface IProgressBarProps {
    data: Array<IBar>,
    width: number,
    height: number
}

const ProgressBar: FC<IProgressBarProps> = ({
   data,
   width,
   height
}) => {
    const [barCount, setBarCount] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [arrayOfBars, setArrayOfBars] = useState<IBar[]>([]);

    useEffect(() => {
        setBarCount(Math.round(width/(barWidth + barGap)));
        setTotalValue(getBarTotal(data));
        setArrayOfBars(getModifiedData(data, totalValue, barCount));
    }, [width, data, totalValue, barCount]);

    // useEffect(() => {
    //
    // }, [data, totalValue, barCount])

    return (
        <section className={s.pb}>
            <div className={s.pb__bar} style={{ gap: barGap, width: width }}>
                {
                    arrayOfBars.map((el) => {
                        const resultArray: Array<IBar> = [];
                        if (el.barCount) {
                            for (let i = el.barCount; i > 0; i --) {
                                resultArray.push({
                                    ...el,
                                    id: String(Date.now() * Math.random())
                                })
                            }

                            return resultArray.map((el) => (<Bar key={el.id} color={el.color} height={height} />))
                        }
                        return null;
                    })
                }
            </div>
            <Legend data={arrayOfBars} />
        </section>
    );
};

export default ProgressBar;
