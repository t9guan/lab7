'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function clickLikeBtn(e) {
    // prevent the page from reloading     
    e.preventDefault();
    ga('create','UA-190141683-1','auto');
    ga('send', 'event', 'like', 'click');
    
}

function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
};