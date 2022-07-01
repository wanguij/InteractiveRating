function yourRating(){

    let rating = document.forms[0];
    let txt ="";
    let i;

    for(i = 0; i < rating.length; i++){

        if (rating[i].checked){
            txt = txt + rating[i].value + "";
        }
    }
document.getElementById("results").value ="you rated us as " + txt;
}