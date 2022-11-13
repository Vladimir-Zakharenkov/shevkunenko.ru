// Включение/выключение скрытого элемента
function inverse_elem(id) {
  elem=document.getElementById(id);
  if (elem.style.display=="none") {
    elem.style.display="";
  }
  else {
    elem.style.display="none";
  }
}

// Добавление смайлика
function addsmile(f,n) {
  elem=document.getElementById(f);
  elem.value=elem.value+' (:'+n+':) ';
  elem.focus();
}

// Отображение линейки страничек
function pagebar(username,curr,last) {
  var res=' | ';
  for(i=1; i<=last; i++) {
    if(i==curr) res=res+'<font class="col1">'+i+'</font> | ';
    else res=res+'<a href="index.php?'+username+'&'+i+'">'+i+'</a> | ';
  }
  document.write(res);
}

// Добавление UBB кода
function addubb(f,n) {
  if(n==1) {
    txt=prompt('Введите текст, который хотите выделить жирным','');
    if(!txt) return;
    res='[b]'+txt+'[/b]';
  }
  if(n==2) {
    txt=prompt('Введите текст, который хотите выделить курсивом','');
    if(!txt) return;
    res='[i]'+txt+'[/i]';
  }
  if(n==3) {
    txt=prompt('Введите текст, который хотите подчеркнуть','');
    if(!txt) return;
    res='[u]'+txt+'[/u]';
  }
  if(n==4) {
    txt=prompt('Введите текст, который хотите перечеркнуть','');
    if(!txt) return;
    res='[s]'+txt+'[/s]';
  }
  if(n==5) {
    txt=prompt('Введите автора цитаты','');
    if(!txt) return;
    txt2=prompt('Введите текст цитаты','');
    if(!txt2) return;
    res='[q='+txt+']'+txt2+'[/q]';
  }
  if(n==6) {
    txt=prompt('Введите URL ссылку (например, http://pupkin.narod.ru)','http://');
    if(!txt) return;
    txt2=prompt('Введите название ссылки (например, \'сайт Пупкина\')','');
    if(!txt2) return;
    res='[url='+txt+']'+txt2+'[/url]';
  }
  if(n==7) {
    txt=prompt('Введите e-mail адрес (например, pupkin@narod.ru)','');
    if(!txt) return;
    txt2=prompt('Введите описание (например, \'почта Пупкина\')','');
    if(!txt2) return;
    res='[email='+txt+']'+txt2+'[/email]';
  }
  if(n==8) {
    txt=prompt('Введите URL картинки (например, http://pupkin.narod.ru/image.jpg)','http://');
    if(!txt) return;
    res='[img]'+txt+'[/img]';
  }
  if(n==9) {
    txt=prompt('Задайте цвет: black, maroon, green, olive, navy, purple, teal, gray, silver, red, lime, yellow, blue, fuchsia, aqva, white','');
    if(!txt) return;
    txt2=prompt('Введите текст, который хотите выделить этим цветом','');
    if(!txt2) return;
    res='[color='+txt+']'+txt2+'[/color]';
  }
  if(n==10) {
    txt=prompt('Задайте размер шрифта: 1 - малый, 2 - обычный, 3 - большой, ... , 6 - огромный','');
    if(!txt) return;
    txt2=prompt('Введите текст, который хотите оформить этим шрифтом','');
    if(!txt2) return;
    res='[size='+txt+']'+txt2+'[/size]';
  }
  if(n==11) {
    txt=prompt('Введите название шрифта: Verdana, Arial, Helvetica, Impact и т.п.','');
    if(!txt) return;
    txt2=prompt('Введите текст, который хотите оформить этим шрифтом','');
    if(!txt2) return;
    res='[font='+txt+']'+txt2+'[/font]';
  }
  if(n==12) {
    txt=prompt('Введите текст, выравниваемый по левому краю','');
    if(!txt) return;
    res='[l]'+txt+'[/l]';
  }
  if(n==13) {
    txt=prompt('Введите текст, выравниваемый по центру','');
    if(!txt) return;
    res='[center]'+txt+'[/center]';
  }
  if(n==14) {
    txt=prompt('Введите текст, выравниваемый по правому краю','');
    if(!txt) return;
    res='[r]'+txt+'[/r]';
  }
  if(n==15) {
    txt=prompt('Введите текст, выравниваемый по обоим краям','');
    if(!txt) return;
    res='[j]'+txt+'[/j]';
  }
  if(n==16) {
    txt=prompt('Введите текст, который хотите записать в нижнем регистре','');
    if(!txt) return;
    res='[sub]'+txt+'[/sub]';
  }
  if(n==17) {
    txt=prompt('Введите текст, который хотите записать в верхнем регистре','');
    if(!txt) return;
    res='[sup]'+txt+'[/sup]';
  }
  if(n==18) {
    res='[hr]\n';
  }
  if(n==19) {
    res='[list]';
    txt=prompt('Введите первый пункт маркированного списка','');
    if(!txt) return;
    while(txt) {
      res=res+'[*]'+txt;
      txt=prompt('Введите следующий пункт маркированного списка (Enter - конец)','');
    }
    res=res+'[/list]';
  }
  if(n==20) {
    res='[list=1]';
    txt=prompt('Введите первый пункт нумерованного списка','');
    if(!txt) return;
    while(txt) {
      res=res+'[*]'+txt;
      txt=prompt('Введите следующий пункт нумерованного списка (Enter - конец)','');
    }
    res=res+'[/list]';
  }
  if(n==21) {
    window.open('ubb.php');
  }
  elem=document.getElementById(f);
  elem.value=elem.value+res;
  elem.focus();
}