let listLikes = [];
function likes(names) {
    listLikes.push(names);
    let message;
    if(listLikes.length == 0){
        message = "no one like this";
        console.log(message)
    }else if(listLikes.length == 1){
        message = `${listLikes[0]} like this`;
        console.log(message)
    }else if(listLikes.length == 2){
        message = `${listLikes[0]} and ${listLikes[1]} like this`;
            console.log(message)
    }else if(listLikes.length == 3){
        message = `${listLikes[0]}, ${listLikes[1]} and ${listLikes[2]} like this`;
            console.log(message)
    }else if(listLikes.length > 3){
        message = `${listLikes[0]}, ${listLikes[1]} and ${ (listLikes.length - 2)} others like this`;
            console.log(message)
    }
}


likes("jande")
likes("Camila")
likes("Helena")
