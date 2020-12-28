
var sayi=0;
var toplam=0;
var toplamA=0;
var toplamB=0;
var toplamC=0;
var toplamD=0;

let questions = ["Arkadaşların seni hangi şekilde tanımlar?",
"Düzen ve temizlik konusunda nasılsın?", 
"Yemek işlerinde nasılsın?",
"Seni üzen olaylar karşısında nasıl tepkiler veriyorsun?",
"Çevrendeki insanlar senin komik olduğunu düşünüyor mu?    ",
"Çocuk bakıcılığı konusunda nasılsın?",
"Arkadaşlarınla tabu oynarken hangi tipsin?",
"Diyelim ki işe veya okula geç kaldın, mazeretin ne olur?"];

let answers=[ ["Ciddi ve titiz", "Serbest ve şakacı", "Hassas ve şirin", "Sorumluluk sahibi"],
 ["Son derece düzenleyim ve bu konuda obsesifim.", "Ara ki bulasın. Çok dağınığımdır, toplamaya üşenirim hep.", "Süper toplu değilim,kendime göre bir düzenim var tabii.", "Obsesif olmasam da düzenliyim ben de."],
 ["Yemek seçerim, ama bazılarını çok iyi pişiririm severim.","Önüme ne gelse yerim.","Acayip bir damak zevkim var!","Çok yemek seçmem ama her gün yediğim şeyler de var."],
[" Kimse üzüldüğünü anlayamaz.", "Saklamaya çalışsam da jest ve mimiklerden okunur.", "Yerlere kapanıp ağlarım.", "Bakmayın sert görünüşüme üzüldüğümü anlarsınız."],
["Hayır. ", "Her ortamın neşe kaynağıyım ben!", "En yakın arkadaşımla komik olmam yeter de artar bile.", "Yerine göre."],
["Deneyimim yok.", "Ağlamasınlar diye aklıma gelen her şeyi denerim.", "Çok iyi ilgilenebilirim.", "Bakmayı çok severim ama bazen cidden bunalırım."],
["Her şeyi kurallarına göre oynayıp milleti uyuz eden.","Oyundan en çok keyfi alan ve hırsı olmayan.","Herkesle anlaşabilen mükemel bir eşim","Ne hırslıyımdır ne çok coşarım."],
["Asla geç kalmam.","Bir mazerete gerek yok esprili bir giriş yaparım.","Çörek almaya gitmiştim.","Geç kalmamaya çalışırım her zaman örnek olmak isterim."]
];




let gifs =["https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru1.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru2.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru3.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru4.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru5.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru6.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru7.gif",
"https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/soru8.gif"
]

let sonucgifs=[
    "https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/sonuc_holt2.gif",
    "https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/sonuc_jake2.gif",
    "https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/sonuc_boyle.gif",
    "https://seymakotan.github.io/JS_AdvProg/Term_project_99/gif/sonuc_terry.gif",
]

var options;
var testsonuc;





var options;    
function degistir(){
   
    if(sayi!=8){
       
    document.getElementById("qnum").innerHTML = questions[sayi];
    document.getElementById("testImg").src = gifs[sayi];
    var choices =answers[sayi];
    for(var i = 0; i < choices.length; i++) {
        document.getElementById("choice" + i).innerHTML = choices[i];
        }
    }
    sayi++;

    op0.checked = false;
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;
  
    if(sayi==9){
        document.getElementById("quizekran").style.visibility = "hidden" ;
        document.getElementById("ekran3").style.visibility = "visible" ;
     
    }

    
    }

function gecisYap(){
    document.getElementById("ekran1").style.visibility = "hidden" ;
    document.getElementById("quizekran").style.visibility = "visible" ;
    }

degistir();



 

