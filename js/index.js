//create footer
let footer = document.createElement("footer");
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = "&copy; Robin Jungwirth " + thisYear;

document.body.append(footer);
footer.append(copyright);

//create skills section
const skills = ["JavaScript", "HTML/CSS", "Java", "Spanish", "Japanese"];

let skillsSection = document.getElementById("skills");
//query #skills section for ul instead of entire document
let skillsList = skillsSection.querySelector("ul");

/*skills.forEach(skill => {
    let skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.append(skillItem);
});
*/
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

//message form submission
let messageForm = document.forms["leave_message"];

/*display username with mailto link and their message, then reset form inputs */
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log(`name: ${name}\nemail: ${email}\nmessage: ${message}`);
    
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<p>From <a href="mailto:${email}">${name}</a>:
        <span>"${message}"</span></p>`;

    //create remove button functionality
    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    
    removeButton.addEventListener("click", function() { 
        let entry = removeButton.parentNode;
        entry.remove();
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    
    messageForm.reset();
});


