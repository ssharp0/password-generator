// checking for connection to ensure html is connected to javascript sheet
console.log("connected!");


// Once the generateBtn is clicked (button to generate a password)
document.getElementById('generateBtn').addEventListener('click', () => {

 // to prevent a refresh - if the event does not get explicity handled the default action should not be taken as normal
 event.preventDefault()

// Prompt to ask user for desired password length
 let pwLength = prompt("Please enter (type a number) for a password length between 8 and 128 characters")
 // Variable to alert the user to enter numbers (in the event they do not enter a number)
 let pwAlert = "Invalid. Please enter a number between 8 and 128"
 // Variable to alert the user if entered successfully to proceed to next steps
 let pwSuccess = "Thanks for providing the desired password length. The next series of questions will ask you if you want to include certain criteria in the password. Please click OK if you would like to include and Cancel if you do not want to include the criteria. Please click OK to proceed."

 // while loop so that if the character count prompt response is invalid (not a valid number or not between 8 and 129) it will continue to repeat until valid
 while (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || pwLength === null) {
  alert(pwAlert)
  pwLength = prompt("Please enter (type a number) a password length between 8 and 128 chacters")
 }

 // printing to the log the password length to test to see
 console.log(pwLength);

 // Alert message to inform page user of next steps for their information
 alert(pwSuccess)

 // Using confirm (true/false) for user to confirm/respond if they would like to include certain characters/numbers in the random password
 // Creating variables to store the response from the user confirmation
 // Alernatively, could use prompt and ifs to run through each criteria and provide yes or no
 let lowercaseCharResp = confirm("Do you want to include lower case letters in the password? Select 'OK' to include, or 'Cancel' to NOT include.")
 let uppercaseCharResp = confirm("Do you want to include upper case letters in the password? Select 'OK' to include, or 'Cancel' to NOT include.")
 let numbersResp = confirm("Do you want to include numbers in the password? Select 'OK' to include, or 'Cancel' to NOT include.")
 let specialResp = confirm("Do you want to include special characters in the password? Select 'OK' to include, or 'Cancel' to NOT include.")

 // logging user response (true/false) to the console for testing visibility
 console.log(`User response to include lowercase characters: ${lowercaseCharResp}`);
 console.log(`User response to include uppercase characters: ${uppercaseCharResp}`);
 console.log(`User response to include numbers: ${numbersResp}`);
 console.log(`User reponse to include special characters: ${specialResp}`);

 // Alert to notify user of their selections (true or false)
 alert(`You chose... 
  Password Length: ${pwLength} 
  Include lowercase: ${lowercaseCharResp}
  Include uppercase: ${uppercaseCharResp} 
  Include numbers: ${numbersResp} 
  Include special characters: ${specialResp}
  
  (true means it's included, false means it's not included)
  `)

 // Variables for password (options for user generated password) - setting as constant variable as these will not change
 const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
 const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXWZ"
 const numbers = "0123456789"
 const specialChar = "!@#$%^&*()_-+={}[];:'<>`~,.?/|"

 // Set empty string for the tempory password where the user selected criteria will be stored - so that it can be randomized later
 // For example, if the user confirmed (yes) to all criteria the temp password would look like: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ0123456789!@#$%^&*()_-+={}[];:'<>`~,.?/|"
 let temp = ''

 // Set empty string for the random password - which will be built off from temp storage of criteria
 let randPassword = ''

 // Conditionals to check if the user wants specific variable options - if reponses are true/yes then add the variable to the temp password (which was set as an empty string so it could be added to)
 if (lowercaseCharResp) { temp += lowerCaseChar }
 if (uppercaseCharResp) { temp += upperCaseChar }
 if (numbersResp) { temp += numbers }
 if (specialResp) { temp += specialChar }

 // logging temp password to the concole for testing visibility
 console.log(`The temporary stored password based on user confirmations: ${temp}`);

 // for loop to create the random password based on the user provided length
 for (let i = 0; i < pwLength; i++) {
  // Add a random character from the temp password to randPassword at every iteration of i (using index to get specific character and add to random password based on the temp password length)
  randPassword += temp[Math.floor(Math.random() * temp.length)]
  // logging the random password for testing visibility
  // console.log(randPassword);
 }

 // Place the random generated password on the password text area section on the html page
 document.getElementById('password').textContent = randPassword

 // Final message to let the user know password generated successfully
 let finishMsg = `Success - see password on the page! 
 Password: ${randPassword}`

 alert(finishMsg)

})


// Alternatively, could create functions for each criteria asking/prompting user yes or no to include or not and returning the response
// And then running a function to call all criteria functions to generate the password based on user selections
