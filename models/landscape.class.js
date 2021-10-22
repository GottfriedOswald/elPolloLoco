class Landscape extends MovableObject {



    height = 0;
    width = 0;

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);

        this.x = x;
        this.y = y;

        this.height = height;
        this.width = width;
    };
}