let i=localStorage['num']? +localStorage['num']:0
// function next(){
//     localStorage['num']= ++i
//     console.log(i)
// }
// console.log(i)

// const button = document.getElementById('click-me');
// button.innerHTML=`Click me (${i})`
// button.addEventListener('click', () => {
//     localStorage['num']= ++i
//     button.innerHTML=`Click me (${i})`
// });
let arr = localStorage["list"]?JSON.parse(localStorage["list"]):[];
console.log(arr);
function add() {
    let id;
    let prom = prompt('greq tiv')
        id = arr.length? arr[arr.length-1].id+1 :1
    arr.push({
        id: id,
        name: prom
    })
    localStorage["list"] = JSON.stringify(arr)
    console.log(arr);
}
function trash(){
    prompt(JSON.stringify(arr))
}function edit(){
    prompt(JSON.stringify(arr))
    prompt("poxovx anuny","fdigruhg")

}