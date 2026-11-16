let footer = document.createElement("footer");
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = "&copy; Robin Jungwirth " + thisYear;

document.body.append(footer);
footer.append(copyright);

const skills = ["JavaScript", "HTML/CSS", "Java", "Spanish", "Japanese"];

let skillsSection = document.getElementById("skills");
//query #skills section for ul instead of entire document
let skillsList = skillsSection.querySelector("ul");

skills.forEach(skill => {
    let skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.append(skillItem);
});