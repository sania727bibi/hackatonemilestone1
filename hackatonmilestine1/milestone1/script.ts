const togglebutton =document.getElementById("toggle-skill") as HTMLButtonElement
const Skills= document.getElementById('Skills') as HTMLElement

togglebutton.addEventListener('click', ()=>  {
    if (Skills.style.display=== 'none') {
        Skills.style.display = 'block'
        
    } else {
        Skills.style.display ='none'
    }
});