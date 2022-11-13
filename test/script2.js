var zmn = jQuery.noConflict()

zmn(document).ready(function()
	{
		zmn(".guess_box").click(CheckForCode);
		function CheckForCode ()
			{
				var discount = Math.floor((Math.random()*5)+5);
				var discount_msg = "<p>Your discount is " + discount + "%</p>";
				zmn(this).append(discount_msg);
				zmn(this).each(function()
					{
						zmn(".guess_box").unbind("click");
					});
			}
	});

function GetRandom (num)
	{
		var my_num = Math.floor(Math.random()*num);
		return my_num;
	}