// ----- Variables -----
var canUseDot = true;
var canUseTask = true;
var errOccured = false;

//----- functions -----
const clearLast = () => {
  var lastValue = document.getElementById("ans").value.substring(0,document.getElementById("ans").value.length-1);
  document.getElementById("ans").value = lastValue;
  if(errOccured) {
      clearall();
  } else if (!lastValue.includes('.')) {
    canUseDot = true;
  } else if(!lastValue.includes('+') || !lastValue.includes('-') ||
     !lastValue.includes('/') || !lastValue.includes('*')) {
      canUseTask = true;
  }
}

const clearall = () => {
  document.getElementById("ans").value="";
  canUseDot = true;
  canUseTask = true;
  errOccured = false;
}

const addNumber = (val) => {
  if (errOccured) {
    clearall();
  }
  document.getElementById("ans").value += val;
  if((document.getElementById("ans").value < 1) && (document.getElementById("ans") === ".")) {
    document.getElementById("ans").value = "0";
  }
  canUseTask = true;
}

const addTask = (task) => {
  if(errOccured) {
      clearall();
      document.getElementById("ans").value = "0" + task;
  } else if(document.getElementById("ans").value < 1 && canUseTask){
      document.getElementById("ans").value = "0" + task;
  } else if(canUseTask) {
      document.getElementById("ans").value += task;
  }
  canUseDot = true;
  canUseTask = false;
}
const addOpenBracket = () => {
  document.getElementById("ans").value += "(";
  if(errOccured) {
      clearall();

  }
}

const addCloseBracket = () => {
  document.getElementById("ans").value += ")";
  if(errOccured) {
      clearall();
  }
}

constpi = () => {
  if(errOccured) {
      clearall();
  }
  return document.getElementById("ans").value += Math.PI;
}

const sqrtOf = () => {
  calc();
  var valueInDisplay = document.getElementById("ans").value.substring(0,document.getElementById("ans").value.length);
  return document.getElementById("ans").value = Math.sqrt(valueInDisplay);
}

const cbrtOf = () => {
  calc();
  var valueInDisplay = document.getElementById("ans").value.substring(0,document.getElementById("ans").value.length);
  return document.getElementById("ans").value = Math.cbrt(valueInDisplay);
}

const rndOf = () => {
  calc();
  var valueInDisplay = document.getElementById("ans").value.substring(0,document.getElementById("ans").value.length);
  return document.getElementById("ans").value = Math.round(valueInDisplay);
}

const calc = () => {
  try {
    if(document.getElementById("ans").value === "Error") {
      throw err;
    } else if(document.getElementById("ans").value) {
      document.getElementById("ans").value = eval(document.getElementById("ans").value);
    } else if(!document.getElementById("ans").value){
      return;
    } else if(document.getElementById("ans").value.includes(".")) {
      canUseDot = false;
    }
  }
  catch(err) {
    console.log('WARNING!');
    document.getElementById("ans").value = "Error";
    errOccured = true;
  }
}

const dot = () => {
    if(errOccured) {
        clearall();
        document.getElementById("ans").value += ".";
    } else if(canUseDot) {
      document.getElementById("ans").value += ".";
      canUseDot = false;

    } else {
      console.log('WARNING: DOT ALREADY PRESENT!');
    }
}