var everything = [], loop1;

class BaseClass{
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height, {'restitution':0.8,'friction':1.0,'density':1.0});
    this.width = width;
    this.visibility = 255;
    this.destroyed = false;
    this.height = height;
    this.notBird = true;
    this.notPig = true;
    this.image = loadImage('Images-Animations/base.png');
    World.add(world, this.body);
    everything.push(this);
  }
  display(){
    if (this.body.speed >= 5 && this.notBird) {
      World.remove(world, this.body);
      this.destroyed = true;
      push();
      this.visibility -= 5;
      if (!this.notPig && this.visibilty > 0)  {
        score += 1;
      }
      rotate(this.body.angle);
      imageMode(CENTER);
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    } else {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
}

function displayEverything() {
  for (loop1 = 0; loop1 < everything.length; loop1 += 1) {
    if (!this.destroyed) {
      everything[loop1].display();
    }
  }
}