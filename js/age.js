// ----- Variables -----
var getName;
var getDay;
var getMonth;
var getYear;

//----- functions -----
const printResult = () => {
  getName = document.getElementById("name").value;
  getDay = document.getElementById("day").value;
  getMonth = document.getElementById("month").value;
  getYear = document.getElementById("year").value;

  var date = new Date();

  var printYear;
  var printMonth;
  var printDay;

  var presYear = date.getFullYear();
  var presMonth = date.getMonth()+1; // starts from 0
  var presDay = date.getDate();

  if(presMonth == getMonth)
  {
      if(presMonth==1 || presMonth==3 || presMonth==5 || presMonth==7 || presMonth==8 || presMonth==10 || presMonth==12)
      {
        if(getDay > presDay)
        {
          printDay = 31 - (getDay - presDay);
          printMonth = 11;
          printYear = presYear - getYear-1;
        }

        else if(presDay > getDay)
        {
          printDay =presDay - getDay;
          printMonth = 0;
          printYear = presYear - getYear;
        }

        else
        {
          printDay = 0;
          printMonth = 0;
          printYear = presYear - getYear;
        }
      }
      else if(presMonth==2)
      {
        if(getDay > presDay)
        {
          printDay =28 - (getDay - presDay);
          printMonth = 11;
          printYear = presYear - getYear-1;
        }

        else if(presDay > getDay)
        {
          printDay =presDay - getDay;
          printMonth = 0;
          printYear = presYear - getYear;
        }

        else
        {
          printDay = 0;
          printMonth = 0;
          printYear = presYear - getYear;
        }
      }
      else
      {
        if(getDay > presDay)
        {
          printDay =30 - (getDay - presDay);
          printMonth = 11;
          printYear = presYear - getYear-1;
        }

        else if(presDay > getDay)
        {
          printDay = presDay - getDay;
          printMonth = 0;
          printYear = presYear - getYear;
        }

        else
        {
          printDay = 0;
          printMonth = 0;
          printYear = presYear - getYear;
        }
      }
    }
    else if(presMonth < getMonth)
    {

      printYear = presYear - getYear - 1

    if(presMonth==1 || presMonth==3 || presMonth==5 || presMonth==7 || presMonth==8 || presMonth==10 || presMonth==12)
    {
      if(getDay > presDay)
      {
        printDay = 31 - (getDay - presDay);
        printMonth = 12 - (getMonth - presMonth + 1);
      }

      else if(presDay > getDay)
      {
        printDay = presDay - getDay;
        printMonth = 12 - (getMonth - presMonth);
      }

      else
      {
        printDay = 0;
        printMonth = 12 - (getMonth - presMonth);
      }
    }

    else if(presMonth==2)
    {
      if(getDay > presDay)
      {
        printDay = 28 - (getDay - presDay);
        printMonth = 12 - (getMonth - presMonth + 1);
      }

      else if(presDay > getDay)
      {
        printDay = presDay - getDay;
        printMonth = 12 - (getMonth - presMonth);
      }

      else
      {
        printDay = 0;
        printMonth  = 12 - (getMonth - presMonth);
      }
    }

    else
    {
      if(getDay > presDay)
      {
        printDay = 30 - (getDay - presDay);
        printMonth  = 12 - (getMonth - presMonth + 1);
      }

      else if(presDay > getDay)
      {
        printDay = presDay - getDay;
        printMonth = 12 - (getMonth - presMonth);
      }

      else
      {
        printDay = 0;
        printMonth  = 12 - (getMonth - presMonth);
      }
    }

    }
    else if(getMonth < presMonth)
    {
        printYear = presYear - getYear;

    if(presMonth==1 || presMonth==3 || presMonth==5 || presMonth==7 || presMonth==8 || presMonth==10 || presMonth==12)
    {
      if(getDay > presDay)
      {
        printDay = 31 - (getDay - presDay);
        printMonth = presMonth - getMonth  - 1;
      }

      else if(presDay > getDay)
      {
        printDay = presDay - getDay;
        printMonth = presMonth - getMonth;
      }

      else
      {
        printDay = 0;
        printMonth = 0;
      }
    }

    else if(presMonth==2)
    {
      if(getDay > presDay)
      {
        printDay =28 - (getDay - presDay);
        printMonth = presMonth - getMonth  - 1;
      }

      else if(presDay > getDay)
      {
        printDay =presDay - getDay;
        printMonth = presMonth - getMonth;
      }

      else
      {
        printDay = 0;
        printMonth = 0;
      }
    }

    else
    {
      if(getDay > presDay)
      {
        printDay =30 - (getDay - presDay);
        printMonth = presMonth - getMonth  - 1;
      }

      else if(presDay > getDay)
      {
        printDay = presDay - getDay;
        printMonth = presMonth - getMonth;
      }

      else
      {
        printDay = 0;
        printMonth = 0;
      }
    }
  }

  if((getName === "") || (getDay === "") || (getMonth === "") || (getYear === "")) {
    document.getElementById("resultValue").value = "";
    document.getElementById("resultValue2").value = "";
    document.getElementById("resultValue3").value = "";
  } else if((getDay == presDay.toString()) && (getMonth == presMonth.toString())) {
    return (
    document.getElementById("resultValue").value =
    "Hmm? It seems like today's your birthday",
    document.getElementById("resultValue2").value =
    "Happy Birthday " + getName + "! You are " + printYear + " year(s) old today!",
    document.getElementById("resultValue3").value =
    "Have a great day today!"
    )
  } else {
      return (
      document.getElementById("resultValue").value =
      "Hey " + getName + ",",
      document.getElementById("resultValue2").value =
      "You are " + printYear + " year(s), " + printMonth + " month(s) and " + printDay + " day(s) old",
      document.getElementById("resultValue3").value =
      "Enjoy your day!"
    );

  }


}

const resetResult = () => {
  document.getElementById("name").value = "";
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";

  document.getElementById("resultValue").value = "";
  document.getElementById("resultValue2").value = "";
  document.getElementById("resultValue3").value = "";
}