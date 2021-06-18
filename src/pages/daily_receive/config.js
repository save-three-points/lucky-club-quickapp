import { ELEME_RED_ENVELOPE_URL, EMITUAN_RED_ENVELOPE_URL } from "../../constants";

export const couponCards = [
    {
        title: '外卖红包',
        titleColor: '#00b6fe',
        price: {
            min: 8,
            max: 30,
        },
        toReceived: 1,
        url: ELEME_RED_ENVELOPE_URL,
        // btnBgColor: `linear-gradient(90deg, 
        //     #fa307a 0%, 
        //     #fd0734 50%, 
        //     #fd7e41 100%)`
    },
    {
        title: '天天都能领',
        titleColor: '#fcc85d',
        price: {
            max: 38,
        },
        toReceived: 2,
        url: EMITUAN_RED_ENVELOPE_URL,
        // btnBgColor: `linear-gradient(90deg, 
        //     #e43939 0%, 
        //     #d42020 46%, 
        //     #ea0505 100%)`
    },
]