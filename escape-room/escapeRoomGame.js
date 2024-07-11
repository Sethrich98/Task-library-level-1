const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hasKey = false;

console.log("You are locked in a room.");
console.log("In order to escape, you will have three choices.");
console.log("(Hint: Don't stick your hand in the wall!)");

function showChoices() {
    console.log("\nWhat would you like to do?");
    console.log("1. Find the Key");
    console.log("2. Put your hand in the hole in the wall");
    console.log("3. Open the door");
    rl.question("Enter your choice (1, 2, or 3): ", (choice) => {
        switch (choice.trim()) { // Trim whitespace from input
            case "1":
                if (!hasKey) {
                    hasKey = true;
                    console.log("You found the key!");
                } else {
                    console.log("You already have the key.");
                }
                break;
            case "2":
                console.log("You put your hand in the hole but something grabs your hand. You were not able to escape. GAME OVER");
                rl.close();
                return;
            case "3":
                if (hasKey) {
                    console.log("You used the key on the door and managed to escape! You win!");
                    rl.close();
                    return;
                } else {
                    console.log("The door is locked. Look around for the key.");
                }
                break;
            default:
                console.log("Invalid choice. Please enter 1, 2, or 3.");
                break;
        }
        showChoices();  
    });
}

showChoices();
