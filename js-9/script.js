// let x=7
// let y= 5

// x=y+x //12
// y=x-y //7
// x=x-y //5
// const [a,b]=[x,y] //Destructuring
// x=b
// y=a

// sessionStorage['x']=7
// localStorage['y']=100


// let info=[
//     {
//         id:1,
//         price:Math.round(Math.random()*50000)
//     },
//     {
//         id:2,
//         price:Math.round(Math.random()*50000)
//     },
//     {
//         id:3,
//         price:Math.round(Math.random()*50000)
//     },
//     {
//         id:4,
//         price:Math.round(Math.random()*50000)
//     },
//     {
//         id:5,
//         price:Math.round(Math.random()*50000)
//     },
//     {
//         id:6,
//         price:Math.round(Math.random()*50000)
//     },
// ]
//
// if(localStorage['info']){
//     info=JSON.parse(localStorage['info'])
// }else{
//     localStorage['info']=JSON.stringify(info)
// }
//
// console.table(info)


let cub = {
    step: 0,
    current: [],
    cordinat: [
        {
            id: 1,
            status: ''
        },
        {
            id: 2,
            status: ''
        },
        {
            id: 3,
            status: ''
        },
        {
            id: 4,
            status: ''
        },
        {
            id: 5,
            status: ''
        },
        {
            id: 6,
            status: ''
        },
        {
            id: 7,
            status: ''
        },
        {
            id: 8,
            status: ''
        }, {
            id: 9,
            status: ''
        }
    ]
}

let c = document.querySelector('.container')

for (let [i, cubs] of cub.cordinat.entries()) {
    if (i === 0) {
        cub.current.push(true)
    } else {
        cub.current.push(false)
    }
    c.innerHTML += `<div class="c_row c-row_c ${cubs.status}"></div>`
}

let c_row = document.querySelectorAll('.c-row_c')
c_row.forEach(tag => {
    tag.addEventListener('click', function (e) {

        if (cub.step === 3) {
            alert('duq sparel eq hnaravorutyuny')
            return ''
        }
        cub.step++
        if (e.target.classList.contains('green') || e.target.classList.contains('red')) {
            alert("du arden sexmel es sra vra")
        } else {
            let index = Math.floor(Math.random() * cub.current.length)

            if (cub.current[index]) {
                cub.step = 3
                e.target.classList.add('green')
            } else {
                e.target.classList.add('red')
            }
            cub.current.splice(index, 1)
            console.log(cub.current)
        }

    })
})