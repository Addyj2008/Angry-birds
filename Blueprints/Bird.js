class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory = [];
    this.canDrag = true;
    this.image = loadImage("Images-Animations/bird.png");
    this.notBird = false;
  }
}