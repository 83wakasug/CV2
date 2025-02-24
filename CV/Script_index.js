//reference how to connect to APIhttps://qiita.com/hukuryo/items/5c3e428f6620f991ade9

//ref : if wants to connect with github token https://note.com/pisuke2525/n/n00dc1a20efd3


function GetDataFromGithub() {
  const urls = [
    "https://api.github.com/repos/83wakasug/CV2",
    "https://api.github.com/repos/83wakasug/JapaneseLarningProgram",
    "https://api.github.com/repos/83wakasug/CandyFrontend",
    "https://api.github.com/repos/83wakasug/Candy"
  ];

  let index = 0;

  urls.forEach(url => {

    let projectName= index%2 ===0 ? "project1":"project2";
    let div = document.createElement("div");
    //loading 
    div.setAttribute("id","loading");
    div.innerHTML = '<img src="img/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="Computer man" style="width:48px;height:48px;">';

    div.className = `project ${projectName}`; 
    index++;
    const section = document.getElementById("project-section");
    section.appendChild(div);


    
    fetch(url)
    .then(response => response.json()) 
    .then(data => {

      //if index can devide with 2 assign class project1 otherwise assign project2;

     
      getDataFromAPI(data,div)
   

    })//reference https://note.com/gorojy/n/n2b7e5ea81fd8 add catch after fetch
    .catch(error => {
      console.error("Error fetching data:", error);  
    });





  });
  
}



function getDataFromAPI(data, div) {
  


  
  //create div
  // let div = document.createElement("div");
  // div.className = `project ${classname}`; 

  //create h3 and assing classname and add text

   //remove loading
  div.innerHTML = "";

  let h3 = document.createElement("h3");
  h3.className = "project_header";
  h3.textContent = data.name;


   //create p and assing classname and add html
  let p = document.createElement("p");
  p.className ="project_description";
  p.innerHTML = "<br>" +data.description + "<br>" +"<br>" +
  "Language: " + data.language + "<br>"
  
  //create button and text
  let button = document.createElement("button");
  button.className = "bt-link"
  button.textContent="link";

  button.addEventListener("click", () => {
    window.location.href = data.html_url;
  });


  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);
  
  
  
}


function hideLoader() {
  const loader = document.getElementById("loading");
  if (loader) {
    loader.style.display = "none";
  }
}
