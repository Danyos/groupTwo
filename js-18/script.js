let games_feature = [
    {
        id: 1,
        title: "Qar",
        win: 3,
    }, {
        id: 2,
        title: "Tuxt",
        win: 1,
    }, {
        id: 3,
        title: "mkrat",
        win: 2,
    }, {
        id: 4,
        title: "Perferator",
        win: 1,
    }
]
// setTimeout(function() {
//     console.log("Barev Daniel jan")
// }, 0)
// let p=new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log(games_feature[0].title)
//
//     }, 0)
// })
// function a(feature,time=1000){
//
//     setTimeout(function() {
//        return feature("Barev Daniel jan")
// }, time)
//
// }
//
// a(function (arg){
//
//     console.log(arg)
// },2000)


// let p=new Promise(function (resolve,reject){
//     setTimeout(function () {
//         reject("Barev Daniel jan")
//     }, 1000)
// })
// p.then(function(res){
//     console.log(res)
// }).catch(err=>{
//     console.log('err',err)
// })


// for (let i = 0; i <5000;i++){
//     console.log(i)
// }

// async function getinfo(){
//     try {
//         const rensponse= await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data=await rensponse.json()
//         setTimeout(()=>{
//             console.log(data)
//         },2000)
//
//     }catch (e) {
//         console.log(e)
//     }
// }
// getinfo()





//
// let myobj={
//     async getInfo(){
//         try {
//             const rensponse= await fetch('https://jsonplaceholder.typicode.com/todos')
//             const data=await rensponse.json()
//             await new Promise(function (resolve,reject){
//                 setTimeout(()=>{
//                     console.log(data)
//                     reject()
//                 },2000)
//             })
//
//
//         }catch (e) {
//             console.log(e)
//         }
//     }
// }
// myobj.getInfo()




// const delay=(ms)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(reject,ms)
//     })
// }
// delay(2000).then(()=>{
//     console.log("jamanaky avartvec")
// }).catch(err=>{
//     console.log("chskavac avartvec")
// })


fetch('https://jsonplaceholder.typicode.com/todos').then(res=>{

   if(!res.ok){
       throw new Error("Request failed with status "+res.status)
   }
   return res.json()
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

let obj={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   userinfo:{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
}