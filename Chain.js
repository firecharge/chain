class Chain{
    constructor (BodyA, BodyB){
        var options = {
            bodyA : BodyA,
            bodyB : BodyB,
            stiffness :0.04,
            length :10
    
        }
       this.rope = Constraint.create(options);
        World.add (world, this.rope);
    }
    
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }
}

