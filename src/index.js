import {Engine, Render, World, Bodies, Runner} from 'matter-js';
// Initialize Engine
const width = 800;
const height = 800;
const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: true,
      width,
      height
    }
    });
  

function createWalls () {
  const walls = [
    Bodies.rectangle((width/2),0,width,40, {isStatic: true}),
    Bodies.rectangle(0,(height/2),40,height, {isStatic: true}),
    Bodies.rectangle((width/2),height,width,40, {isStatic: true}),
    Bodies.rectangle(width,(height/2),40,height, {isStatic: true})]
    
    World.add(engine.world, walls)
  }
 
function generateMaze (rows, columns){
  const grid = Array(rows)
    .fill(null)
    .map(()=> Array(columns).fill(false));
    console.log(grid);
}

function renderWorld() {  
  Render.run(render);
  Runner.run(Runner.create(), engine);
}



createWalls();
generateMaze(3,4);
renderWorld()