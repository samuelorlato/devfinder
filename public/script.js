function getUser(){
    var username = document.getElementById("search-input").value

    fetch("https://api.github.com/users/"+username)
    .then(res => res.json())
    .then(data => {
        if(data.login === undefined){

        }
        else{
            document.getElementById("result").classList.remove("hidden")
            document.getElementById("profile-image").setAttribute("src", data.avatar_url)
            document.getElementById("profile-name").innerHTML = data.name
            document.getElementById("profile-user").innerHTML = "@"+data.login
            document.getElementById("profile-user").setAttribute("href", "https://github.com/"+data.login)
            document.getElementById("profile-bio").innerHTML = data.bio
            if(data.location === null){
                document.getElementById("location-div").classList.add("hidden")
            }
            else{
                document.getElementById("location-div").classList.remove("hidden")
                document.getElementById("profile-location").innerHTML = data.location
            }
        }
    })
}

document.onkeydown = e => {
    getUser()
}