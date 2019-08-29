export function stringToHslColor(str, s = 60, l = 40) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}