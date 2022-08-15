const checkbox = document.querySelector('.toggle');
const  main = document.querySelector('main');

const check =(checkbox) =>{
   checkbox.checked? document.body.style.backgroundColor ='black':
   document.body.style.backgroundColor = 'var(--primary)';
}
