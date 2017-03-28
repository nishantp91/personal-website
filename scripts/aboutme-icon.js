/**
 * @author Nishant
 */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("sec_icon").style.display = "block";
    } else {
        document.getElementById("sec_icon").style.display = "none";
    }
}
