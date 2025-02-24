document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); 

  let firstName = document.getElementById("input_fname").value;
  let lastName = document.getElementById("input_lname").value;
  let message = document.getElementById("input_message").value;

  let div_warning = document.getElementById("warning");

 
  div_warning.innerHTML = "";


  if (firstName === "" || lastName === "" || message === "") {
    div_warning.innerHTML="<p class = 'warning'>Please input all fields</p>";
  }
});


//reference https://qiita.com/ohtsuka-shota/items/a5a3fcedc7734879e2bd


