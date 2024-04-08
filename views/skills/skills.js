var skills;

fetch('skills.json')
    .then(res => res.json())
    .then(data => {
        skills = data;
    })
    .then(() => {
        console.log(skills);
    });

const skillsDiv = document.getElementById("skills-list");

for (skill in skills) {
    const divRef = document.createElement("div");
    divRef.setAttribute("name", skill);
    skillsDiv.appendChild(divRef);

}