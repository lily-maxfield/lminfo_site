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
            /*Creating new parent "newDiv" and child divs "textDiv"
             *and "ratingDiv" to hold skill information*/
            newDiv = document.createElement("div");
            textDiv = document.createElement("div");
            ratingDiv = document.createElement("div");

            /*Populating skill div information*/
            textDiv.classList.add("skill-text");
            textDiv.innerHTML = skill;

            ratingDiv.classList.add("skill-rating");
            ratingDiv.innerHTML = skillsObj.skills[skill];

            newDiv.classList.add("skill-bubble");
            newDiv.appendChild(textDiv);
            newDiv.appendChild(ratingDiv);

            /*Adding this div to the placeholder skills list div*/
            skillsDiv.appendChild(newDiv);
        }
    });