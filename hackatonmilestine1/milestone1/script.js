var togglebutton = document.getElementById("toggle-skill");
var Skills = document.getElementById('Skills');
togglebutton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
