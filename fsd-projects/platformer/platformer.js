$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,625,100,10);
    createPlatform(550,550,75,10);
    createPlatform(275,425,50,10);
    createPlatform(400,315,50,10);
    createPlatform(885,590,75,10);
    createPlatform(1150,490,70,10);
    createPlatform(910,380,70,10);
    createPlatform(1150,300,50,5)
    createPlatform(50,675,50,10);
     createPlatform(700,400,0.1,150);
    // TODO 3 - Create Collectables
    createCollectable("steve",1155,200,0.1,1);
    createCollectable("steve",575,480,0.1,1);
    createCollectable("steve",1150,430,0.1,1);
    
    // TODO 4 - Create Cannons
    createCannon("right",780,1);
    createCannon("right",450,1500);
    createCannon("top",690,1300);
    createCannon("top",200,600);
    createCannon("right",700,300);
    createCannon("top",1150,1200);
    createCannon("right",300,1400);

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
