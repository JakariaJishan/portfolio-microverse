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

// projects
let projectsArr = [
  {
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: "images/works.png",
    technologies: ["html", "bootstrap", "ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
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

  let background = document.createElement("div");
  background.className = "project-background";
  projects.appendChild(background);

  let foreground = document.createElement("div");
  foreground.className = "project-foreground";
  background.appendChild(foreground);

  let content = document.createElement("div");
  content.className = "projects-content";
  foreground.appendChild(content);

  let h3 = document.createElement("h3");
  h3.innerHTML = element.name;
  content.appendChild(h3);
  let p = document.createElement("p");
  p.innerHTML = element.desc;
  content.appendChild(p);

  let projectKeyword = document.createElement("div");
  projectKeyword.className = "project-keyword";
  content.appendChild(projectKeyword);

  let ul = document.createElement("ul");
  projectKeyword.appendChild(ul);

  for (let j = 0; j < element.technologies.length; j++) {
    const element2 = element.technologies[j];
    let li = document.createElement("li");
    li.innerHTML += `<a href="#">` + element2 + `</a>`;
    ul.appendChild(li);
  }

  let cardBtn = document.createElement("button");
  cardBtn.className = "card-btn";
  cardBtn.setAttribute("type", "submit");
  cardBtn.innerHTML = "See Projects";
  foreground.appendChild(cardBtn);

  cardBtn.addEventListener("click", () => {
    let popup = document.querySelector(".popup-content");
    popup.style.display = "block";
  });
  let cancle = document.querySelector(".cancle");
  cancle.addEventListener('click', ()=>{
    let popup = document.querySelector(".popup-content");
    popup.style.display = "none";
  })
}
