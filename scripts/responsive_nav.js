/**
 * @author Nishant
 */

function myFunction() {
			    var x = document.getElementById("nav_menu");
			    if (x.className === "topnav") {
			        x.className += " responsive";
			    } else {
			        x.className = "topnav";
			    }
			    
			    $('.scroll_down').click(function() {
  					x.className = "topnav";
				});
			}