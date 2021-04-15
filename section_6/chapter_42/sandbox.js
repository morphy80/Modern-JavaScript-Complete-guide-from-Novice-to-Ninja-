// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

// paras.forEach(p => {
//     console.log(p.textContent);!= (p.innerText)
// });

const title = document.querySelector('.title');

title.classList.toggle('test'); /*add that class*/
title.classList.toggle('test'); /*removes that class*/