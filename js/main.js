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
	 $("#mobile-menu").mmenu({
     // options
     navbar: {
     	add: false
     }
  }, {
     // configuration
     offCanvas: {
        pageSelector: ".wrapper"
     },
      classNames: {
          fixedElements: {
             sticky: "header-navbar",
             elemInsertMethod: "prependTo",
          }
       }


  });
  var API = $("#mobile-menu").data( "mmenu" );
	  
  $("#hamburger-button").click(function() {
     API.open();
     return false;
  });
  $("#hamburger-button").click(function() {
     API.close();
  });
  $(".mm-listitem .link-item").click(function() {
     API.close();
  });

  // Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var navWrapper = $(".tabs-nav");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	var activeNav = navWrapper.find(".active");
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		$(".tabs-nav > li").removeClass("active");
		// Add class active to clicked tab
		$(this).addClass("active");



		// Update clickedTab variable
		clickedTab = $(".tabs .active");

		var clickedTabIndex = clickedTab.index();

		$(".tabs-nav > li").eq(clickedTabIndex).addClass("active");
		activeNav = $(".tabs-nav > li")
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
			tabWrapper.stop().delay(10).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(10).fadeIn(250);
				
			});
		});
	});
	$(".tabs-nav > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		$(".tabs-nav > li").removeClass("active");
		// Add class active to clicked tab
		$(this).addClass("active");



		// Update clickedTab variable
		clickedTab = $(".tabs-nav .active");

		var clickedTabIndex = clickedTab.index();
		$(".tabs > li").eq(clickedTabIndex).addClass("active");
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
			tabWrapper.stop().delay(10).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(10).fadeIn(250);
				
			});
		});
	});

	$(".open-all").click(function() {
		$(".accordeon_item").addClass('active');
		$('.accordeon_content').slideDown();
		return false;
	});

	$('.modal-btn').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    focus: '#name',
	    fixedContentPos: true,
	    fixedBgPos: true,
	    overflowY: 'auto',

	    // When elemened is focused, some mobile browsers in some cases zoom in
	    // It looks not nice, so we disable it:
	    callbacks: {
	      beforeOpen: function() {
	        
	        if($(window).width() < 700) {
	          this.st.focus = false;

	        } else {
	          this.st.focus = '#name';
	        }
	      },
	      open: function(){
	        if ( $('.mfp-content').height() < $(window).height() ){
	          $('body').on('touchmove', function (e) {
	              e.preventDefault();
	          });
	        }
	      },
	    }
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