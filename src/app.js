class Card {
  constructor(name, number, lastMonth, lastYear, cvc) {
    this.name = name;
    this.number = number;
    this.lastMonth = lastMonth;
    this.lastYear = lastYear;
    this.cvc = cvc;
  }

    isDateCorrect(month,year){
      console.log(month);
      console.log(year);
      const today= new Date();
      if(year>today.getFullYear()){
        return true;
      }
      else if(year=today.getFullYear() && month>=today.getMonth()+1){
              return true;
      }
      else {return false;}
    }
   isNameEmpty(){
    if(this.name!=null){
      return false;
    } 
  else{
    return true;
  } 
  
    }
    isNumberEmpty(){
      if(this.number!=null){
        return false;
      } 
    else{
      return true;
    } 
    
      }

      isMonthEmpty(){
        if(this.month!=null){
          return false;
        } 
      else{
        return true;
      } 
      
        }
        isYearEmpty(){
          if(this.year!=null){
            return false;
          } 
        else{
          return true;
        } 
        
          }

      isCvcEmpty(){
        if(this.cvc!=null){
          return false;
        } 
      else{
        return true;
      } 
      
        }
 
}

const name = document.getElementById("name");
const number = document.getElementById("number");
const lastMonth = document.getElementById("sel1");
const lastYear = document.getElementById("sel2");
const cvc = document.getElementById("cvc");

const name2 = document.getElementById("text1");
const number2 = document.getElementById("text2");
const lastDate = document.getElementById("text3");
const cvc2 = document.getElementById("text4");

const img1 = document.getElementById("img2");
const img2 = document.getElementById("img3");

const btn= document.getElementById("btn1");

img1.style.visibility="hidden";
img2.style.visibility="hidden";
/* const currentDate= new Date();
lastMonth.value=currentDate.getMonth(); */




 btn.addEventListener("submit", send);

function send(){
  

    if(isNameEmpty==false && isNumberEmpty==false && isMonthEmpty==false && isYearEmpty==false && isCvcEmpty==false )
    {
     
    }

} 

name.addEventListener("keyup", function () {
  var card = new Card(
    name.value,
    number.value,
    lastMonth.value,
    lastYear.value,
    cvc.value
  );
  name2.innerHTML = card.name;
});

number.addEventListener("keyup", function () {
  var card = new Card(
    name.value,
    number.value,
    lastMonth.value,
    lastYear.value,
    cvc.value
  );
  number2.innerHTML = card.number;
  let firstNumber = card.number[0];
  console.log(firstNumber);

  if (firstNumber == "4") {
      
    img1.style.visibility="visible";

    img2.style.visibility="hidden";
  } else if (firstNumber == "5") {
    img2.style.visibility="visible";

    img1.style.visibility="hidden";
   
  }
});
lastMonth.addEventListener("blur", function () {
  var card = new Card(
    name.value,
    number.value,
    lastMonth.value,
    lastYear.value,
    cvc.value
  );
  if(card.isDateCorrect(lastMonth.value,lastYear.value)===true){
    lastDate.innerHTML = lastMonth.value + "/" + lastYear.value;
  }
  else{
    alert("son kullanım tarihi geçmiş");
  }
  
});
lastYear.addEventListener("onBlur", function () {
  var card = new Card(
    name.value,
    number.value,
    lastMonth.value,
    lastYear.value,
    cvc.value
  );
  if(card.isDateCorrect(lastMonth.value,lastYear.value)===true){
    lastDate.innerHTML = lastMonth.value + "/" + lastYear.value;
  }
  else{
    alert("son kullanım tarihi geçmiş");
  }
});
cvc.addEventListener("keyup", function () {
  var card = new Card(
    name.value,
    number.value,
    lastMonth.value,
    lastYear.value,
    cvc.value
  );
  cvc2.innerHTML = card.cvc;
});
