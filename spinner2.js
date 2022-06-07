let spinner = "|\\-/|\\-/|"

let delay = 0;
let newSpinner = spinner +  "\n";

for (const char of newSpinner) {
  
  delay += 200;
  setTimeout(() => {
    process.stdout.write("\r   " + char);
  }, delay);

};