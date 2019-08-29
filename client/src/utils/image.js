export const loadImage = (url) => {

    if (url) {

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = err => {
                reject(err);
            };
            img.src = url;
        });


    }
    return Promise.reject(new Error('invalid params'));
};