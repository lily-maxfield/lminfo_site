var searchBar = document.getElementById("skills-search");
var searchVal = searchBar.value;
var skillsDiv = document.getElementById("skills-list");

var skillsDivs = skillsDiv.children();

for (skill in skillsDivs) {
    var textDiv = skill.getElementById("skill-text");
    if (searchVal.includes(textDiv.innerHTML)) {
        skill.style.visibility = 'visible';
    }
    else {
        skill.style.visibility = 'hidden';
    }
}