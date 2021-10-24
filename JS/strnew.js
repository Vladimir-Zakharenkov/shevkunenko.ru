var zmn = jQuery.noConflict();

zmn(document).ready(function() {
	zmn(".stranicy").each(
	function()
		{
		zmn(this).click(function()
			{
			zmn(".pages").slideToggle("slow");
			}
			);
		}
	);
}
);