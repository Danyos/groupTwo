// ktrel texty  . ic  ket .  (1 in ketic 2rd ket)
// let str='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque in necessitatibus nihil.
// pariatur totam voluptatibus! Ad debitis ducimus ex facilis harum nam, nobis possimus, quo, quod reiciendis
// voluptas voluptatum!\n  '
// let first=str.indexOf('.')
// let secund=str.indexOf('.',first+1)
// let str2=str.slice(first+1,secund)
// console.log(str2)

// 2. inchpes karox enq hanel texti skzbi u verji space
// let text=prompt('df')
// console.log(text.trim())

// 3. greq voronvox bary  ete ka asi true ete che false
// let str='Lorem ipsum dolor sit amet, consectetur adipisicing elit'

// let serachtext=prompt('greq voronvox bary')
//
// let res=str.toUpperCase().includes(serachtext.toUpperCase())
// console.log(res)



let str="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut deleniti dolores eum in necessitatibus nesciunt odio, praesentium reiciendis reprehenderit! Adipisci explicabo harum mollitia necessitatibus officia possimus praesentium quae repudiandae.\n" 
  let mytextDebug=true
function mypageshow(){
    let textTag=document.querySelector('.text')
    let info_btn=document.querySelector('.info_btn')
    textTag.innerHTML=mytextDebug?str.slice(0,10):str;
    info_btn.innerHTML=mytextDebug?"More":"Hide";
    mytextDebug=!mytextDebug
}
mypageshow()

// function mytext(arg){
//    return arg.trim().toUpperCase()
// }
//
// console.log(mytext(str))
//
//
// console.log(mytext("onsectetur adipisicing elit. Aperiam atque in"))











