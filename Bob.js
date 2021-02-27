class Bob{
    constructor(x,y,radius){
        var option={
           isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = this.radius;
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        var pos = this.body.position;
        stroke(25);
        fill("yellow");
        ellipse(pos.x, pos.y, 50, 50);
}
}