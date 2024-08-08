const fav_movie = "welcome";
let guess = prompt("guess my favorite movie");

while(guess != fav_movie) {
    if(guess == "quit"){
        console.log("You quit");
        break;
    }
    prompt("wrong guess! please try again.")
}

if(guess == fav_movie){
    console.log("Congrats");
}
