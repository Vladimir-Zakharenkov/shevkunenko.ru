var ImgName = new Array(
"001.jpg",
"002.jpg",
"003.jpg",
"004.jpg",
"005.jpg",
"006.jpg",
"007.jpg",
"008.jpg",
"009.jpg",
"010.jpg",
"011.jpg",
"012.jpg",
"013.jpg",
"014.jpg",
"015.jpg",
"016.jpg",
"017.jpg",
"018.jpg",
"019.jpg",
"020.jpg",
"021.jpg",
"022.jpg",
"023.jpg",
"024.jpg",
"025.jpg",
"026.jpg",
"027.jpg",
"028.jpg",
"029.jpg",
"030.jpg",
"031.jpg",
"032.jpg",
"033.jpg",
"034.jpg",
"035.jpg",
"036.jpg",
"037.jpg",
"038.jpg",
"039.jpg",
"040.jpg",
"041.jpg",
"042.jpg",
"043.jpg",
"044.jpg",
"045.jpg",
"046.jpg",
"047.jpg",
"048.jpg",
"049.jpg",
"050.jpg",
"051.jpg",
"052.jpg",
"053.jpg",
"054.jpg",
"055.jpg",
"056.jpg")

var ImgWidth = new Array(
600,
453,
540,
567,
567,
475,
464,
479,
600,
600,
600,
800,
600,
600,
502,
542,
557,
477,
457,
553,
469,
453,
800,
800,
471,
570,
476,
553,
553,
600,
800,
800,
600,
600,
600,
461,
462,
565,
468,
455,
600,
568,
600,
568,
507,
463,
445,
600,
447,
600,
534,
444,
454,
549,
476,
600)

var ImgHeight = new Array(
450,
720,
720,
760,
760,
800,
760,
760,
599,
567,
620,
500,
620,
601,
680,
700,
740,
720,
770,
700,
760,
760,
620,
559,
760,
760,
760,
700,
700,
583,
476,
630,
613,
599,
428,
720,
720,
720,
740,
700,
640,
700,
700,
700,
700,
700,
720,
611,
740,
620,
700,
740,
700,
740,
740,
604)

