// let arr = []
//
// let person = {
//     try: "jone",
//     country: "bali",
// }
let cart_info=  [
        {
            id: 1,
            pin: 1111,
            status:true,
            try: 0,
            cartnumber:""+Math.round(Math.random()*50000)+""+Math.round(Math.random()*50000),
            name: "Ando",
            price: Math.round(Math.random()*50000)+"$"
        },
        {
            id: 2,
            pin: 1111,
            status:true,
            try: 1,
            cartnumber:""+Math.round(Math.random()*50000)+""+Math.round(Math.random()*50000),
            name: "Artyom",
            price: Math.round(Math.random()*50000)+"$"
        },
        {
            id: 3,
            pin: 1111,
            status:true,
            try: 1,
            cartnumber:""+Math.round(Math.random()*50000)+""+Math.round(Math.random()*50000),
            name: "Daniel",
            price: Math.round(Math.random()*50000)+"$"
        }
    ]
console.table(cart_info)
