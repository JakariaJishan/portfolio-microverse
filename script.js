const hamburger = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const crossBtn = document.querySelector(".cross-btn");
const mobileItems = document.querySelectorAll(".mobile-item");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

crossBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

for (let i = 0; i < mobileItems.length; i += 1) {
  const element = mobileItems[i];
  element.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
}

// projects-recent work
let workproject = {
  id: '_1',
  name: "Multi-Post Stories",
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
  featuredImg: "./images/works.png",
  technologies: ["html","css", "bootstrap", "ruby"],
  liveLink: "#",
  sourceLink: "#",
};
document.querySelector(".works").innerHTML += `<div class="recent-work">
<h2>${workproject.name}</h2>
<div class="line-light"></div>
</div>

<div class="multi-post">
<img src="${workproject.featuredImg}" alt="Multi-Post Stories project image">
<div class="multi-post-content">
    <h3>${workproject.name}</h3>
    <p>${workproject.desc}
    </p>
    <div class="keywords">
        <ul>
            <li>
                <a href="#">${workproject.technologies[0]}</a>
            </li>
            <li>
            <a href="#">${workproject.technologies[1]}</a>
            </li>
            <li>
            <a href="#">${workproject.technologies[2]}</a>
            </li>
            <li>
            <a href="#">${workproject.technologies[3]}</a>
            </li>
        </ul>
    </div>
    <button type="submit" class="primary-btn">See Project</button>
</div>
</div>`;

document.querySelector('.primary-btn').addEventListener('click', ()=>{
  let popup = document.querySelector(".popup");
  popup.style.display = "block";
  popup.innerHTML = ''
  getPopupId(workproject.id)
})

// projects...
let projectsArr = [
  {
    id: "_1",
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "_2",
    name: "Profesional Art Printing Data2",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/projects-2.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "_3",
    name: "Keeping track of hundreds  of components website",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "_4",
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "_5",
    name: "Keeping track of hundreds  of components website",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "_6",
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
];

for (let i = 0; i < projectsArr.length; i++) {
  const element = projectsArr[i];
  let projects = document.getElementById("projects");
  projects.innerHTML += `<div class="project-background">
  <div class="project-foreground">
      <div class="projects-content" id="project-content">
          <h3>${element.name}</h3>
          <p>${element.desc}</p>
      </div>

      <div class="project-keyword">
          <ul>

              <li>
                  <a href="#">${element.technologies[0]}</a>
              </li>
              <li>
                  <a href="#">${element.technologies[1]}</a>
              </li>
              <li>
                  <a href="#">${element.technologies[2]}</a>
              </li>
          </ul>
      </div>
      <button type="submit" class="card-btn" id="card${element.id}">See Project</button>
  </div>
</div>`;
}

for (let i = 0; i < projectsArr.length; i++) {
  let cardBtn = document.querySelector("#card" + projectsArr[i].id);
  cardBtn.addEventListener("click", () => {
    let popup = document.querySelector(".popup");
    popup.style.display = "block";
    popup.innerHTML = "";
    getPopupId(projectsArr[i].id);
  });
}

// popup window

function getPopupId(id) {
  console.log(id);
  for (let j = 0; j < projectsArr.length; j++) {
    if (projectsArr[j].id === id) {
      let popupWindow = document.getElementById("popup");
      popupWindow.innerHTML += `<div class="popup-content">
          <div class="popup-header">
              <h2>${projectsArr[j].name}</h2>
              <button class="cancle" id="cancle${projectsArr[j].id}"><img src="./images/Icon - Cancel.png" alt="cancle icon"></button>
          </div>
          <ul>
              <li>
                  <a href="#">${projectsArr[j].technologies[0]}</a>
              </li>
              <li>
                  <a href="#">${projectsArr[j].technologies[1]}</a>
              </li>
              <li>
                  <a href="#">${projectsArr[j].technologies[2]}</a>
              </li>
          </ul>
          <div class="popup-footer">
              <img class="popup-img" src="${projectsArr[j].featuredImg}" alt="">
              <div class="footer-content">
                  <p>${projectsArr[j].desc}</p>
                  <div class="popup-btn">
                      <a href="${projectsArr[j].liveLink}">See live <img src="./images/live.png" alt=""></a>
                      <a href="${projectsArr[j].sourceLink}">See source <img src="./images/Icon -GitHub.png" alt=""></a>
                  </div>
              </div>
          
          </div>
          </div>`;
    }
  }
  let canclex = document.querySelector("#cancle" + id);
  canclex.addEventListener("click", () => {
    let popup = document.querySelector(".popup");
    popup.style.display = "none";
    console.log("cancle");
  });
}
