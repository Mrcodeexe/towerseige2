const Engine=Matter.Engine;
 const Bodies=Matter.Bodies;
 const World=Matter.World;
 const Constraint=Matter.Constraint;
 var plat, plat2
 var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10
 var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20
 var polygon,polygonImg;
 var sling;

 function preload(){
    polygonImg=loadImage("polygon.png");
 }
 function setup(){
     createCanvas(1500, 1500)
    engine=Engine.create();
    world = engine.world;
    //NO.1
    plat=new Plat(200, 700, 300, 20);
    plat2=new Plat(1050, 300, 300, 20)
    block1=new Block(100, 650);
    block2=new Block(160, 650);
    block3=new Block(220, 650);
    block4=new Block(280, 650)
    block5=new Block(130, 550);
    block6=new Block(190, 550);
    block7=new Block(250, 550);
    block8=new Block(160, 450);
    block9=new Block(220, 450);
    block10=new Block(190, 350)
    //NO.1
    //NO.2
    block11=new Block(950, 250);
    block12=new Block(1010, 250);
    block13=new Block(1070, 250);
    block14=new Block(1130, 250)
    block15=new Block(970, 150)
    block16=new Block(1030, 150)
    block17=new Block(1090, 150)
    block18=new Block(990, 50);
    block19=new Block(1050, 50);
    block20=new Block(1020, 10)
    //NO.2
    // polygon=new Polygon(750, 750)
    polygon = Bodies.circle(100,200,35);
    World.add(world,polygon);
    Engine.run(engine);

    sling=new Slingshot(this.polygon, {x:200, y:300})

 }

 function draw(){
     background(200,100,120);

     plat.display();
     plat2.display();
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     sling.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,70,70);
 }

 function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
 }

 function mouseReleased(){
     sling.fly();
 }

 function keyPressed(){
     if(keyCode===32){
         sling.attach(this.polygon);
     }
 }