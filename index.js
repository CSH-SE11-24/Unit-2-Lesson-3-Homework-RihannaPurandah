// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word ="Kittens"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let user1 = prompt("Guess a letter: ")
// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word

while(word !== user1){
let letters = prompt("Guess another letter: ")
if(user1.includes(word)){
  console.log("Whats the word?:")
} else {
  console.log("Try again")
}
user1 = prompt("Guess Again")
if(user1 === word){
  console.log("You got it")
}
  attempts++
}
console.log(`You did it! It took ${attempts} attempts`)
// Write an if/else statement that checks if the user guess is equal to your word and tells the user

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter

// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

