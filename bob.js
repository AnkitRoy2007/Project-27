class Bob{
    constructor(x,y,r){
        var options = {
          isStatic: false,
          density: 8,
          friction : 2,
          restitutuion:0.9
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r/2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ();
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop ();
    }
}