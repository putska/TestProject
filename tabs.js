        //Tabbed Panel
        //declare globals to hold all the links and all the panel elements
        var tabLinks;
        var tabPanels;
        
        window.onload = function() {
            //when the page loads, grab the li elements
            tabLinks = ducument.getElementById("tabs").getElementsByTagName("li");
            tabPanels = document.getElementById("containers").getElementsByTagName("div");
            
            //activate the first one
            displaypanel(tabLinks[0]);
            
            // attach event listener to links using onClick and onFocus, fire the displayPanel function, return false to disable the link
            
            for (var i=0; i < tabLinks.length; i++) {
                tablinks[i].onclick = function() {
                    DisplayPanel(this);
                    return false;
                }
                
                
            }
        }
        function DisplayPanel(tabToActivate) {
            //go through all the <li> elements
            for (var i = 0; i < tabLinks.length; i++){
                if (tabLinks[i] == tabToActivate){
                    //if it is the one to activate change its class
                    tabLinks[i].classList.add("active");
                    // and display the corresponding panel
                    tabPanels[i].style.display = "block";
                } else {
                    //remove the active class on the link
                    tabLinks[i].classList.remove("active");
                    //hide the panel
                    tabPanels[i].style.display = "none";
                }
                
            }
        }