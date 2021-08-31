class Hexagon {
    constructor(x,y,r){
        var options = {
            isStatic :false
        }
        this . body = Bodies.circle(x,y,r,options)
        this.image = loadImage("polygon.png")
        this.x =x;
        this.y = y;
        this.r = r;
        World .add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60)
    }
    }