var ImgTxt = new Array(
"Излюбленное оружие московских бандитов",
"Робин Гуд из Грозного - лидер чеченской группировки<br>Николай Сулейманов (кличка Хоза)",
"Гена Лобжанидзе, известный в Москве под кличкой Шрам",
"Крючков и Ломиташвили познакомились на зоне.<br>Там и был сформирован костяк банды.<br>Справа - жертва убийц, авторитет из Жуковского Лука",
"Сохин из Балашихи (на фото справа) убивал не просто так.<br>Он интересовался автомобилями&hellip;",
"Патриарх воровского мира Бриллиант.<br>Север - своеобразный уникум, он &quot;коронован&quot; и &quot;пиковыми&quot; и славянами.<br>Гога Ереванский пал жертвой внутриклановых разборок.<br>Квежо: убийцы знали, зачем шли.<br>Один из самых молодых законников долгопрудненский Серебряный",
"Глобус был застрелен у входа в спорткомплекс &quot;Олимпийский&quot;.<br>Внизу оптический прицел винтовки киллера",
"Вор Ростик.<br>Внизу законники Песо, Горбатый, Блондин",
"Шурик Устимовский",
"Грузинский вор Пипия очень любил спортивные автомобили",
"Законники Александр Алятин (Устимовский) и Виктор Зверев (Зверь).<br>Оба похоронены в Электростали",
"На могиле Бузулуцкого собираются друзья и молодые авторитеты.<br>Справа Арсен Микеладзе погиб в Тбилиси. Убийцы не найдены",
"Поборник воровской идеи Калина (на снимке в центре)<br>любил шумные ресторанные застолья",
"Задержание авторитета Мансура Шелковникова на Шабаловке",
" ",
"Лидер славянского движения Шурик Захар",
"Олег Шишканов:<br>&quot;Нарушений не допускал, в агентурной связи не состоял, вежлив, спокоен.&quot;",
"Шишкан и Горбатый (Сергей Степунин)<br>- встреча двух поколений воров в законе",
"Вверху: Андрей Исаев (Расписной) среди братвы в &quot;Догомысе&quot;.<br>В глубине в темных очках, как и его патрон, телохранитель Росписи Шайхуллин, погибший во время взрыва на Осеннем бульваре. Внизу слева направо:<br>Александр Сухоруков, Андрей  Исаев, и неизвестный",
"Вор в законе Андрей Исаев (Расписной)",
"Сергей Липчанский (Сибиряк) может в скором будущем стать самым значительным вором славянского крыла",
"Сергей Липчанский (Сибиряк) может в скором будущем стать самым значительным вором славянского крыла",
"Павел Захаров (Цируль) сменил в конце 1994 года свой роскошный особняк в Жостове на камеру следственного изолятора в Лефортове",
"Жизнь братвы, как и у всех, состоит из праздников и будней",
"Сергей Фролов в Балашихе считался авторитетом новой формации.<br>Он тяготел к коммерции и мог бы стать настоящим &quot;крестным отцом&quot;",
"Сергей Фролов в Балашихе считался авторитетом новой формации.<br>Он тяготел к коммерции и мог бы стать настоящим &quot;крестным отцом&quot;",
"Чеченский вор в законе Султан Даудов чувствовал себя в Серпуховском СИЗО чуть менее комфортно, чем в родной Балашихе",
"Тело убитого Султана киллеры пытались спрятать, забросав снегом",
"Наследник воровских связей Султана балашихинский законник Хусейн Слепой",
"Гера Старостин и Александр Сухоруков в окружении подруг",
"Купив первые авто, Сухой и Гера сфотографировались с друзьями - Свиридом и братьями Пирушко",
"Завадский, Коротаев и Мансуров - дружеское застолье.<br>Справа: памятник Олегу Коротаеву на Ваганьковском кладбище",
"Фёдор Ишин (кличка Бешеный)",
"Леонид Завадский - пловец большого бизнеса",
"Завадский много путешествовал и в роскоши себе не отказывал",
"Завадский много путешествовал и в роскоши себе не отказывал",
"Мансур сочинял стихи, сидя на нарах следственного изолятора",
"Мансур чувствовал себя непринужденно в любой обстановке",
"Нурик - пионер секс-бизнеса столицы и его многочисленные подружки",
"Жертва разборок подольских сутенерш",
"Эту фотографию похищенного коммерсанта прислали его жене:<br>&quot;В следующий раз отправим голову в  корзине&hellip;&quot;",
"Владислав Ваннер (Бобон)",
"Телохранитель Владислава Ваннера (Бобона) Михаил Глодин",
"&quot;Монархист&quot; с наколками Михаил Устинович",
"Александр Солоник в период следствия в &quot;Матроссской тишине&quot;",
"Александр Солоник до ареста",
"Вячеслав Иваньков (Япончик) вверху с Дато Ташкентским перед отлетом за границу, внизу - в оперативной части тюрьмы Тулуна",
"Вячеслав Иваньков (Япончик) после задержания в США",
"Отари Квантришвили и Тайванчик на одной из презентаций.<br>Винтовка с оптическим прицелом, приклад которой разбил киллер",
"Отарик не боялся никого и ничего",
"&quot;Некоронованный&quot; Сильвестр",
"После взрыва &quot;Мерседеса-600&quot;, в котором находился самый крутой московский мафиози",
"Главарь банды новокузнецких киллеров Барыбин",
"Самая опасная банда новокузнецких киллеров задержана МУРом в 1995 году.<br>Среди парней из качалки один из &quot;чистильщиков&quot; банды Кондрашов",
"Жертвами разборок становятся не только члены группировок, но и их верные псы",
"Рекордсменка киднеппинга Настя Краснобаева.<br>На момент похищения рэкетирами ей было лишь девять месяцев")

var ThumbnailWnd;
var kolvo = 56;
var place = "\/img\/raznoe\/modestov\/";
var place2 = "url(\'\/img\/fotoalbom\/";