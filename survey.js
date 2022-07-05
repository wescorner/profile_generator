const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let name, activity, music, meal, food, sport, superpower;
rl.question("What is your name?", (answer) => {
	name = answer;
	rl.question("What's an activity that you like doing?", (answer) => {
		activity = answer;
		rl.question("What do you listen to while doing that?", (answer) => {
			music = answer;
			rl.question("Which meal is your favorite?", (answer) => {
				meal = answer;
				rl.question("Favorite thing to eat in that meal?", (answer) => {
					food = answer;
					rl.question("Which sport is your favorite?", (answer) => {
						sport = answer;
						rl.question("What is your superpower?", (answer) => {
							superpower = answer;
							console.log(
								`${name} loves listening to ${music} when ${activity}, devouring ${food} for ${meal}, preferrs ${sport} over any other sport, and is amazing at ${superpower}.`
							);
							rl.close();
						});
					});
				});
			});
		});
	});
});
