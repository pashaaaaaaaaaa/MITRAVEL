const names = [
    {
    name:'миша',
    lastname:'шестаков'
    },
    {
    name:'111',
    lastname:'2222'
    },
    {
    name:'hello',
    lastname:'world'
    }
]
// let fullName= "";
// let newArray = names.map(()=>{
// //     if(index === 2){
// //   return item.name +' '+ item.lastname
// //     }
//     return 
// })
// console.log(newArray)

const arr = [
    {
    active:true,
    time:10
    },
    {
    active:false,
    time:-20
    },
    {
    active:true,
    time:30
    },
    {
    active:false,
    time:-40
    }
]
// const newArray = arr.map(element => {
//     if(element.active === true){
//         return `пользователь активен ${element.time} минут`
//     }else{
//         return `Пользователь оффлайн `
//     }
// })
// console.log(newArray)

// const newArr = arr.forEach((item,index) =>{
//     if(index === 2){
//      console.log(item)
//     }
// })
// console.log(newArr)


arr.sort((oneElement, twoElement)=>{
    if(oneElement.active > twoElement.active){
        return -1
    }else{
        return 1
    }
})
console.log(arr)