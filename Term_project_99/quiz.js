
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
 ["Son derece düzenleyim ve bu konuda obsesifim.", "Ara ki bulasın. Çok dağınığımdır, toplamaya üşenirim hep.", "Süper toplu değilim ama kendime göre bir düzenim var tabii.", "Obsesif olmasam da düzenliyim ben de."],
 ["Yemek seçerim ama bazı yemekleri çok iyi pişiririm ve çok severim.","Önüme ne gelse yerim.","Acayip bir damak zevkim var!","Çok yemek seçmem ama her gün aksatmadan yediğim şeyler de var."],
[" Kimse üzüldüğünü anlayamaz.", "Saklamaya çalışsam da yüzümden ve davranışlarımdan okunur.", "Yerlere kapanıp ağlarım.", "Bakmayın sert görünüşüme üzüldüğümü anlarsınız mutlaka..."],
["Hayır. ", "Her ortamın neşe kaynağıyım ben!", "En yakın arkadaşımla komik olmam yeter de artar bile.", "Yerine göre."],
["Deneyimim yok.", "Ağlamasınlar diye aklıma gelen her şeyi denerim.", "Çok iyi ilgilenebilirim.", "Bakmayı çok severim ama bazen cidden bunalırım."],
["Her şeyi kurallarına göre oynayıp milleti uyuz eden.","Oyundan en çok keyfi alan ve hırsı olmayan.","Herkesle anlaşabilen mükemel bir eşim","Ne hırslıyımdır ne çok coşarım."],
["Asla geç kalmam.","Bir mazerete gerek yok ne olmuş ki geç kalmışsam esprili bir giriş yaparım.","Çörek almaya gitmiştim.","Geç kalmamaya çalışırım her zaman örnek olmak isterim."]
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

function puanlama(){

    options = document.getElementsByName("option");
    for(var i=0; i<options.length; i++){
        if(options[i].checked){

            if(i==0){
                toplamA++;
            }else if(i==1){
                toplamB++;
            }else if (i==2){
                toplamC++;
            }else if (i==3){
                toplamD++;
            }
           
        }
    }
    if(sayi==9){
        document.getElementById("quizekran").style.visibility = "hidden" ;
        document.getElementById("ekran3").style.visibility = "visible" ;

        console.log(toplam);
        if(toplamA==4 || (toplamA>=toplamB &&toplamA >=toplamC &&toplamA>=toplamD )){
            testsonuc="Raymond Holt "
            console.log("holt");
            document.getElementById("resultImg").src = sonucgifs[0];
            document.getElementById("resultText1").innerText = "Reymond Holt";

        }else if(toplamB==4 || (toplamB>=toplamA &&toplamB>=toplamC &&toplamB>=toplamD )){
            testsonuc="Jake Peralta "
            console.log("jake");
            document.getElementById("resultImg").src = sonucgifs[1];
            document.getElementById("resultText1").innerText = "Jake Peralta";

        }else if(toplamC==4 || (toplamC>=toplamA &&toplamC>=toplamB &&toplamC>=toplamD )){
            testsonuc="Charles Boyle "
            console.log("Boyle");
            document.getElementById("resultImg").src = sonucgifs[2];
            document.getElementById("resultText1").innerText = "Charles Boyle";

        }else if(toplamD==4 || (toplamD>=toplamA &&toplamD>=toplamB &&toplamD>=toplamC)){
            console.log("Terry Jeffords");
            document.getElementById("resultImg").src = sonucgifs[3];
            document.getElementById("resultText1").innerText = "Terry Jeffords";
            
        }
       
   

    }
    //console.log("toplam puan :" +toplam);
    console.log("A : " +toplamA);
    console.log("B : " +toplamB);
    console.log("C : " +toplamC);
    console.log("D : " +toplamD);

}




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
    //puanlama();
    puanlama();
    op0.checked = false;
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;

    
    }

    function sonuc(){
        console.log(toplam);
        if(8<=toplam && toplam<=14){
            
        }else if(12<=toplam && toplam<=21){
            console.log("jake");
        }else if(16<=toplam && toplam<=28){
            console.log("boyle");
        }else if(20<=toplam && toplam<=35){
            console.log("terry");
        }
    }
 

function play() {
    let audio1 = new Audio('theme.mp3');
    audio1.play();
}
function gecisYap(){
    document.getElementById("ekran1").style.visibility = "hidden" ;
    document.getElementById("quizekran").style.visibility = "visible" ;
    play();
    }

degistir();


 
