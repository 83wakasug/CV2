function fetchData(){

  fetch("cv.json")
  .then(function (response) {

    return response.json();

  })

  .then(function(data){

    document.getElementById("profile_pic").src = data.profile_pic;
    document.getElementById("fullname").innerHTML=data.name;
    document.getElementById("curentTitle").innerHTML=data.title;
    document.getElementById("phone").innerHTML='<i class="fa-solid fa-phone"></i> '+data.contact_info.phone;
    document.getElementById("email").innerHTML='<i class="fa-solid fa-envelope"></i> '+data.contact_info.email;
    document.getElementById("address").innerHTML='<i class="fa-solid fa-house"></i> '+data.contact_info.address;

  }
)
}



