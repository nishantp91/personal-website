/**
 * @author Nishant
 */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("sec_icon").style.visibility = "visible"; //show section icon after scrolling
        document.getElementById("homepage").style.background = "#cccccc";
        
        
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("sec_icon").style.visibility = "hidden"; //hide section icon 
        document.getElementById("homepage").style.background = "#fefefe";


    }
}

// When the user clicks on the arrow, scroll to the top of the document
 $('#myBtn').click(function() {
	  $('html, body').animate({
	    scrollTop: $($(this).attr('href')).offset().top
	  }, 1000);
	  return false; //doesnt show #href link in url
});


