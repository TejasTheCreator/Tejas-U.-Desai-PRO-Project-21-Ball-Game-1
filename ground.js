class Ground {
    constructor(x,y,w,h,f){
        this.x =x;
        this.y=y;
        this.w= w;
        this.h= h;
        this.f=f;
        var options={isStatic: true}
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body)
        
    }

    display(){
    push()
        stroke(0)
        fill(this.f)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.w, this.h)
    pop()
    }
}