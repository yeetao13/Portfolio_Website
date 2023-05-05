window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    // let test = document.getElementById("test");
    // console.log(test.getBoundingClientRect());

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible && elementBottom > 130) {
          reveals[i].classList.add("active");
        } else{
          reveals[i].classList.remove("active");
        }
      }
}
