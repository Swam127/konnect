
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "select.html";
  }
  

function addUser1()
{
  user_name1 = document.getElementById("user_name1").value;
  
  localStorage.setItem("user_name1", user_name1);
  
    window.location = "firm.html";
}

