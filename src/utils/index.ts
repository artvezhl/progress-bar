import { IBar } from "../models";

export const getBarTotal = (data: Array<IBar>): number => {
    let total = 0;

    data.forEach((el) => {
        total += el.value;
    });

    return total;
}

export const getModifiedData = (data: Array<IBar>, total: number, count: number): Array<IBar> => {
    const result = data.map((el) => ({
            ...el,
            percentage: +((el.value/total) * 100).toFixed(2),
            barCount: Math.ceil((count * (el.value/total) * 100)/100)
        })
    );

    return result.filter(el => el.barCount > 0);
}
