"use strict"
$(document).ready(function() {
	$(".hamburger-button").click(function() {
		$(this).toggleClass('close');
		$('.header-top-nav').toggleClass('show');
	});
	$(".open-btn").click(function() {
		$(this).toggleClass("active");
		if ( $( ".help-context-block" ).is( ":hidden" ) ) {
			$( ".help-context-block" ).slideDown( 1000 );
		} else {
			$( ".help-context-block" ).slideUp( 1000 );
		}
		return false;
	});
});

$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
});

$(function(){
  // hide all content
  $('.accordeon_content').hide();
  
  $('.accordeon_title').click(function(){
    $(this).parent().toggleClass('active').siblings().removeClass('active');
    $('.accordeon_content').slideUp();
    
    if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
  });
});

$(".open-all").click(function() {
	$(".accordeon_item").addClass('active');
	$('.accordeon_content').slideDown();
	return false;
});