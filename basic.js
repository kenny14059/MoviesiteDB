const checkbox = document.querySelector('.toggle');
const  main = document.querySelector('main');

function check(checkbox){
    if(checkbox.checked){
       document.body.style.backgroundColor ='black';
        
    }
    else{
       document.body.style.backgroundColor = 'var(--primary)';
        
    }
}

/*advanced dropdown*/

document.addEventListener('click',e=>{
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if(!isDropdownButton && e.target.closest('[data-dropdown]') !=null)
    return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown === currentDropdown)
        return;
        dropdown.classList.remove('active');
    });
})