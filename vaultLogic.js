/*
Pseudo Code for Initial Rubric Conformed Code:
1. come up with 3 equations with different operators that result in 10 - 40 - 39 respectively.
2. create a let var called message You have received this message because you have been chosen to open an important vault. Here is the secret combination:
3. make 3 let variables named key1, key2, and key3 respectively. No need to clarify for vault as what else would they be for?
4. input equation 5*2 after key1.
5. input equation 80/2 after key2.
6. input equation 40 - 1 after key3.
7. then input keys into an alert template let called combination. "${key1} - ${key2} - ${key3}"
8. concate message and combination together in alert
*/
let message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
// Make Keys
let key1 = 5 * 2;
let key2 = 80 / 2;
let key3 = 40 - 1;
// make combination template for reusability and easy display later
let combination = `${key1} - ${key2} - ${key3}`;
// Send initial alert
alert(message + combination);

// Official Rubric Has Been Done, Now Time To Have Some Fun!

// Make a variable to use to toggle between total conformed state and not later in my toggleRubricConformance function


// after creating const for it, add listener for button that is pressed to conform visuals to rubric.
const conformButton = document.getElementById("toggleRubricConformance");
conformButton.addEventListener("click", (event) => {toggleRubricConformance();});
let totalConformance = true;
// then run said function fast to set the initial text of the dialog box.
toggleRubricConformance()
// get via id dialog model
const hiddenDialogModel = document.getElementById("hiddenCodeDialog");

// get via id show message button
const showMsgBtn = document.getElementById("showMsg");

// It's a bit like python and Godot. You have a listener you hook up with what it's listening for, get the event, then feed that into the code that processes the event, which can feed it into functions if needed.

showMsgBtn.addEventListener("click", (event) => {
  toggleDialog(hiddenDialogModel);
});
//get via id alert button
const sendAlertBtn = document.getElementById("sendAlert");
sendAlertBtn.addEventListener("click", (event) => {
  sendAlert();
});



// add listener for button that is pressed to try the code.
document.getElementById("tryCombo").addEventListener("click", (event) => {
  checkInputCode();
});

// I need to figure out how to do a for loop or something in Java later to make this more efficient. But for now I am brute force comparing the key inputs and key variables.
const input1 = document.getElementById("key1");
const input2 = document.getElementById("key2");
const input3 = document.getElementById("key3");

// make a quick array of the inputs and keys for easy looping later
const inputs = [input1, input2, input3];
const keys = [key1, key2, key3];

// quickly set value of inputs to zero, so that if the user clicks try right away, or does not fill out the rest of the inputs, it does not break due to having no set value yet.
for (i in inputs) {
  i.value = 0;
}

function makeAnimation() {
  for (i in inputs) {
    let val = i.value;
    console.log(val);
  }
  [{ transform: `transform${input1.value}` }];
}
function checkInputCode() {
  console.log("CHECKING INPUT CODE...");
  //Brute forced getting and printing some input values to console for debug purposes.
  //   console.log(input1.value);
  //   console.log(input2.value);
  //   console.log(input3.value);
  //Decided to leave the above commented out code in here to show my testing and thought process as I figured things out.
  let idx = 0;
  // use fresh variables here in the function so they are local and we do not have to clean them every time we use them.
  let animationFrames = [];
  let animationTiming = {};
  // For each input, get and log the value and if it matches the input or not
  for (i in inputs) {
    let val = i.value;
    console.log(val);

    // // Then make rotation frame to the value and back to the start position of zero
    // animationFrames[idx] = { transform: `rotate(${val}deg)` };
    // animationFrames[idx+1]=({ transform: `rotate(0deg)` });
    if (keys[idx] == val) {
      console.log(`key${idx} matches input${idx}!`);
    }
    // break out of the loop if not matching, as the rest does not matter and this cuts off the relevant animation frames.
    else {
      break;
    }
    // add 1 to index so it remains in synch with the loop's index.
    idx += 1;
  }

  // But first add 5 seconds per frame to the length of the animation
  let animLength = 2000;
  for (frame in animationFrames) {
    animLength += 2000;
  }
  // then assemble the dict for animation timing. Which if I understand correctly, is how long it takes and how many times it should run.
  //animationTiming = { duration: animLength, iterations: 1 };
  //then input it with the animation frames into the animate function
  document.getElementById("dialTop").animate(animationFrames, animationTiming);

  // if an input is not equal to the key, then it's all invalid and no further checking is necessary
  if (input1.value != key1 || input2.value != key2 || input3.value != key3) {
    console.log("INVALID!");
  } else {
    console.log("ALL VALID!");
    //Set the styles of the images representing the dial to be hidden
    document.getElementById("dialButt").style.visibility = "hidden";
    document.getElementById("dialTop").style.visibility = "hidden";
    //set prize to visible
    document.getElementById("prizeInsideVault").style.visibility = "visible";
    //set image of safe to open one
    document.getElementById("safeBase").src = "SafeAssets/SafeInside.png";
  }
}

function toggleRubricConformance() {
  // toggle the totalConformance variable via setting to not itself.
  totalConformance = !totalConformance;
  // set secret code in dialog and conform button text in accordance with state
  if (totalConformance == true) {
    document.getElementById("codePopup").innerText =
      "Secret Code: " + combination;
      conformButton.textContent = "Conform Dialog To Rubric";
  } else {
    document.getElementById("codePopup").innerText = message + combination;
    conformButton.textContent = "Shorten Dialog From Rubric";
  }
}

function toggleDialog(model) {
  // if the style of the model is none, then the code can assume it's hidden and vice versa. Then switch between the states accordingly.
  console.log("Toggled Dialog!");
  if (hiddenDialogModel.style.display === "none") {
    model.style.display = "block";
  } else {
    model.style.display = "none";
  }
}
// Sends an alert
function sendAlert() {
  alert(message + combination);
}