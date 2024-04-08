var skillsObj;

fetch('skills.json')
    .then(res => res.json())
    .then(data => {
        skillsObj = data;
    })
    .then(() => {
        console.log(skillsObj);
    })
    .then(() => {
        const skillsDiv = document.getElementById("skills-list");

        for (skill in skillsObj.skills) {
            console.log(skill);
            divRef = document.createElement("div");
            divRef.innerHTML = skill;
            divRef.classList.add("skill-bubble");
            skillsDiv.appendChild(divRef);
        }
    });