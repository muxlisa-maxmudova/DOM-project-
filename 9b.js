const btn = document.querySelector('.btn')
function press(){
    if(btn.innerHTML==='9a'){
        btn.innerHTML = '9b is done'
    }
    //else{btn.innerHTML = '9a'}
}
btn.addEventListener('click', press)
