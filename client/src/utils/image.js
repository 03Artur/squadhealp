export const loadImage = (url) => {

    if (url) {
        const img = new Image();
        const promise = new Promise(function(resolve, reject){
            img.onload = () => {
                resolve(img);
            };
            img.onerror = err => {
                reject(err);
            };
        });
        img.src = url;
        return promise;
    }
    return Promise.reject(new Error('invalid params'));
};