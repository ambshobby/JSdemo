const git_user_info="https://api.github.com/users/ambshobby";

console.log(git_user_info)

const info_promise=fetch(git_user_info);

console.log(info_promise);


info_promise.then(akshata());



function akshata()
{
    console.log("I ahave completed promise ");
}