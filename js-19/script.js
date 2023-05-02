function User(username,password){
    this.username=username
    this.password=password

}

function Login(){
    this.users=[]
    
}

Login.prototype.addUser=function (user){
    if(user instanceof User){

        this.users.push(user)
        return true
    }else{
        console.log("Error. Invalid user object")
        return false
    }
}


Login.prototype.login=function (username,password){
    if(!username || !password){
        console.log('Error. Missing usernema and password ')
        return false
    }
    let u=this.users.find(res=>res.username===username && res.password===password)
    if(u){
        return true
    }
    console.log('error: inalid username and password ')
    return false
}

function Register(){
    this.login=new Login()
}
Register.prototype.register=function (username,password){
    if(!username || !password){
        console.log('Error. Missing usernema and password ')
        return false
    }



    let user=new User(username,password)

    return this.login.addUser(user)

}
let register=new Register()


register.register("Ando",'123')



let loginForm=document.querySelector('#loginForm')
loginForm.addEventListener('submit',function (e){
    e.preventDefault()
   let username=e.target.elements.username
   let password=e.target.elements.password

    console.log(register.login.login(username.value,password.value))
    username.value=''
    password.value=''
})

