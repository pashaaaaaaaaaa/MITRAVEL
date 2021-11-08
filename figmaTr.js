let video = document.querySelector('.video')
console.log(video)

video.addEventListener('mouseover', ()=>{
    // video.src = 'img/play.svg'
    // video.style.width = "40px"
    // video.style.height = "40px"
})
video.addEventListener('mouseout',()=>{
    // video.src = 'img/imgOne.svg'
})
let btnOne = document.querySelector('.btnOne')

btnOne.addEventListener('mouseover',()=>{
    btnOne.style.color = 'black'
    btnOne.style.fontSize = '16px'
})
btnOne.addEventListener('mouseout',()=>{
    btnOne.style.color = 'white'
})


let userInfo = document.querySelector('.user')
let userBtn = document.querySelector('.sign')

userBtn.addEventListener('click', ()=>{
    userInfo.style.height = "0px"
    userInfo.style.display = "block"
    setTimeout(()=> {
        userInfo.style.marginBottom = "300px"

    }, 0)
})  

// работа метода меп
Array.prototype.map = function(calback){
    for(let i = 0 ; i < this.length; i++){
        arr.push(calback(this[i],i))
    }
}



function uptadeArray(array){
    const arr =  array.map((element, index)=>{
        if(element < 0 ){
            return element * -1;
        }else{
            return element * 2
        }
    })
    console.log(newArray)
    return arr
}
// const newArray = uptadeArray(1,10,-2,-4, 5)
// console.log(newArray)


