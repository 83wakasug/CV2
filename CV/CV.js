function fetchData() {
  fetch("cv.json")
    .then(response => response.json())
    .then(data => {
      // set up data for profile
      document.getElementById("profile_pic").src = data.profile_pic;
      document.getElementById("fullname").innerHTML = data.name;
      document.getElementById("curentTitle").innerHTML = data.title;
      document.getElementById("phone").innerHTML =
        '<i class="fa-solid fa-phone"></i> ' + data.contact_info.phone;
      document.getElementById("email").innerHTML =
        '<i class="fa-solid fa-envelope"></i> ' + data.contact_info.email;
      document.getElementById("address").innerHTML =
        '<i class="fa-solid fa-house"></i> ' + data.contact_info.address;


      //set Education information
      // get Education List 
      let educationList = data.education;
      const tbl = document.getElementById("tb_education");

      /** reference att create table  
       * https://qiita.com/forever---searcher/items/7901217dc811d72687f8 
       * https://qiita.com/forever---searcher/items/7caf122d1b78bd70ebec
       * https://tcd-theme.com/2022/07/javascript-dom-textcontent.html
       */
      if (educationList.length > 0) {
        educationList.forEach(edu => {
          let tr = document.createElement("tr");

          createtd(tr, edu.duration);
          createtd(tr, edu.school);
          createtd(tr, edu.course);

          let tdTopics = document.createElement("td");
       

          //  add topic lista
          if (edu.topics && edu.topics.length > 0) {
            let ul = document.createElement("ul");

            edu.topics.forEach(topic => {
              let li = document.createElement("li");
              li.textContent = topic;
              ul.appendChild(li);
            });

            tdTopics.appendChild(ul);
          }

          tr.appendChild(tdTopics);
          tbl.appendChild(tr);
        });
      }

      //set Work Experience
      const workExList= data.work_experience;
      const tb_work =document.getElementById("tb_work");
      
      workExList.forEach(work=>{
       const tr_work = document.createElement("tr");
       createtd(tr_work,work.duration);
       createtd(tr_work,work.company);
       createtd(tr_work,work.title);
       let tdResp = document.createElement("td");
      
       
       if(work.responsibilities.length>0){
        let workul=document.createElement("ul")
        work.responsibilities.forEach(res =>{
        
          let work_li = document.createElement("li");
          work_li.textContent = res;
          workul.appendChild(work_li);

        });

        tdResp.appendChild(workul);
       }
        tr_work.appendChild(tdResp);
        tb_work.append(tr_work);


      })





    }) //reference https://zenn.dev/junki555/articles/4ab67fc78ce64c
    .catch(error => console.error("Error fetching data:", error));
}

// function for create table
function createtd(tr, text) {
  let td = document.createElement("td");
  td.textContent = text;
  tr.appendChild(td);
}
