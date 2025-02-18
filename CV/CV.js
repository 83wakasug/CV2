function fetchData(){

  fetch("cv.json")
  .then(function (response) {

    return response.json();

  }).then(function (data){

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

      forEach(edu in educationList){
        let tr = document.createElement("tr");

            createElement("duration",tr,edu.duration);
            createElement("school",tr,text);
            createElement("course",tr,edu.topics);
            createElement("topics",tr,edu.topics);
           

        let topicsCount =    data.education.topics.count;
       
        if(topicsCount >0){
          
          let ul = document.createElement("ul");
          ul.setAttribute("id","ul_topics");

          let list= edu.topics;
          
          foreach((list )=>{
              let li =createElement("li");
              li.setAttribute("id",li_topics);
              li.textContent=list.topics;
        
              ul.append(li);
      

          })



        }
      






        })

    

        


        };
      


function createElement(id,tr,text){
  let td = createElement("td");
  td.setAttribute("class",id);
  td.setAttribute("id",id);
  td.textContent=text;
  tr.append(td);

}
