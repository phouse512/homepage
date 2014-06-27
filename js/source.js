function getTumblrJSON(){    
    for(var i=0; i<5; i++){
        displayPost(tumblr_api_read.posts[i]); 
    }
}

function displayPost(post){
    //construct html statement
    var insertHTML = "<div class='post'><hr /><h2 class='title'><a href='" + post["url"] + "'>";
    insertHTML += post["regular-title"];
    insertHTML += "</a></h2><h5 class='date'>";
    insertHTML += parseDate(post["date"]);
    insertHTML += "</h5><p class='regular-body'>";
    insertHTML += post["regular-body"];
    insertHTML += "</p></div>";

    //insert html in correct location
    $("#posts").append(insertHTML);   
}

function parseDate(dateString){
    return dateString.substring(0, 17);
}