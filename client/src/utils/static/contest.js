import {TASK_TYPES} from '../../constants'
import {ICON_IMAGES_URL} from '../../api/baseURL'

export const taskTypeIconsSrc = new Map([
    [TASK_TYPES.NAME, {
        imgSrc: {
            grey: `${ICON_IMAGES_URL}/taskType/nameGrey.png`,
            green: `${ICON_IMAGES_URL}/taskType/nameGreen.png`,
        },
        description: "Get up and running with the perfect name.",
    }],
    [TASK_TYPES.TAGLINE, {
        imgSrc: {
            grey: `${ICON_IMAGES_URL}/taskType/taglineGrey.png`,
            green: `${ICON_IMAGES_URL}/taskType/taglineGreen.png`,
        },
        description: "Connect deeply with your target audience with an on-target tagline",
    }],
    [TASK_TYPES.LOGO, {
        imgSrc: {
            grey: `${ICON_IMAGES_URL}/taskType/logoGrey.png`,
            green: `${ICON_IMAGES_URL}/taskType/logoGreen.png`,
        },
        description: "Kickstart your venture with a unique, memorable logo",
    }],
]);
