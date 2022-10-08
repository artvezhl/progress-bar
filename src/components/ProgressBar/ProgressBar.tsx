import React, {FC, useEffect, useState} from "react";

import Bar from "../UI/Bar";
import { barWidth, barGap } from "../../data/constants";

interface IProgressBarProps {
    data: Array<{
        name: string,
        color: string,
        value: number
    }>,
    width: number,
    height: number
}

interface IBar {
    name: string,
    color: string,
    value: number,
    id?: string,
    percentage: number,
    barCount: number
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
        let total = 0;
        data.forEach((el, i) => {
            total += el.value;
            data.length - 1 === i && setTotalValue(total);
        });
    }, [width, data]);

    useEffect(() => {
        const result = data.map((el) => ({
                ...el,
                percentage: Math.floor((el.value/totalValue) * 100),
                barCount: Math.ceil((barCount * (el.value/totalValue) * 100)/100)
            })
        );
        setArrayOfBars(result);
    }, [data, totalValue])

    return (
        <div style={{ display: "flex", gap: "2px", width: width, height: "50px"}}>
            {
                arrayOfBars.map((el) => {
                    console.log('id', el.id)
                    console.log('percentage', el.percentage)
                    console.log('barCount', el.barCount)
                    console.log('totalCount', barCount)
                    console.log("==========================")

                    const resultArray: Array<IBar> = [];

                    for (let i = el.barCount; i > 0; i --) {
                        resultArray.push({
                            ...el,
                            id: String(Date.now() * Math.random())
                        })
                    }

                    return resultArray.map((el) => (<Bar key={el.id} color={el.color} height={height} />))
                })
            }
        </div>
    );
};

export default ProgressBar;
