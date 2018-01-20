var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(){
if (katzDeliLine.length < 1) {
  return ("There is nobody waiting to be served!");
}
else {
  return ("Currently serving " + katzDeliLine[0] + ".");
  katzDeliLine.shift();
}
}

function currentLine(katzDeliLine) {
if (1 > katzDeliLine.length) {
  return ("The line is currently empty.");
}
else {
  var numberedarray = [];
  while (katzDeliLine.length > 0) {
    numberedarray.unshift("The line is currently: " + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length] + ",");
    katzDeliLine.pop();
  }
  return numberedarray;
}
}