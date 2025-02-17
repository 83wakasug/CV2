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

    let count = data.education.count;
    let educationList = data.education;
    
    const tbl= document.getElementById("educationList");

    /** reference att create automatik table  https://qiita.com/forever---searcher/items/7901217dc811d72687f8 */
    
    if(count >0){

      for(let x; x<count; x++){
        let tr = document.createElement("tr");

        foreach((educationList)=>{

            // how to add attribute https://www.quora.com/Can-you-create-an-element-in-JS-with-an-ID-or-a-class
        let tdDuration = createElement("td");
        tdDuration.setAttribute("class","duration");

        let tdschool = createElement("td");
        tdschool.setAttribute("class","school");

        let tdcourse = createElement("td");
        tdcourse.setAttribute("class","course");
        
        let tdtopics = createElement("td");
        tdtopics.setAttribute("class","topics");
        tdtopics.setAttribute("id","topic")

        let topicsCount =    data.education.topics.count;
       
        if(topicsList >0){
          
          let ul = document.createElement("ul");
          let list= data.education.topics;
          foreach((list )=>{
              let li =createElement("li");
              document.create


          })



        }
      






      })

    

        


      }
       
        

     


      );

    }


  }
)
}



