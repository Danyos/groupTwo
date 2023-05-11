let divElements=document.querySelector('.one')

// let index=0
//
// let array=['Anna','Manya',"Melanya"]
//
// divElements.innerHTML=array[index]
// divElements.addEventListener('click',function () {
//     index++
//     if(!array[index]){
//         index=0
//     }
//     divElements.innerHTML=array[index]
// })

// let obj={
//     innerHTML:......,
//     innerText:....,
// }
// let taglist=document.querySelector('.list')
// array.forEach(res=>{
//     taglist.innerHTML+=`<li>${res}</li>`
// })
// let divElementstwo=document.querySelector('.two')
//
// divElementstwo.innerHTML=divElements.innerText

// divElementstwo.addEventListener('mouseover',function (){
//     divElementstwo.style.background=randomColor()
// })


// function randomColor(){
//     function randomTwoFourFour(){
//         return Math.round(Math.random()*255)
//     }
//     return `rgb(${randomTwoFourFour()},${randomTwoFourFour()},${randomTwoFourFour()})`
// }

let name="apple"

let arr=name.split('')
arr=arr.sort(()=>0.3-Math.random())
arr=arr.join('')
console.log(arr)