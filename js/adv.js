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
    //var lastValue = document.getElementById("ans").value.substring(0,document.getElementById("ans").value.length-1);
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

// ---- UNUSED JQUERY CODE -------
// $(document).ready( function() {
//   $(".one").click(function() {
//     $("#ans").val('1');
//   })
//
//   $(".two").click(function() {
//     $("#ans").val('2');
//   })
//
//   $(".three").click(function() {
//     $("#ans").val('3');
//   })
//
//   $(".four").click(function() {
//     $("#ans").val('4');
//   })
//
//   $(".five").click(function() {
//     $("#ans").val('5');
//   })
//
//   $(".six").click(function() {
//     $("#ans").val('6');
//   })
//
//   $(".seven").click(function() {
//     $("#ans").val('7');
//   })
//
//   $(".eight").click(function() {
//     $("#ans").val('8');
//   })
//
//   $(".nine").click(function() {
//     $("#ans").val('9');
//   })
//
//   $('.c').click(function() {
//     $('#ans').text('');
//   })
//
//   $(".zero").click(function() {
//     $("#ans").text('0');
//   })
//
//   // $(".dot").click(function() {
//   //   var dotCount = true;
//   //   if(dotCount) {
//   //     dotCount = false;
//   //       return console.log('wtf')
//   //   } else {
//   //     return console.log('wtf2')
//   //   }
//
//
//   $(".erase").click(function() {
//     $("#ans").val('');
//   })
//
//   $(".add").click(function() {
//     $("#ans").val('+');
//   })
//
//   $(".minus").click(function() {
//     $("#ans").val('-');
//   })
//
//   $(".multiply").click(function() {
//     $("#ans").val('*');
//   })
//
//   $(".divide").click(function() {
//     $("#ans").val('/');
//   })
//
//   $(".openBracket").click(function() {
//     $("#ans").val('(');
//   })
//
//   $(".closeBracket").click(function() {
//     $("#ans").val(')');
//   })
//
//
// })
