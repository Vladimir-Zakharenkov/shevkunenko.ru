var zmn = jQuery.noConflict();

zmn(document).ready(function() {

zmn('details#dtl1').each(
	function()
		{
		// configuration
		zmn(this).attr('open', true);
		var action = zmn(this).find('summary'),
			expand = zmn(this).find('section'),
			timer = 500,
			ex_e = '▲',
			ex_c = '▼',
			stranicy = 'страницы книги',
			no_str = '&nbsp;'
			
		// set marker & force expands
		action.append('<span>' + stranicy + '</span>' + '<i>' + ex_c + '</i>');
		action.toggle(
			function() {
			action.addClass('expand').find('i').html( ex_e );
			action.addClass('expand').find('span').html( no_str );
			expand.show(timer);
			return false;
			},
			function() {
			action.removeClass('expand').find('i').html( ex_c );
			action.addClass('expand').find('span').html( stranicy );
			expand.hide();
			return false;
		}
	);
	}
);
});