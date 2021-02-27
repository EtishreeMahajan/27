class Rope{
    constructor(body1,pointB){

   
        var options={
            bodyA: body1,
            pointB:pointB
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.rope);
}
    display(){
        fill("white");
        var point1 = this.rope.bodyA.position;
        var point2 = this.pointB
        line(point1.x,point1.y,point2.x,point2.y);
    }  

    //setCollider(shape,xOffset,yOffset,width,height)
}