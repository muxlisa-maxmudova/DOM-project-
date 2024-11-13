const button = document.querySelector('.btn');
function subscribe() {
    if (button.innerHTML === 'Subscribe') {
        button.innerHTML = 'Subscribed'

    } else {
        button.innerHTML = 'Subscribe'
    }
}
        button.addEventListener('click', subscribe)
let i = 0;
const stopBtn = (e) =>{
     i++
    if(i === 5){
         button.removeEventListener('click',stopBtn)
         button.style.display = 'none'
     }
    console.log(i)
}

 button.addEventListener('click',stopBtn)







