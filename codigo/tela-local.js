function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "star0.png.webp") {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star1.png.webp";
    document.getElementById("s4").src = "star1.png.webp";
    document.getElementById("s5").src = "star1.png.webp";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star1.png.webp";
    document.getElementById("s4").src = "star1.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 4;
   }}
   
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "star0.png.webp") {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star1.png.webp";
    document.getElementById("s4").src = "star1.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star1.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "star0.png.webp") {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star1.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star0.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 2;
   }}
   
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "star0.png.webp") {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star1.png.webp";
    document.getElementById("s3").src = "star0.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star0.png.webp";
    document.getElementById("s3").src = "star0.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 1;
   }}
   
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "star0.png.webp") {
    document.getElementById("s1").src = "star1.png.webp";
    document.getElementById("s2").src = "star0.png.webp";
    document.getElementById("s3").src = "star0.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "star0.png.webp";
    document.getElementById("s2").src = "star0.png.webp";
    document.getElementById("s3").src = "star0.png.webp";
    document.getElementById("s4").src = "star0.png.webp";
    document.getElementById("s5").src = "star0.png.webp";
    avaliacao = 0;
   }}
   
    document.getElementById('rating').innerHTML = avaliacao;
   
   }