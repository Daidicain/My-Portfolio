function navigateView( id_show, idHide_1, idHide_2, idHide_3 ) {
    /*  Purpose: will show nav id and hide the rest
        Parameters: ids of divs to show and hide
        return: n/a
        last updated: 2024-02-18
    */
    
    // get elements
    var showElement = document.getElementById(id_show);
    var hideElement1 = document.getElementById(idHide_1);
    var hideElement2 = document.getElementById(idHide_2);
    var hideElement3 = document.getElementById(idHide_3);

    // change element display
    showElement.style.display = "inline";
    hideElement1.style.display = "none";
    hideElement2.style.display = "none";
    hideElement3.style.display = "none";

} 

function toggleView( id_toggle ){
    /*  Purpose: will toggles display of div
        Parameters: id of item to toggle
        return: n/a
        last updated: 2024-02-18
    */
    
    // get elements
    var element = document.getElementById(id_toggle);

    // hide if shown
    if ( element.style.display == "inline" ){
        element.style.display = "none";
        return
    }
    // show if hidden
    else {
        element.style.display = "inline"
        return
    }

}

function toggleHeaderView( id_toggle ){
    /*  Purpose: will toggles display of div
        Parameters: id of item to toggle
        return: n/a
        last updated: 2024-02-18
    */
    
    // get elements
    var element = document.getElementById(id_toggle);

    // hide if shown
    if ( element.style.display == "inline" ){
        element.style.display = "none";
        return
    }
    // show if hidden
    else {
        element.style.display = "inline"
        return
    }

}
