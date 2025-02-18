//https://qiita.com/hukuryo/items/5c3e428f6620f991ade9




function GetDataFromGithub() {
  const urls = [
    "https://api.github.com/repos/83wakasug/CV2",
    "https://api.github.com/repos/83wakasug/JapaneseLarningProgram",
    "https://api.github.com/repos/83wakasug/CandyFrontend",
    "https://api.github.com/repos/83wakasug/Candy"
  ];

  let index = 0;

  urls.forEach(url => {
    
    fetch(url)
    .then(response => response.json()) 
    .then(data => {

      let projectName= index%2 ===0 ? "project1":"project2";
      getDataFromAPI(data, projectName)
   
      index++;

    })
    .catch(error => {
      console.error("Error fetching data:", error);  
    });




  });
  
}



function getDataFromAPI(data, classname) {
  const section = document.getElementById("project-section");
  
  let div = document.createElement("div");
  div.className = `project ${classname}`; 

  
  let h3 = document.createElement("h3");
  h3.className = "project_header";
  h3.textContent = data.name;

  let p = document.createElement("p");
  p.className ="project_description";
  p.innerHTML =  "Description: " + data.description + "<br>" +
  "Language: " + data.language + "<br>"
  
  let button = document.createElement("button");
  button.className = "bt-link"
  button.textContent="link";

  button.addEventListener("click", () => {
    window.location.href = data.html_url;
  });


  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);
  section.appendChild(div);
  
  
}



