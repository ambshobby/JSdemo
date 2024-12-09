const GIT_user="https://api.github.com/users/ambshobby"

const user=fetch(GIT_user);
console.log(user);

user.then(userinfo());


function userinfo()
{
    console.log("i am a promise callback function");

}