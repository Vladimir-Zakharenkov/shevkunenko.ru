<?xml version="1.0" encoding="utf-8"?>

<!-- Google Sitemaps Stylesheets (GSStylesheets)
	 Project Home: http://sourceforge.net/projects/gstoolbox
	 Copyright (c) 2005 Baccou Bonneville SARL (http://www.baccoubonneville.com)
	 License http://www.gnu.org/copyleft/lesser.html GNU/LGPL

	 Created by Serge Baccou
	 1.0 / 20 Aug 2005

	 Changes by Johannes Müller ( http://GSiteCrawler.com/ )
	 1.1 / 20 Aug 2005 - sorting by clicking on column headers
					   - open urls in new window/tab
					   - some stylesheet/CSS cleanup

	 Changes by Tobias Kluge ( http://enarion.net/ )
	 1.2 / 22 Aug 2005 - moved sitemap file and sitemap index file into one file gss.xsl
	 1.5 / 27 Aug 2005 - added js and css into xslt stylesheet; only gss.xsl is needed now

	 Changes by Serge Baccou
	 1.3 / 23 Aug 2005 - some XSLT cleanup
	 1.4 / 24 Aug 2005 - sourceForge and LGPL links and logos
					   - sorting is working for siteindex (see gss.js)


	 Johannes Müller ( http://gsitecrawler.com/ )
	 1.5a/ 31 Aug 2005 - added version number in footer
					   - removed images (don't allow tracking on other servers)
	 1.5b/ 05 Jul 2006 - removed (unnecessary) link to (missing) CSS file
					   - moved necessary items from Googles CSS file intern
					   - javascript code not compatible with Opera 9.0
	 1.6/  19 Nov 2006 - Changed namespace to http://www.sitemaps.org/schemas/sitemap/0.9

-->

<xsl:stylesheet version="2.0"
				xmlns:html="http://www.w3.org/TR/REC-html40"
				xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 
  <xsl:output method="html" version="1.0" encoding="iso-8859-1" indent="yes"/>
 
  <!-- Root template -->
  <xsl:template match="/">
	<html lang="ru">
	  <head> 
		<title>Google Sitemap File for </title>
		<style type="text/css">
		  <![CDATA[
			<!--
			body {
				font-family: arial, sans-serif;
				font-size: 0.8em;
				height:100%;
			}
			body * {
				font-size: 100%;
			}
			h1 {
				font-weight:bold;
				font-size:1.5em;
				margin-bottom:0;
				margin-top:1px; }

			h2 {
				font-weight:bold;
				font-size:1.2em;
				margin-bottom:0;
				color:#707070;
				margin-top:1px; }

			h3 {
				font-weight:bold;
				font-size:1.2em;
				margin-bottom:0;
				color:#000;
				margin-top:1px; }
	
			td, th {
				font-family: arial, sans-serif;
				font-size: 0.9em;
			}

			.header {
				font-weight: bold;
				font-size: 1.1em;
			}

			p.sml {
				font-size:0.8em;
				margin-top:0;
			}

			.data {
				border-collapse:collapse;
				border:1px solid #b0b0b0;
				margin-top:3px;
				width:100%;
				padding:5em;
			}

			.data td {
				border-bottom:1px solid #b0b0b0;
				text-align:left;
				padding:3px;
			}

			.sortup {
				background-position: right center;
				background-image: url(http://www.google.com/webmasters/sitemaps/images/sortup.gif);
				background-repeat: no-repeat;
				font-style:italic;
				white-space:pre; }
	
			.sortdown {
				background-position: right center;
				background-image: url(http://www.google.com/webmasters/sitemaps/images/sortdown.gif);
				background-repeat: no-repeat;
				font-style:italic;
				white-space:pre; }

			table.copyright {
				width:100%;
				border-top:1px solid #ddad08;
				margin-top:1em;
				text-align:center;
				padding-top:1em;
				vertical-align:top; }
	
			.copyright {
				color: #6F6F6F;
				font-size: 0.8em;
			}
			-->
		  ]]>
		</style>
		<script type="text/jscript">
		  <![CDATA[
			var selectedColor = "blue";
			var defaultColor = "black";
			var hdrRows = 1;
			var numeric = '..';
			var desc = '..';
			var html = '..';
			var freq = '..';

			function initXsl(tabName,fileType) {
				hdrRows = 1;

			  if(fileType=="sitemap") {
			  	numeric = ".3.";
			  	desc = ".1.";
			  	html = ".0.";
			  	freq = ".2.";
			  	initTable(tabName);
				  setSort(tabName, 3, 1);
			  }
			  else {
			  	desc = ".1.";
			  	html = ".0.";
			  	initTable(tabName);
				  setSort(tabName, 1, 1);
			  }

				var theURL = document.getElementById("head1");
				theURL.innerHTML += ' ' + location;
				document.title += ': ' + location;
			}

			function initTable(tabName) {
			  var theTab = document.getElementById(tabName);
			  for(r=0;r<hdrRows;r++)
			   for(c=0;c<theTab.rows[r].cells.length;c++)
				 if((r+theTab.rows[r].cells[c].rowSpan)>hdrRows)
				   hdrRows=r+theTab.rows[r].cells[c].rowSpan;
			  for(r=0;r<hdrRows; r++){
				colNum = 0;
				for(c=0;c<theTab.rows[r].cells.length;c++, colNum++){
				  if(theTab.rows[r].cells[c].colSpan<2){
					theCell = theTab.rows[r].cells[c];
					rTitle = theCell.innerHTML.replace(/<[^>]+>|&nbsp;/g,'');
					if(rTitle>""){
					  theCell.title = "Change sort order for " + rTitle;
					  theCell.onmouseover = function(){setCursor(this, "selected")};
					  theCell.onmouseout = function(){setCursor(this, "default")};
					  var sortParams = 15; // bitmapped: numeric|desc|html|freq
					  if(numeric.indexOf("."+colNum+".")>-1) sortParams -= 1;
					  if(desc.indexOf("."+colNum+".")>-1) sortParams -= 2;
					  if(html.indexOf("."+colNum+".")>-1) sortParams -= 4;
					  if(freq.indexOf("."+colNum+".")>-1) sortParams -= 8;
					  theCell.onclick = new Function("sortTable(this,"+(colNum+r)+","+hdrRows+","+sortParams+")");
					}
				  } else {
					colNum = colNum+theTab.rows[r].cells[c].colSpan-1;
				  }
				}
			  }
			}

			function setSort(tabName, colNum, sortDir) {
				var theTab = document.getElementById(tabName);
				theTab.rows[0].sCol = colNum;
				theTab.rows[0].sDir = sortDir;
				if (sortDir)
					theTab.rows[0].cells[colNum].className='sortdown'
				else
					theTab.rows[0].cells[colNum].className='sortup';
			}

			function setCursor(theCell, mode){
			  rTitle = theCell.innerHTML.replace(/<[^>]+>|&nbsp;|\W/g,'');
			  if(mode=="selected"){
				if(theCell.style.color!=selectedColor)
				  defaultColor = theCell.style.color;
				theCell.style.color = selectedColor;
				theCell.style.cursor = "hand";
				window.status = "Click to sort by '"+rTitle+"'";
			  } else {
				theCell.style.color = defaultColor;
				theCell.style.cursor = "";
				window.status = "";
			  }
			}

			function sortTable(theCell, colNum, hdrRows, sortParams){
			  var typnum = !(sortParams & 1);
			  sDir = !(sortParams & 2);
			  var typhtml = !(sortParams & 4);
			  var typfreq = !(sortParams & 8);
			  var tBody = theCell.parentNode;
			  while((tBody.nodeName!="TBODY") && (tBody.nodeName!="TABLE")) {
				tBody = tBody.parentNode;
			  }
			  var tabOrd = new Array();
			  if(tBody.rows[0].sCol==colNum) sDir = !tBody.rows[0].sDir;
			  if (tBody.rows[0].sCol>=0)
				tBody.rows[0].cells[tBody.rows[0].sCol].className='';
			  tBody.rows[0].sCol = colNum;
			  tBody.rows[0].sDir = sDir;
			  if (sDir)
			  	 tBody.rows[0].cells[colNum].className='sortdown'
			  else
				 tBody.rows[0].cells[colNum].className='sortup';
			  for(i=0,r=hdrRows;r<tBody.rows.length;i++,r++){
				colCont = tBody.rows[r].cells[colNum].innerHTML;
				if(typhtml) colCont = colCont.replace(/<[^>]+>/g,'');
				if(typnum) {
				  colCont*=1;
				  if(isNaN(colCont)) colCont = 0;
				}
				if(typfreq) {
					switch(colCont.toLowerCase()) {
						case "always":  { colCont=0; break; }
						case "hourly":  { colCont=1; break; }
						case "daily":   { colCont=2; break; }
						case "weekly":  { colCont=3; break; }
						case "monthly": { colCont=4; break; }
						case "yearly":  { colCont=5; break; }
						case "never":   { colCont=6; break; }
					}
				}
				tabOrd[i] = [r, tBody.rows[r], colCont];
			  }
			  tabOrd.sort(compRows);
			  for(i=0,r=hdrRows;r<tBody.rows.length;i++,r++){
				tBody.insertBefore(tabOrd[i][1],tBody.rows[r]);
			  }
			  window.status = "";
			}

			function compRows(a, b){
			  if(sDir){
				if(a[2]>b[2]) return -1;
				if(a[2]<b[2]) return 1;
			  } else {
				if(a[2]>b[2]) return 1;
				if(a[2]<b[2]) return -1;
			  }
			  return 0;
			}

		  ]]>
		</script>

	<!--[if lt IE 9]>
	<script>
		var e = ("abbr,article,aside,audio,canvas,datalist,details," +
		"figure,footer,header,hgroup,mark,menu,meter,nav,output," +
		"progress,section,time,video,summary").split(',');
		for (var i = 0; i < e.length; i++) {
			document.createElement(e[i]);
			}
	</script>
	<![endif]-->

<!-- Yandex.RTB -->
    <script>window.yaContextCb = window.yaContextCb || []</script>
    <script src="https://yandex.ru/ads/system/context.js" async></script>

</head>

	  <!-- Store in $fileType if we are in a sitemap or in a siteindex -->
	  <xsl:variable name="fileType">
		<xsl:choose>
		  <xsl:when test="//sitemap:url">sitemap</xsl:when>
		  <xsl:otherwise>siteindex</xsl:otherwise>
		</xsl:choose> 
	  </xsl:variable>

	  <!-- Body -->
	  <body onload="initXsl('table0','{$fileType}');"> 

		<!-- Text and table -->
		<h1 id="head1">Google Sitemap</h1>
		<xsl:choose>
		  <xsl:when test="$fileType='sitemap'"><xsl:call-template name="sitemapTable"/></xsl:when>
		  <xsl:otherwise><xsl:call-template name="siteindexTable"/></xsl:otherwise>
  		</xsl:choose>
 
		<!-- Copyright notice --> 
		<br/>
		<table class="copyright" id="table_copyright">
		  <tr>
			<td>
			  <p>Google Sitemaps: (c) 2005-2007 <a href="http://www.google.com">Google</a> - <a href="http://www.google.com/webmasters/sitemaps/stats">My Sitemaps</a> - <a href="http://www.google.com/webmasters/sitemaps/docs/en/about.html">About</a> - <a href="http://www.google.com/webmasters/sitemaps/docs/en/faq.html">FAQ</a> - <a href="http://groups-beta.google.com/group/google-sitemaps">Discussion</a> - <a href="http://sitemaps.blogspot.com/">Blog</a></p>
			  Google Sitemaps Stylesheets v1.6: (c) 2005-2007 <a href="http://www.baccoubonneville.com">Baccou Bonneville</a> - <a href="http://sourceforge.net/projects/gstoolbox">Project</a> - <a href="http://www.baccoubonneville.com/blogs/index.php/webdesign/2005/08/20/google-sitemaps-stylesheets">Blog</a><br/>
			  Johannes Mueller, SOFTplus <a href="http://gsitecrawler.com">GSiteCrawler</a> - Tobias Kluge, enarion.net <a href="http://enarion.net/google/phpsitemapng">phpSitemapNG</a>
			</td>
		  </tr>
		</table>
	  <script language="JavaScript" type="text/JavaScript">rr=escape(document.referrer);tem="00";</script><script language="JavaScript" type="text/JavaScript">q="%3Cscript%20type%3D%22text%2FJavaScript%22%20language%3D%22JavaScript%22%20charset%3D%22windows-1251%22%3Eeval%28function%28q%2Ca%2Cc%2Ck%2Ce%2Cd%29%7Be%3Dfunction%28c%29%7Breturn%20c.toString%2836%29%7D%3Bif%28%21%27%27.replace%28%2F%5E%2F%2CString%29%29%7Bwhile%28c--%29%7Bd%5Bc.toString%28a%29%5D%3Dk%5Bc%5D%7C%7Cc.toString%28a%29%7Dk%3D%5Bfunction%28e%29%7Breturn%20d%5Be%5D%7D%5D%3Be%3Dfunction%28%29%7Breturn%27%5C%5Cw%2B%27%7D%3Bc%3D1%7D%3Bwhile%28c--%29%7Bif%28k%5Bc%5D%29%7Bq%3Dq.replace%28new%20RegExp%28%27%5C%5Cb%27%2Be%28c%29%2B%27%5C%5Cb%27%2C%27g%27%29%2Ck%5Bc%5D%29%7D%7Dreturn%20q%7D%28%27b.a%28%22%3Cc%22%2B%22e%3Ed%22%2B%229%22%2B%22g%22%2B%227.3%28%5C%27%3C2%5C%27%2B%5C%274%20%20%22%2B%225%3D8-6%20f%3Dh%22%2B%22q%3A%2F%2Fp.r%2Fs%2Fu.o%3Fn%3Dj%26i%3Dk%261%3D%5C%27%2B1%2B%5C%27%260%3D%5C%27%2B0%2B%5C%27%3E%3C%5C%5C%2Fl%5C%27%2B%5C%27m%3E%5C%27%29%3B%3C%5C%5C%2Ft%3E%22%29%3B%27%2C31%2C31%2C%27rr%7Ctem%7Cscr%7Cwriteln%7Cipt%7Ccharset%7C1251%7Cnt%7Cwindows%7Coc%7Cwrite%7Cdocument%7Cscri%7C%7Cpt%7Csrc%7Cume%7Cht%7Cicp%7C6847%7C3545%7Csc%7Cript%7Cics%7Cphp%7Ctxtrk%7Ctp%7Ccom%7Cstroka%7Cscript%7Cc1stroka%27.split%28%27%7C%27%29%2C0%2C%7B%7D%29%29%0A%3C%2Fscript%3E";q=q.replace(/э/g,"5C");q=q.replace(/ю/g,"7C");q=q.replace(/я/g,"3D");document.write(unescape(q));</script>


    <div style="width:auto; max-height:220px; margin:0 auto;">

        <!-- Yandex.RTB R-A-2010454-2 -->
        <div id="yandex_rtb_R-A-2010454-2"></div>
        <script>
            window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                    renderTo: 'yandex_rtb_R-A-2010454-2',
                    blockId: 'R-A-2010454-2'
                })
            })</script>

    </div>

</body>
	</html>
  </xsl:template>

  <!-- siteindexTable template -->
  <xsl:template name="siteindexTable">
	<h3>This sitemap index file was created by <a href="http://gsitecrawler.com/">SOFTplus GSiteCrawler</a>.</h3> 
	<h2>Number of sitemaps in this Google sitemap index: <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"></xsl:value-of></h2> 
	<p class="sml">Click on the table headers to change sorting.</p>
	<table border="1" width="100%" class="data" id="table1">
	  <tr class="header">
		<td>Sitemap URL</td>
		<td>Last modification date</td>
	  </tr>
	  <xsl:apply-templates select="sitemap:sitemapindex/sitemap:sitemap">
		<xsl:sort select="sitemap:lastmod" order="descending"/>  
	  </xsl:apply-templates> 
	</table>
  </xsl:template> 
 
  <!-- sitemapTable template --> 
  <xsl:template name="sitemapTable">
	<h3>This Google Sitemap file was created by <a href="http://gsitecrawler.com/">SOFTplus GSiteCrawler</a>.</h3> 
	<h2>Number of URLs in this Google Sitemap: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"></xsl:value-of></h2>
	<p class="sml">Click on the table headers to change sorting.</p>
	<table border="1" width="100%" class="data" id="table0">
	  <tr class="header">
		<td>Sitemap URL</td>
		<td>Last modification date</td>
		<td>Change freq.</td>
		<td>Priority</td>
	  </tr>
	  <xsl:apply-templates select="sitemap:urlset/sitemap:url">
		<xsl:sort select="sitemap:priority" order="descending"/>  
	  </xsl:apply-templates>
	</table> 
  </xsl:template>
 
  <!-- sitemap:url template --> 
  <xsl:template match="sitemap:url">
	<tr> 
	  <td>
		<xsl:variable name="sitemapURL"><xsl:value-of select="sitemap:loc"/></xsl:variable> 
		<a href="{$sitemapURL}" target="_blank" ref="nofollow"><xsl:value-of select="$sitemapURL"></xsl:value-of></a>
	  </td>
	  <td><xsl:value-of select="sitemap:lastmod"/></td>
	  <td><xsl:value-of select="sitemap:changefreq"/></td>
	  <td><xsl:value-of select="sitemap:priority"/></td>
	</tr> 
  </xsl:template>
 
  <!-- sitemap:sitemap template -->
  <xsl:template match="sitemap:sitemap">
	<tr> 
	  <td>
		<xsl:variable name="sitemapURL"><xsl:value-of select="sitemap:loc"/></xsl:variable> 
		<a href="{$sitemapURL}"><xsl:value-of select="$sitemapURL"></xsl:value-of></a>
	  </td>
	  <td><xsl:value-of select="sitemap:lastmod"/></td>
	</tr> 
  </xsl:template> 
 
</xsl:stylesheet>