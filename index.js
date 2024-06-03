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

document.querySelectorAll('.num').forEach(item => {
  item.addEventListener('click', event => {
    const audio = new Audio('click.wav');
    audio.play();
  })
});