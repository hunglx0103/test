class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(a,b) {
        this.pointA = a;
        this.pointB = b;
    };
    get length () {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.x - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
}
const pA = new Point(3,2);
const pB = new Point(3,5);
const LineAB = new Line(pA,pB);
console.log(LineAB.length);