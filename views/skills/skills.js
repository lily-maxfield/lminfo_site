var obj;

fetch('skills.js')
    .then(res => res.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        console.log(obj);
    });