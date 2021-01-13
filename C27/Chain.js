class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        //create a constraint --> Constraint.create(options)
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4)              //thickness of the line
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}