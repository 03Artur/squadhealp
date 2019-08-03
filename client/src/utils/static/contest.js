import {TASK_TYPE} from '../../constants'
import {iconImagesURL} from '../../api/baseURL'

export const taskTypeIconsSrc = new Map([
    [TASK_TYPE.NAME, {
        imgSrc: {
            grey: `${iconImagesURL}/taskType/nameGrey.png`,
            green: `${iconImagesURL}/taskType/nameGreen.png`,
        },
        description: "Get up and running with the perfect name.",
    }],
    [TASK_TYPE.TAGLINE, {
        imgSrc: {
            grey: `${iconImagesURL}/taskType/taglineGrey.png`,
            green: `${iconImagesURL}/taskType/taglineGreen.png`,
        },
        description: "Connect deeply with your target audience with an on-target tagline",
    }],
    [TASK_TYPE.LOGO, {
        imgSrc: {
            grey: `${iconImagesURL}/taskType/logoGrey.png`,
            green: `${iconImagesURL}/taskType/logoGreen.png`,
        },
        description: "Kickstart your venture with a unique, memorable logo",
    }],
]);
