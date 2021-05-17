class Drops{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction : 0.01,
            density : 0.02
        }
        this.rain = Bodies.circle(x,y,1,options);
        this.radius = 1;
        World.add(world, this.rain)
    } 
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var pos = this.rain.position;
        ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, 6, 6);
    }
}