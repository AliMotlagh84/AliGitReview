
// var arar = "ali hassan mmd ahmad"
// var demo = document.getElementById("demo");
// var x = setInterval(read1,1000)


// function read1(){
// demo.innerHTML = new Date().toLocaleTimeString()

// }


// function read(){
//    clearInterval(x)

// }

// function goback(){
//   window.history.back()
// }

// function goforward(){
//   window.history.forward()
// }

// function anten(){
// location.assign("https://www.anten.ir/")
// }



// var blue = document.getElementsByClassName("blue")[0]  
// var orange = document.getElementsByClassName("orange")[0]  
// var green = document.getElementsByClassName("green")[0]  
// var main = document.getElementsByClassName("main")[0]
// var x;
// function bluer(){
//  x = document.styleSheets[0].cssRules[5].style.getPropertyValue("background-color")
// }
// function oranger(){
//  x = document.styleSheets[0].cssRules[4].style.getPropertyValue("background-color")
// }
// function greener(){
//  x = document.styleSheets[0].cssRules[6].style.getPropertyValue("background-color")
// }
// blue.addEventListener("click",bluer)
// green.addEventListener("click",greener)
// orange.addEventListener("click",oranger)

// main.addEventListener("click",function(){
//   main.style.backgroundColor = x;
// })

// var person = {
//     Name:"ali",
//     Family:"motlagh",
//     age:20,
//     full: function(){
//         if((this.Name==="ali" )&& (this.Family === "motlagh")){
//             alert(this.Name+" "+this.Family)
//         }
//     }
// }










var Word = document.getElementById("Word")
var Btn = document.getElementsByTagName("button")[0]
var Guess = document.querySelector("input")
var message = document.getElementById("message")
var circle = document.getElementsByClassName("div-1")[0]
var Play = false
var score = 0;
var WordArray = ["علی", "احمد", "هواپیما", "قطار", "مدرسه", "اسپانیا", "شایان", "انجمن", "برنامه"]
var j = Math.floor(Math.random() * WordArray.length)
function test() {
  circle.classList.remove("Win")
  if (Play == false) {
    score = 0
    Play = true
    Guess.classList.remove("hide")
    Btn.innerHTML = "Check"
    Make()
  }
  else {

    Check()
  }
}



function Make() {
  Btn.classList.remove("Blue")
  Btn.classList.remove("Green")
  Btn.classList.add("Red")
  var Random = WordArray[j].split("")
  for (var i = 0; i < Random.length; i++) {
    var x = Math.floor(Math.random() * Random.length)
    var temp = Random[i];
    Random[i] = Random[x]
    Random[x] = temp
    Word.innerHTML = Random.join("")

  }
}

function Check() {
  score++
  circle.innerHTML = score
  // console.log(Guess.value );
  // console.log(WordArray[j])
  if (Guess.value == WordArray[j]) {
    message.innerHTML = ""
    Word.innerHTML = "You Win After " + score + " Times" + "<br> Correct Is " + WordArray[j]
    Restart()
  } else {
    message.innerHTML = "You Lose <br> Gusses: " + score
  }
}

function Restart() {
  circle.classList.add("Win")
  Btn.classList.remove("Red")
  Btn.classList.add("Blue")
  Btn.innerHTML = "Restart"
  Play = false
  Guess.classList.add("hide")
  Guess.value = ""
  j = Math.floor(Math.random() * WordArray.length)
}





















































