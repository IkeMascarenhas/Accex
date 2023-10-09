const stars = [...document.querySelectorAll('.stars i')]
// console.log(stars)

stars.map((star, index1)=>{
    star.addEventListener('click', ()=>{
    var rating = (index1+1)
    stars.map((star, index2)=>{
        console.log('index 1: ' + index1, 'index 2: ' + index2)
        if(index1 >= index2){
            star.classList.add("active")
        }else{
            star.classList.remove("active")
        }
        // index1 >= index2 ? star.classList.add("active") :star.classList.remove("active")
        // console.log(index1 >= index2)
    })

    })
})