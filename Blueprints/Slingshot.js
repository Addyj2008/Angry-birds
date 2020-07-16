class Slingshot {
    constructor(Object, Point) {
        this.chain = Constraint.create({
            'bodyA' : Object.body,
            'pointB' : Point,
            'stiffness' : 0.004,
            'length' : 0
        });
        World.add(world, this.chain);
        this.flown = false;
        this.sling1 = loadImage('Images-Animations/sling1.png');
        this.sling2 = loadImage('Images-Animations/sling2.png');
        this.sling3 = loadImage('Images-Animations/sling3.png');
    }
    display() {
        push();
        imageMode(CENTER);
        if (!this.flown) {
            stroke(48, 22, 8);
            strokeWeight(10);
            if (this.chain.bodyA.position.x < this.chain.pointB.x && drag) {
                strokeWeight(10);
                image(this.sling3, this.chain.bodyA.position.x - 22.5, this.chain.bodyA.position.y, 20, 40);
            } else if (this.chain.bodyA.position.x > this.chain.pointB.x && drag) {
                strokeWeight(5);
                image(this.sling3, this.chain.bodyA.position.x + 22.5, this.chain.bodyA.position.y, 20, 40);
            }
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x + 13, this.chain.pointB.y);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x - 24, this.chain.pointB.y);
        }
        image(this.sling1, 200, 110);
        image(this.sling2, 175, 70);
        pop();
    }
    fly() {
        this.flown = true;
        this.chain.bodyA = null;
    }
}