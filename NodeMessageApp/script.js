window.onload = function(){
    fetch("/display")
    .then((res)=>res.json()
    .then(function(data){
            console.log(data);
             document.getElementById("user-name").innerHTML = data.name;
             document.getElementById("user-msg").innerHTML = data.message;

        })
    
    )}