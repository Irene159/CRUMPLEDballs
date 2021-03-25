class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.bodyB = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyB);
	    this.body1= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.body1);
	    this.bodyR = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyR);
        this.bodyB.width = width
        this.bodyB.height = height 
        
   }
   display(){
       fill("white");
       rect(this.bodyB.position.x, this.bodyB.position.y,this.bodyB.width, this.bodyB.height)
       rect((this.bodyB.position.x-(this.bodyB.width/2)), (this.bodyB.position.y-(this.bodyB.height*(2*(this.bodyB.width/100)))), this.bodyB.height, this.bodyB.width/2)
       rect((this.bodyB.position.x+(this.bodyB.width/2)), (this.bodyB.position.y-(this.bodyB.height*(2*(this.bodyB.width/100)))), this.bodyB.height, this.bodyB.width/2)
   }
}