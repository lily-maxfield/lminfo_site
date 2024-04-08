var skills;

fetch('skills.json')
    .then(res => res.json())
    .then(data => {
        skills = data;
    })
    .then(() => {
        console.log(obj);
    });

const skillsDiv = document.getElementById("skills-div");

for (skill in skills) {
    const divRef = document.createElement("div");
    divRef.setAttribute("name", skill);
    skillsDiv.appendChild(divRef);
    
}