const readline = require("readline");
const EventEmitter = require("events");
const fs = require("fs");
const event = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];
let taskCount = 0;

// Function to add one reminder task
function addTask(index) {
  rl.question("Enter the description for reminder " + (index + 1) + ": ", (name) => {
    rl.question("Enter the reminder time in seconds for '" + name + "': ", (rem) => {
      let reminderTime = parseInt(rem * 1000);
      tasks.push({ name, reminderTime });

      // Emit reminder event for this task
      event.emit("reminder", name, reminderTime);

      // Store in file
      fs.appendFileSync("reminders.csv", `Reminder: ${name}\nTime: ${rem} seconds\n`);
      
      if (index + 1 < taskCount) {
        addTask(index + 1); // Recursively ask for next task
      } else {
        rl.close();
      }
    });
  });
}

// Listener for reminders
event.on("reminder", (name, reminderTime) => {
  setTimeout(() => {
    console.log(`\n🔔 Reminder: ${name}`);
    console.log("The time is over.\n");
  }, reminderTime);
});

// Ask how many reminders
rl.question("How many reminders do you want to add? ", (task1) => {
  taskCount = parseInt(task1);
  if (taskCount > 0) {
    addTask(0);
  } else {
    console.log("No reminders to add.");
    rl.close();
  }
});