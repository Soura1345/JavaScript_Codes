let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username === "sourashis" && password === "sourashis1234"){
        loggedIn = true;
        window.alert(`You are logged in!`);
    }else{
        window.alert(`Invalid details, Please try again`)
    }
}