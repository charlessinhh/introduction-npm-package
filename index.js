#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message = "Hey there! I'm Charles, a software developer at Eviden(Atos) Mumbai!";

  const linkedinLink = "https://www.linkedin.com/in/charles-kumar-singh-2a98b6183/";
  const githubLink = "https://github.com/charlessinhh";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
  |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
  +---------------------------------------------------------------+
  | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
  | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${githubLink}                      \x1b[38;5;51m|
  +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();