import {Engine, Render, World, Bodies, Runner, MouseConstraint, Mouse} from 'matter-js';
// module aliases
// const Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: 800,
    height: 600
  }
  });

const walls = [
Bodies.rectangle(400,0,800,40, {isStatic: true}),
Bodies.rectangle(0,300,40,600, {isStatic: true}),
Bodies.rectangle(400,600,800,40, {isStatic: true}),
Bodies.rectangle(800,300,40,600, {isStatic: true})]


World.add(engine.world, walls)

// Random Shapes Generator
function createRandomShapes(num) {
  let toys = []
  let rand = function(arg) {
    return Math.floor(Math.random() * arg )
  }

  for (let i=1; i <=num; i++) {
    toys.push(Bodies.polygon(rand(800), rand(600), rand(9), rand(50)))
  }
  return toys
 }

 
World.add(engine.world, createRandomShapes(50))
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(engine.world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}));
