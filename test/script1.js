var zmn = jQuery.noConflict()

zmn(document).ready(function()
	{
		zmn(".guess_box").click(function()
			{
			var discount = Math.floor((Math.random()*5)+5);
			var discount_msg = "<p>Your discount is " + discount + "%</p>";
			//alert(discount);
			zmn(this).append(discount_msg);
			zmn(this).each(function()
				{
				zmn(".guess_box").unbind("click");
				})
			});
	});