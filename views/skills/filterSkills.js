function filter() {
    var searchBar = document.getElementById("skills-search");
    var searchVal = searchBar.value;
    console.log(searchVal);
    var skillsDiv = document.getElementById("skills-list");

    var skillsDivs = skillsDiv.children;
    console.log(skillsDivs);

    for (skill of skillsDivs) {
        var textDiv = skill.querySelector('.skill-text');
        console.log(textDiv.innerHTML);
        if (searchVal.includes(textDiv.innerHTML)) {
            skill.style.visibility = 'visible';
        }
        else {
            skill.style.visibility = 'hidden';
        }
    }
}