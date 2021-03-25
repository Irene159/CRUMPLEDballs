class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.2,
            'friction':0.3,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}