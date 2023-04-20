let mainfeature=document.querySelector('.mainfeature')

let st=[]
let games_feature=[
    {
    id:1,
    title:"Qar",
    win:3,
},   {
    id:2,
    title:"Tuxt",
    win:1,
},{
    id:3,
    title:"mkrat",
    win:2,
},{
    id:4,
    title:"Perferator",
    win:1,
},

]
games_feature.forEach((res,i)=>{
    let a=`<button class="feature" data-id="${i}">${res.title}</button>`
    mainfeature.insertAdjacentHTML('beforeend',a)
})
let feature=document.querySelectorAll('.feature')

function animateShakeY(num){
    console.log(st)
    if(st[0]){
        clearTimeout(st[0])
        clearTimeout(st[1])
    }
    let shakeY = document.querySelectorAll(".derq");
    let random_index=Math.floor(Math.random()*games_feature.length)
    shakeY.forEach((tag,i)=>{


        tag.classList.add("animate__shakeY");
        tag.innerHTML=games_feature[0].title
       st[i]= setTimeout(function(){


            tag.classList.remove("animate__shakeY");
           if(i){
               tag.innerHTML=games_feature[num].title
               winner(random_index,num)
           }else{
               tag.innerHTML=games_feature[random_index].title
           }

        }, 2000);
    })


}

feature.forEach(tag => {
    tag.addEventListener('click', (e) => {
        let id=e.target.dataset.id

        animateShakeY(id)
    })
})
function winner(random_index,m_id){

    if(games_feature[random_index].id === games_feature[m_id].id ){
        console.log("nicha")
    }else if(games_feature[random_index].win===games_feature[m_id].id ){
        console.log("computry")
    }else if(games_feature[m_id].win===games_feature[random_index].id ){
        console.log("haxtec mardy")
    }

}
