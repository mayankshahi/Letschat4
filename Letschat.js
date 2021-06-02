function login()
{
    username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("Username",username);
    window.location = "letschat_room.html"
}