/* GENERATIVE DRAWING - RECURSION

I attempted to make a recursive drawing. 
- I first started thinking about what was recursive in the nature, I started with snowflakes and then moved on to 
flowers because I was struggling to use recursion to make a snowflake.
- I first started with a simple sketch that we made in class which was the example based on a tree then and I made branches like I would do with a simple tree 
and then rotate these branches around in a circle to create a flower from a top view.
- I wanted to make it look as natural as possible so I made a slightly random angle between each branch around the circle.
- I also made the branch get thinner and thinner which made it look realistic and was more pleasing aesthetically.
- Then for the flowers, I chose a range of purple and use the random function to go through a range of purple.

- I love the ambiance of this piece and the colours, I would actually hang it in my room because it brings me peace.

- After doing research I wish I learnt how to make the flowers die and see the petals fall down like it's going through a cycle of life.
*/

// declare our variables
var length = 58;
var weight = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);


	pixelDensity(2);
	noLoop();
}

function draw() {
	background(200);
	// change the colour mode to hue - saturation - brightness
	colorMode(HSB);
	stroke(115, 80, 30);

	//We set the weight of the stroke to 4
	strokeWeight(weight);

	//We translate to the center of the canvas
	translate(width / 2, height / 2);

	//We use a for loop to go in a circle and separate in 8 "main" different branches
	for (let i = 0; i < TWO_PI; i += PI / 8) {
		push();
		//We then rotate the branch to a random angle around the 8 separation we made 
		//so its not perfect angles in between each branches
		rotate(i * random(0.9, 1.1));
		branch(length, weight);
		pop();
	}
}

function branch(h, wei) {
	var newWeight = wei;
	// We create random angle variable for the angle between two branches 	
	var angle = PI / random(4, 26);
	//We make the new weight go down by 1 if it's still bigger than 1
	if (wei > 1) {
		newWeight = wei - 1;
	}

	//Once the "height" of the line is over (with the condition afterwards) we create a circle
	//at the end of the branch
	if (h < 11) {
		var r = random(5, 20)
		fill(random(200, 270), random(10, 30), 100);
		strokeWeight(1)
		stroke(220, 100, 60);
		circle(0, 0, r)
	}
	else {
		line(0, 0, 0, -h);
	}

	strokeWeight(newWeight);
	translate(0, -h);

	//We create a condition so the recursion is not infinite
	if (h > 10) {
		//We create two branches on opposite angles
		push();
		rotate(angle);
		branch(h * random(0.6, 1), newWeight);
		pop();
		push();
		rotate(-angle);
		branch(h * random(0.6, 0.8), newWeight);
		pop();
	}
}