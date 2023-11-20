function clickShow(recipeID) {
    var dots = document.getElementById("dots-" + recipeID);
    var moreText = document.getElementById("more-" + recipeID);
    var btnText = document.getElementById("myBtn-" + recipeID);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  