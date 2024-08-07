import { Request, Response } from "express";

const romanToInt = async (req: Request, res: Response) => {
    const { word }: { word: string } = req.body
    try {

        if (!word) {
            return res.status(404).json({ success: false, error: "Please Enter Your Roman Word" })
        }
        const romanMap: { [key: string]: number } = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let total = 0;
        let i = 0;

        while (i < word.length) {
            const currentVal = romanMap[word[i]];

            if (i + 1 < word.length) {
                const nextVal = romanMap[word[i + 1]];
                if (nextVal > currentVal) {
                    total += (nextVal - currentVal);
                    i += 2;
                } else {
                    total += currentVal;
                    i += 1;
                }
            } else {
                total += currentVal;
                i += 1;
            }
        }

        return res.status(200).json({ success: true, result: total })
    } catch (error: any) {
        return res.status(500).json({ status: false, error: error.message });
    }
}

export default romanToInt;