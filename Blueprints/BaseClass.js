var everything = [], loop1, loop2;

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
    if (!this.notBird && slingshot1.flown) {
      if (bird1.body.speed >= 10) {
        this.trajectory.push({'x' : this.body.position.x, 'y' : this.body.position.y});
      }
        for (loop2 = 0; loop2 < this.trajectory.length; loop2 += 1) {
        image(smokeIMG, this.trajectory[loop2].x, this.trajectory[loop2].y)
      }
    }
    if (this.body.speed >= 5 && this.notBird) {
      World.remove(world, this.body);
      this.destroyed = true;
      push();
      this.visibility -= 5;
      if (!this.notPig && this.visibility > 0)  {
        score += 2;
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