export class MenuItem {
    constructor(title, to='#', icon) {
        this.title = title;
        this.to = to;
        this.icon = icon;
    }
}

export class Menu {
    constructor( title ,items, icon) {
        this.items = items;
        this.title = title;
        this.icon = icon;
    }
}


