const boxs = document.querySelectorAll('.box')

boxs.forEach(e =>{
    e.addEventListener('click', ()=>{
        DiminuirOutros()
        e.classList.add('active')
    })
})

function DiminuirOutros(){
    boxs.forEach(e=>{
        e.classList.remove('active')
    })
    
}