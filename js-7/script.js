let front_card
let info=''
function cartnumber(){
    let num='5423 4426 '
    for (let i=0;i<=7;i++){
        if(i===4){
            num+=" "
        }
        num+=Math.round(Math.random() * 9)
    }
    return num
}
let cart_info = [
    {
        id: 1,
        pin: 1114,
        status: true,
        try: 0,
        cartnumber: cartnumber(),
        name: "Ando",
        price: Math.round(Math.random() * 50000) + "$"
    },
    {
        id: 2,
        pin: 1113,
        status: true,
        try: 1,
        cartnumber: cartnumber(),
        name: "Artyom",
        price: Math.round(Math.random() * 50000) + "$"
    },
    {
        id: 3,
        pin: 1112,
        status: true,
        try: 1,
        cartnumber: cartnumber(),
        name: "Daniel Hambardzumyan",
        price: Math.round(Math.random() * 50000) + "$"
    },
    {
        id: 4,
        pin: 1115,
        status: true,
        try: 1,
        cartnumber: "4318 2801 0001 0492",
        name: "Mxui Asatryan",
        price: Math.round(Math.random() * 50000) + "$"
    }
]

function infoBlock() {

    let cartinfotag = document.querySelector('.cartinfo')
    cart_info.forEach(res => {
        cartinfotag.innerHTML += `
   <div class="front-card" data-fid="${res.cartnumber}">
         <h3 id="main-title">Financial | <span>Elite</span></h3>
        <i id="globe" class="fa fa-globe"></i>
        <div id="chip"></div>
        <div class="card-info">
            <p id="no">${res.cartnumber}</p>
            <p id="name">${res.name}</p>
            <p id="exp-date"><span>Expiry Date</span>: 07/22</p>
            <p id="exp-date"><span>pin</span>: ${res.pin}</p>
        </div>
        <div id="mastercard"></div>
        </div>
`
    })
    UploadCart()
}

function UploadCart(){
    front_card=document.querySelectorAll('.front-card')
    console.log(front_card)
    front_card.forEach((tag,i)=>{
        tag.addEventListener('click',FindInfo)
        function FindInfo(){
           let mtag=front_card[i]
            let cardNum
            if(mtag.dataset.fid!==''){
                cardNum=mtag.dataset.fid
                CheckCartNumber(cardNum)

            }else{
                alert("sxal")
            }
        }
    })
}

function CheckCartNumber(cardNum){


    let Find_infos= cart_info.find(res=>res.cartnumber===cardNum)

    if(!Find_infos){
        alert("Sxal tvyaler")
        return;
    }
    if(Find_infos.status){
        info=Find_infos
        WritePin()
    }else{
        alert("block")
    }


}
function WritePin(){
    let pinContainer = document.querySelector('.pinContainer')
    pinContainer.classList.toggle('d-none')
}

function Enters() {
    let pin = document.querySelector('#pin')
    console.log(pin.value)
        // .....
    if(info.pin=== +pin.value){
        info.try=0
        alert("chisht")
    }else{
        console.log("sxal")
        info.try++
        if(info.try===3){
            info.status=false
        }

    }
    console.log(info)
    WritePin()

}
