var timerEl=document.getElementsByClassName("timer");


function countdown() {
  var timeLeft = 60;
  

  var timeInterval = setInterval(function(){
    if (timeLeft>1){
      timerEl.text.content = timeLeft;
      timeLeft--;
      
    }else if (timeLeft ===1){
      timerEl.text.content = timeLeft;
     timeLeft--;
    }else {
      timerEl.text.content="Out of Time";
      
      clearInterval(timeInterval);
    }
  
  },1000);
  }

 document.getElementsByName("start").addEventListener("click", countdown());