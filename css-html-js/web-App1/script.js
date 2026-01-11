function dispMessage(){
   let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txt").value;
  let found = users.find(
    (element) => element.email === email && element.password === password
  );
  if (found) {
    lblMessage.innerHTML = "Welcome";
  } else {
    lblMessage.innerHTML = "Access Denied";
  }
}
let users=[];
function addUser(){
    let name=document.getElementById("txtName").value
    let email=document.getElementById("txtEmail").value
    let password=document.getElementById("txt").value
    let user={name: name,email: email,password: password,};
    users.push(user);
    showLogin();
    console.log(users);
}
function showLogin(){
    let str= `
     <h3>Login Form</h3>
        <p><label id="lblMessage">hello</label></p>
        <p><input type="text" id="txtEmail"/></p>
        <p><input type="password" id="txt"/></p>
        <p><button class="login-btn" onclick="dispMessage()">Login</button></p>
        <hr>
        <p><button class="create-btn" onclick="showRegisterForm()">Create Account</button></p>
    `
root.innerHTML = str

}
function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>
     <p><input type="text" id="txtName"/></p>
      <p><input type="text" id="txtEmail"/></p>
        <p><input type="password" id="txt"/></p>
        <p><button class="login-btn" onclick="addUser()">Register</button></p>
        <hr>
        <h3>Already a member<h3>
        <a href="#" onclick="showLogin()">login</a>
    `
    root.innerHTML = str
}