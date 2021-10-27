class Poligono{
	constructor(x,y,r,sides){
		var options = {
		restitution:1,
		friction:5,
		density:30
		}
	
		this.x = x
		this.y = y
		this.r = r
        this.sides = sides;
		this.body = Bodies.polygon(this.x,this.y,this.sides, (this.r-20)/2,options)
		World.add(world,this.body)
		}
		display(){
			var pos=this.body.position;	
            var angle = this.body.angle;
			push()
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
		fill("blue")
		triangle(50,50,this.sides,this.sides,this.sides,this.r);
		pop()
		}
	}