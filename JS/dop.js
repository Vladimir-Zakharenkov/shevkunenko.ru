var zmn = jQuery.noConflict();

zmn(document).ready(function() {
	zmn("details").click(function()
			{
				zmn(this).children("section").slideToggle("slow");
			}
			);
		}
	);