class Log extends BaseClass{
  constructor(x,y,width,angle){
    super(x,y,width,20);
    this.image = loadImage("Images-Animations/log.png");
    Matter.Body.setAngle(this.body, angle);
  }
}