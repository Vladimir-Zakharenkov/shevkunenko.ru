function ThumbnailBrowse(nImageIndex)
	{
		if(ThumbnailWnd==null || ThumbnailWnd.closed)
			{
			ThumbnailWnd = window.open("","ImageBrowser",'width=400px,height=400px,top=0,left=0,resizable=no,scrollbars=no,status=no');
			WriteThumbnailBrowse(nImageIndex,kolvo);
			}
		ThumbnailWnd.gotoImage(nImageIndex,kolvo);
		ThumbnailWnd.focus();
	}

// *************
function WriteThumbnailBrowse(m_nCurPage,b)
	{
		if(ThumbnailWnd)
			{
				var str;
				var i;
				ThumbnailWnd.document.open("text/html");
				ThumbnailWnd.document.writeln("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">");
				ThumbnailWnd.document.writeln("<html>");
				ThumbnailWnd.document.writeln("<head>");
				ThumbnailWnd.document.writeln("<title>Фото<\/title>");
				ThumbnailWnd.document.writeln("<http-equiv=\"Content-Type\" content=\"text/html\; charset=windows-1251\">");
				//*******************************************************
				ThumbnailWnd.document.writeln("<script language=\"JavaScript\" type=\"text\/javascript\">");
				//********************************************************
				str = "var nImageCur=" + m_nCurPage + ";";
				ThumbnailWnd.document.writeln(str);
				//*******************************************************
				ThumbnailWnd.document.writeln("var timer = null;");
				ThumbnailWnd.document.writeln("var bAutoPlay = 0;");
				ThumbnailWnd.document.writeln("var b = " + b + ";");
				//********************************************************
				for(i=0;i<b;i++)
					{
						if(i==0)
							str = "var ImgName = new Array(\""+ImgName[i]+"\",";
							else
								if(i==b-1)
									str = "\""+ImgName[i]+"\")";
									else
										str = "\""+ImgName[i]+"\",";

						ThumbnailWnd.document.writeln(str);
					}

				for(i=0;i<b;i++)
					{
						if(i==0)
							str = "var ImgWidth = new Array(\""+(ImgWidth[i]+90)+"\",";
							else
								if(i==b-1)
									str = "\""+(ImgWidth[i]+90)+"\")";
									else
										str = "\""+(ImgWidth[i]+90)+"\",";

						ThumbnailWnd.document.writeln(str);
					}

				for(i=0;i<b;i++)
					{
						if(i==0)
							str = "var ImgHeight = new Array(\""+(ImgHeight[i]+216)+"\",";
							else
								if(i==b-1)
									str = "\""+(ImgHeight[i]+216)+"\")";
									else
										str = "\""+(ImgHeight[i]+216)+"\",";

						ThumbnailWnd.document.writeln(str);
					}

				for(i=0;i<b;i++)
					{
						if(i==0)
							str = "var ImgTxt = new Array(\""+ImgTxt[i]+"\",";
							else
								if(i==b-1)
									str = "\""+ImgTxt[i]+"\")";
									else
										str = "\""+ImgTxt[i]+"\",";

						ThumbnailWnd.document.writeln(str);
					}

// **********************
				ThumbnailWnd.document.writeln("function gotoImage(nImageIndex)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("if(nImageIndex == nImageCur)");
				ThumbnailWnd.document.writeln("return;");
				ThumbnailWnd.document.writeln("window.resizeTo(ImgWidth[nImageIndex],ImgHeight[nImageIndex])\;");
				ThumbnailWnd.document.writeln("document.images[\"OriginalImage\"].src=\'" + place + "\'+ImgName[nImageIndex]\;");
				ThumbnailWnd.document.writeln("document.images[\"OriginalImage\"].alt=ImgName[nImageIndex]\;");


				ThumbnailWnd.document.writeln("var name_text = document.getElementById('infotext')\;");
				ThumbnailWnd.document.writeln("name_text.innerHTML=ImgTxt[nImageIndex]\;");



				ThumbnailWnd.document.writeln("document.title='фотоальбом'\;");
				ThumbnailWnd.document.writeln("nImageCur=nImageIndex;");

				//************************************************
				ThumbnailWnd.document.writeln("if(nImageCur == 0)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"home\").style.backgroundImage=\"" + place2 + "home_red.png\')\"\;");
				ThumbnailWnd.document.writeln("document.getElementById(\"back\").style.backgroundImage=\"" + place2 + "back_red.png\')\"\;");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("else");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"home\").style.backgroundImage=\"" + place2 + "home_blue.png\')\"\;");
				ThumbnailWnd.document.writeln("document.getElementById(\"back\").style.backgroundImage=\"" + place2 + "back_blue.png\')\"\;");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("if(nImageCur == b-1)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"end\").style.backgroundImage=\"" + place2 + "end_red.png\')\"\;");
				ThumbnailWnd.document.writeln("document.getElementById(\"forward\").style.backgroundImage=\"" + place2 + "forward_red.png\')\"\;");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("else");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"end\").style.backgroundImage=\"" + place2 + "end_blue.png\')\"\;");
				ThumbnailWnd.document.writeln("document.getElementById(\"forward\").style.backgroundImage=\"" + place2 + "forward_blue.png\')\"\;");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("if(bAutoPlay == 1)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"play\").style.backgroundImage=\"" + place2 + "play_red.png\')\"\;");
				ThumbnailWnd.document.writeln("document.getElementById(\"stop\").style.backgroundImage=\"" + place2 + "stop_blue.png\')\"\;");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("if(bAutoPlay == 0)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("document.getElementById(\"stop\").style.backgroundImage=\"" + place2 + "stop_red.png\')\";");
				ThumbnailWnd.document.writeln("}");
				//************************************************
				ThumbnailWnd.document.writeln("}");

// Ooieoey ia?aoiaa e ia?aiio eaa?o********
				ThumbnailWnd.document.writeln("function gotoFirst()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("gotoImage(0);");
				ThumbnailWnd.document.writeln("}");

				//********************************************************
				ThumbnailWnd.document.writeln("function gotoLast()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("gotoImage(b-1);");
				ThumbnailWnd.document.writeln("}");
				//********************************************************
				ThumbnailWnd.document.writeln("function gotoPrevious()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("if(nImageCur>0)");
				ThumbnailWnd.document.writeln("gotoImage(nImageCur-1);");
				ThumbnailWnd.document.writeln("}");
				//********************************************************
				ThumbnailWnd.document.writeln("function gotoNext()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("if(nImageCur<b-1)");
				ThumbnailWnd.document.writeln("gotoImage(nImageCur+1);");
				ThumbnailWnd.document.writeln("}");
				//********************************************************
				ThumbnailWnd.document.writeln("function startPlay()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("	if(bAutoPlay == 0)");
				ThumbnailWnd.document.writeln("	{");
				ThumbnailWnd.document.writeln("		bAutoPlay = 1;");
				ThumbnailWnd.document.writeln("		loopPlay();");
				ThumbnailWnd.document.writeln("	}");
				ThumbnailWnd.document.writeln("}");
				//***************************************************
				ThumbnailWnd.document.writeln("function loopPlay()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("	var i=nImageCur+1;");
				ThumbnailWnd.document.writeln("	if(i==b)");
				ThumbnailWnd.document.writeln("		i=0;");
				ThumbnailWnd.document.writeln("	gotoImage(i);");
				ThumbnailWnd.document.writeln("	timer = setTimeout(\"loopPlay()\",8000);");
				ThumbnailWnd.document.writeln("}");
				//****************************************************
				ThumbnailWnd.document.writeln("function clearTimer()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("	if(timer)");
				ThumbnailWnd.document.writeln("	{");
				ThumbnailWnd.document.writeln("		clearTimeout(timer);");
				ThumbnailWnd.document.writeln("		timer = null;");
				ThumbnailWnd.document.writeln("		bAutoPlay = 0;");
				ThumbnailWnd.document.writeln("	}");
				ThumbnailWnd.document.writeln("}");
				//***********************************************************
				ThumbnailWnd.document.writeln("function stopPlay()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("	if(bAutoPlay)");
				ThumbnailWnd.document.writeln("	{");
				ThumbnailWnd.document.writeln("document.getElementById(\"play\").style.backgroundImage=\"" + place2 + "play_blue.png\')\";");
				ThumbnailWnd.document.writeln("document.getElementById(\"stop\").style.backgroundImage=\"" + place2 + "stop_red.png\')\";");
				ThumbnailWnd.document.writeln("		clearTimer();");
				ThumbnailWnd.document.writeln("		gotoImage(nImageCur);");
				ThumbnailWnd.document.writeln("	}");
				ThumbnailWnd.document.writeln("}");

// *********************************************************
				ThumbnailWnd.document.writeln("function doPrint()");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("if(bAutoPlay)");
				ThumbnailWnd.document.writeln("{");
				ThumbnailWnd.document.writeln("clearTimer();");
				ThumbnailWnd.document.writeln("}");
				ThumbnailWnd.document.writeln("window.print();");
				ThumbnailWnd.document.writeln("}");

				ThumbnailWnd.document.writeln("<\/script>");
//***********************************************

				ThumbnailWnd.document.writeln("<style type=\"text\/css\">");
				ThumbnailWnd.document.writeln("#uprl {width:350px\; margin:10px auto\;}");
				ThumbnailWnd.document.writeln("#uprl a {width:45px\; height:45px\; display:inline-block\; text-decoration:none\;}");
				ThumbnailWnd.document.writeln("#uprl a:hover {background-position:right\;}");
				ThumbnailWnd.document.writeln("#home {background:" + place2 + "home_blue.png\')\;}");
				ThumbnailWnd.document.writeln("#back {background:" + place2 + "back_blue.png\')\;}");
				ThumbnailWnd.document.writeln("#forward {background:" + place2 + "forward_blue.png\')\;}");
				ThumbnailWnd.document.writeln("#end {background:" + place2 + "end_blue.png\')\;}");
				ThumbnailWnd.document.writeln("#play {background:" + place2 + "play_blue.png')\;}");
				ThumbnailWnd.document.writeln("#stop {background:" + place2 + "stop_red.png\')\;}");
				ThumbnailWnd.document.writeln("#doprint {background:" + place2 + "ptint_blue.png\')\;}");
				ThumbnailWnd.document.writeln("#infotext {text-align:center\; color:#fff\; font-size:13pt\;}");
	
				ThumbnailWnd.document.writeln("<\/style>");
				//************************************************
				ThumbnailWnd.document.writeln("<\/head>");
				//************************************************
				ThumbnailWnd.document.writeln("<body style=\"color:#fff\; background:#000\;\" onunload=\"clearTimer()\">");

// ************************************************
				ThumbnailWnd.document.writeln("<div style=\"margin:4px auto\; text-align:center\;\">");
				ThumbnailWnd.resizeTo(ImgWidth[m_nCurPage]+90,ImgHeight[m_nCurPage]+216);
				str = "<img src=" + place + ImgName[m_nCurPage] + " border=\"0\" name=\"OriginalImage\" alt=\"\">";
				ThumbnailWnd.document.writeln(str);
				ThumbnailWnd.document.writeln("<\/div>");
				str = "<p id=\"infotext\">"+ImgTxt[m_nCurPage]+"<\/p>";
				ThumbnailWnd.document.writeln(str);

// **********************************************
				ThumbnailWnd.document.writeln("<div id=\"uprl\">");
				ThumbnailWnd.document.writeln("<a id=\"home\" href=\"javascript:gotoFirst()\" title=\"первый кадр\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"back\" href=\"javascript:gotoPrevious()\" title=\"назад\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"forward\" href=\"javascript:gotoNext()\" title=\"вперед\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"end\" href=\"javascript:gotoLast()\" title=\"последний кадр\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"play\" href=\"javascript:startPlay()\" title=\"слайд-шоу\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"stop\" href=\"javascript:stopPlay()\" title=\"остановить\"><\/a>");
				ThumbnailWnd.document.writeln("<a id=\"doprint\" href=\"javascript:doPrint()\" title=\"печать\"><\/a>");
				ThumbnailWnd.document.writeln("<\/div>");


				ThumbnailWnd.document.writeln("<\/body>");
				ThumbnailWnd.document.writeln("<\/html>");
				ThumbnailWnd.document.close();
		}
	}

// **********************************
function CloseBrowser()
{
	if(ThumbnailWnd && !ThumbnailWnd.closed)
	{
		ThumbnailWnd.close();
		ThumbnailWnd=null;
	}
}