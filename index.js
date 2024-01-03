var n=document.querySelectorAll(".num").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".num")[i].addEventListener("click",function()
    {
         var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
function makeSound(key) {

    switch (key) {
      case "1":
        var tom1 = new Audio("./audio/Mouse-Click.mp3");
        tom1.play();
        break;
  
      case "2":
        var tom2 = new Audio("./audio/Mouse-Click.mp3");
        tom2.play();
        break;
  
      case "3":
        var tom3 = new Audio('./audio/Mouse-Click.mp3');
        tom3.play();
        break;
  
      case "4":
        var tom4 = new Audio('./audio/Mouse-Click.mp3');
        tom4.play();
        break;
  
      case "4":
        var snare = new Audio('./audio/Mouse-Click.mp3');
        snare.play();
        break;
  
      case "5":
        var crash = new Audio('./audio/Mouse-Click.mp3');
        crash.play();
        break;
  
      case "6":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "7":
          var kick = new Audio('./audio/Mouse-Click.mp3');
          kick.play();
          break;
        case "8":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "9":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "0":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "+":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "-":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "*":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "/":
        var kick = new Audio('/audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "=":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "C":
        var kick = new Audio('./audio/Mouse-Click.mp3');
        kick.play();
        break;
        case "←":
          var kick = new Audio('./audio/Mouse-Click.mp3');
          kick.play();
          break;
    
      default: console.log(key);
  
    }
  }
  
  
  function buttonAnimation(currentKey) {
  
    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  function solve(val)
  {
    var v=document.getElementById("res");
    v.value+=val;
  }
  function clr()
  {
    var i=document.getElementById("res");
    i.value=" ";
  }
  function result()
  {
    var n1=document.getElementById("res").value;
    var n2=eval(n1);
    document.getElementById("res").value=n2;
  }
  function back()
  {
    var ev=document.getElementById("res");
    ev.value=ev.value.slice(0,-1);
  }