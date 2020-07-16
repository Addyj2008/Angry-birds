class Ground extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.body.isStatic = true;
    this.image = loadImage("Images-Animations/ground.png");
  }
}