function AddUser(){
    username=document.getElementById("User_Name").value;
    localStorage.setItem("user_name",username);
    window.location="NASA_About.html";
}

