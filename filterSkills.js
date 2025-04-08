function filter() {
    var searchBar = document.getElementById("skills-search");
    var searchVal = searchBar.value.toLowerCase();
    var skillsDiv = document.getElementById("skills-list");

    var skillsDivs = skillsDiv.children;

    for (skill of skillsDivs) {
        var skillText = skill.querySelector('.skill-text').innerHTML.toLowerCase();
        if (skillText.includes(searchVal)) {
            skill.style.display = 'block';
        } else {
            skill.style.display = 'none';
        }
    }
}