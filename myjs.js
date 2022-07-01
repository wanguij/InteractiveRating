function yourRating() {

    let rating = document.forms[0];
    let txt = "";
    let i;

    for (i = 0; i < rating.length; i++) {

        if (rating[i].checked) {
            txt = txt + rating[i].value + "";
            localStorage.setItem("gRate",txt)

        }
    }
    // window.location.href="./thankyou.html"
    // document.getElementById("rated").value = "you selected " + txt +"out of 5"
}