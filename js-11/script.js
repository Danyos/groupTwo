// let lang = {
//     am: {
//         title: 'Անուն Ազգանուն',
//         desc: "hayerenov desc"
//     },
//     en: {
//         title: 'FullName',
//         desc: "angleren desc"
//     }
// }
// if (!localStorage['lang']) {
//     localStorage['lang'] = 'am'
// }
//
// let mylang = document.querySelector('#lang')
// mylang.src = './icon/' + localStorage['lang'] + '.png'
//
// let lang_name = document.querySelector('.lang_name')
// lang_name.innerHTML = lang[localStorage['lang']].title
//
//
// let resume = {
//     info: {
//         fullName: '',
//         email: '',
//         number: '',
//         portfolio: '',
//         linkedin: '',
//     },
//     work_exp: [
//         {
//             id: 1,
//             title: 'Web development compamny',
//             position: 'lorem ipsum dolor sit amet, consectetur',
//             startYeare: '2020',
//             startMonth: '02',
//             endYeare: '2021',
//             endMonth: '05',
//         },
//         {
//             id: 2,
//             title: 'Freelancer development compamny',
//             position: 'lorem ipsum dolor sit amet, consectetur',
//             startYeare: '2022',
//             startMonth: '04',
//             endYeare: null,
//             endMonth: null,
//         },
//
//     ]
//
//
// };
//
// if (localStorage['info']) {
//     resume = JSON.parse(localStorage['info']);
// }
// ;
//
// let fullName = document.querySelector('.fullName');
// let email = document.querySelector('.email');
// let number = document.querySelector('.number');
// let portfolio = document.querySelector('.portfolio');
// let linkedin = document.querySelector('.linkedin');
// let modify = document.querySelector('.modify')
// let save_box = document.querySelector('.save_box');
// let save = null;
//
// fullName.innerHTML = resume.info['fullName'] || ' ';
// email.innerHTML = resume.info['email'] || ' ';
// number.innerHTML = resume.info['number'] || ' ';
// portfolio.innerHTML = resume.info['portfolio'] || ' ';
// linkedin.innerHTML = resume.info['linkedin'] || ' ';
//
// function editBtn() {
//     fullName.setAttribute('contenteditable', true);
//     fullName.classList.add('b1');
//     fullName.focus();
//     if (fullName.innerHTML.includes('_')) {
//         fullName.innerHTML = '';
//     }
//     ;
//     email.setAttribute('contenteditable', true);
//     email.classList.add('b1');
//     if (email.innerHTML.includes('_')) {
//         email.innerHTML = '';
//     }
//     ;
//     number.setAttribute('contenteditable', true);
//     number.classList.add('b1');
//     if (number.innerHTML.includes('_')) {
//         number.innerHTML = '';
//     }
//     ;
//     portfolio.setAttribute('contenteditable', true);
//     portfolio.classList.add('b1');
//     if (portfolio.innerHTML.includes('_')) {
//         portfolio.innerHTML = '';
//     }
//     ;
//     linkedin.setAttribute('contenteditable', true);
//     linkedin.classList.add('b1');
//     if (linkedin.innerHTML.includes('_')) {
//         linkedin.innerHTML = '';
//     }
//     ;
//     saveBtn();
// };
//
// function saveBtn() {
//     let btn = document.querySelector('.save');
//     save_box.appendChild(btn);
//     btn.addEventListener('click', function () {
//         resume.info.fullName = fullName.innerHTML.trim();
//         fullName.setAttribute('contenteditable', true);
//         fullName.classList.remove('b1');
//
//         resume.info.email = email.innerHTML.trim();
//         email.setAttribute('contenteditable', true);
//         email.classList.remove('b1');
//
//         resume.info.number = number.innerHTML.trim();
//         number.setAttribute('contenteditable', true);
//         number.classList.remove('b1');
//
//         resume.info.portfolio = portfolio.innerHTML.trim();
//         portfolio.setAttribute('contenteditable', true);
//         portfolio.classList.remove('b1');
//
//         resume.info.linkedin = linkedin.innerHTML.trim();
//         linkedin.setAttribute('contenteditable', true);
//         linkedin.classList.remove('b1');
//
//         localStorage['info'] = JSON.stringify(resume);
//     });
// };
//



let games=['apple','android',
    'chrome','firefox','firefox','opera','chatgpt','letter']

let random=Math.floor(Math.random()*games.length)
let info=games[random]


let arrinfo=info.split('')
// arrinfo=arrinfo.sort()
let res=''
for (let i=0; i<arrinfo.length; i++){
    let my=Math.floor(Math.random()*arrinfo.length)
    res+=arrinfo[my]
    arrinfo.splice(my,1)
    i--
}
console.log(res)
