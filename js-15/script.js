let uptext
// function mysearch(e){
//     clearTimeout(uptext)
//     uptext= setTimeout(()=>{
//         console.log(e.target.value)
//     },500)
//
// }
let myId=0
let question=[
    {
    id: 1,
    question: "Հարց 1-ինչ կտպի հետևյալ կոդը?- console.log(typeof NaN)",
    a: "Ա․ number",
    b: "Բ․ undefined",
    c: "Գ․ object",
    d: "Դ․ string",
    correct: '1'
},
    {
        id: 2,
        question: "Հարց 2-ինչ կտպի հետևյալ կոդը?- const arr=[1,2,3,4,5] const otherArr=[1,2,3,4,5] console.log(arr == otherArr)",
        a: "Ա․ true",
        b: "Բ․ false",
        c: "Գ․ Error",
        d: "Դ․ arr == otherArr",
        correct: '2'
    },
    {
        id: 3,
        question: "Հարց 3-ինչ կտպի հետևյալ կոդը?- let x=10    x==10 && console.log('hello world')",
        a: "Ա․ hello world",
        b: "Բ․ Error",
        c: "Գ․ undefined",
        d: "Դ․ false",
        correct: '3'
    },]

let questionSet
let myquestion=document.querySelector(".myquestion")
let answer= {
    harc1: document.querySelector(".harc1"),
    harc2: document.querySelector(".harc2"),
    harc3: document.querySelector(".harc3"),
    harc4: document.querySelector(".harc4"),
}

let firstload=false
function showQuestion(arg){
    console.log(arg)
    clearTimeout(questionSet)
    if(firstload){
        let x=checkAnswer(arg)
        if(x){
            answer["harc"+arg].classList.add('setActive')
        }else{
            answer["harc"+arg].classList.add('setActive2')
        }

    }
    firstload=true
   if(question.length===myId){
       alert("avart")
      return ''
   }
    questionSet=setTimeout(()=>{

            writeQuestion(arg)
        myId++
        },1000)

   }


   function writeQuestion(arg){
       answer["harc"+arg].classList.remove('setActive')
       answer["harc"+arg].classList.remove('setActive2')
       myquestion.innerHTML=question[myId].question
       answer.harc1.innerHTML=question[myId].a
       answer.harc2.innerHTML=question[myId].b
       answer.harc3.innerHTML=question[myId].c
       answer.harc4.innerHTML=question[myId].d
   }
showQuestion(1)

function checkAnswer(arg){
    console.log(question[myId-1])
    return  question[myId-1].correct==arg
}