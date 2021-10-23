var zmn = jQuery.noConflict()

zmn(document).ready(function()
	{
	zmn(".guess_box").click(CheckForCode);
	function GetRandom (num)
		{
			var my_num = Math.floor(Math.random()*num);
			return my_num;
		}
	var hideCode = function ()
		{
			var numRand = GetRandom(4);
			zmn(".guess_box").each(function(index, value)
									{
										if(numRand == index)
											{
												zmn(this).append("<span id='has_discount'></span>");
												return false;
											}
									});
		}
	hideCode();
	function CheckForCode()
		{
			var discount;
			if(zmn.contains(this, document.getElementById("has_discount")))
				{
					var my_num = GetRandom(5);
					discount = "<p>Your discount is " + my_num + "%</p>";
				}
				else
					{
						discount = "<p>Sory, no discount this time!</p>";
					}
			zmn(this).append(discount);
			zmn(".guess_box").each(function()
								{
									zmn(this).unbind('click');
								});
		};
	zmn(".guess_box").hover(
	function() {
		zmn(this).addClass("my_hover");
	},
	function() {
		zmn(this).removeClass("my_hover");
	});
	}); //End document.raedy