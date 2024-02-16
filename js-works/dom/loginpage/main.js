const login = () =>{
if (username.value=="" || password.value==""){
    alert("please fill the form completely!!!")
}else{
    user= username.value
    localStorage.setItem("user",user)
    // redirect to dashboard
    window.location="dashboard.html"
    alert("login sucessfully")
}
}