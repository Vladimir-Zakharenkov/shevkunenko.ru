var shev = jQuery.noConflict();

shev(function() {

shev('details#dtl1').each(
	function()
		{
		// configuration
		shev(this).attr('open', true);
		var action = shev(this).find('summary'),
			expand = shev(this).find('section'),
			timer = 500,
			ex_e   = '▲',
			ex_c   = '▼',
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

shev(function() { 

shev('details#dtl2').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'AUDIO КНИГА (слушать online)';
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

shev(function() { 

shev('details#dtl3').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'О ФИЛЬМЕ...';
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

shev(function() { 

shev('details#dtl4').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'О СЕРИАЛЕ...';
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

shev(function() { 

shev('details#dtl5').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'ПРОТОТИП ДАВИДА ГОЦМАНА';
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

shev(function() { 

shev('details#dtl6').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'ЛЕГЕНДА О ЛИКВИДАЦИИ КРИМИНАЛА В ОДЕССЕ';
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

shev(function() { 

shev('details#dtl7').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'МАРШАЛ И ОДЕССА';
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

shev(function() { 

shev('details#dtl8').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'ИНТЕРВЬЮ С СОЗДАТЕЛЯМИ СЕРИАЛА';
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

shev(function() { 

shev('details#dtl9').each(
	function() {

	// configuration
	shev(this).attr('open', true);
	var action = shev(this).find('summary'),
		expand = shev(this).find('section'),
		timer = 500,
		ex_e   = '▲',
		ex_c   = '▼',
		stranicy = 'ПРОТОТИПЫ ГЕРОЕВ СЕРИАЛА';
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
//----------------------