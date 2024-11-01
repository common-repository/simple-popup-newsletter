
jQuery.noConflict();
jQuery(document).ready(function() {

	jQuery('.popup-box-wrapper').on('click', function(event){
		if( jQuery(event.target).is('.popup-box-close') || jQuery(event.target).is('.popup-box-wrapper') ) {
			event.preventDefault();
			jQuery(this).removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
		}
	});
  
	jQuery('.popup-box-wrapper-unsub').on('click', function(event){
		if( jQuery(event.target).is('.popup-box-close') || jQuery(event.target).is('.popup-box-wrapper-unsub') ) {
			event.preventDefault();
			jQuery(this).removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
		}
	});
  
	jQuery('#popup_box_sub').on('click', function(event){
			event.preventDefault();
			jQuery('.popup-box-wrapper').removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
      popup_box_form.submit();
	});

	jQuery('#popup_box_exit').on('click', function(event){
			event.preventDefault();
			jQuery('.popup-box-wrapper').removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
	});
  
	jQuery('#popup_box_unsub').on('click', function(event){
			event.preventDefault();
			jQuery('.popup-box-wrapper').removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
      popup_box_form_unsub.submit();
	});

	jQuery('#popup_box_exit_unsub').on('click', function(event){
			event.preventDefault();
			jQuery('.popup-box-wrapper-unsub').removeClass('is-visible');
	    jQuery('.popup-box').removeClass('anim');
	});
  
	jQuery('#subscribtion_button').on('click', function(event){
	   event.preventDefault();
	   jQuery('.popup-box-wrapper').addClass('is-visible');
	   jQuery('.popup-box').addClass('anim');
	});
  
	jQuery('#unsubscribtion_button').on('click', function(event){
	   event.preventDefault();
	   jQuery('.popup-box-wrapper-unsub').addClass('is-visible');
	   jQuery('.popup-box').addClass('anim');
	});
  
	jQuery('#popup_box_all_checked').on('click', function(event){
     jQuery('.chk').attr('checked', this.checked);
	});

	jQuery('#popup_box_table_order').on('change', function(event){
      subscribers_form.submit();
	});
  

});

function show_popup() {
	 jQuery('.popup-box-wrapper').addClass('is-visible');
	 jQuery('.popup-box').addClass('anim');
}

function show_popup_unsub() {
	 jQuery('.popup-box-wrapper-unsub').addClass('is-visible');
	 jQuery('.popup-box').addClass('anim');
}

