ds=["img/Oguretz.png",  "img/Peretz.jpg", "img/Pomidor.png",  "img/Rediska.jpg",  "img/Svekla.png", "img/kabachok.jpg"];
s=[0,1,2,3,4,5,0,1,2,3,4,5];
var cart1 = 0;
var cart2 = 0;
var click = 1;
var count=0;
for (i = 0; i <= 11; i++) {
    
    idImg = document.getElementById("td" + i);
    idImg.className="non";

}
function start() {
    var p = 0;
    count=0;
    for (i = 0; i <= 11; i++) {
        var num = s[i];
        idImg = document.getElementById("pic" + i);
        idImg.src = "img/zkartiu.jpg";
        idImg = document.getElementById("td" + i);
        idImg.className="down";

    }
}
function para(number) {
   if(click==1){
    idImg = document.getElementById("pic" + number);
    idImg.src = ds[s[number]];
     click++;
    cart1=number;
}else if(click==2){//надо именно проверять, что бы потом победа
    //не щелкалась
    idImg = document.getElementById("pic" + number);
    idImg.src = ds[s[number]];
    click=1;
    cart2=number;   
interval=setInterval(udal,1000);

}

}

function udal(){

if(s[cart1]==s[cart2]){
   count+=2;
    idImg = document.getElementById("pic" + cart1);
    idImg.src = "img/spacer.gif";  
    idImg = document.getElementById("pic" + cart2);
    idImg.src = "img/spacer.gif"; 
    idImg = document.getElementById("td" + cart1);
    idImg.className="non";  
    idImg = document.getElementById("td" + cart2);
    idImg.className="non";
    if(count==12){
    alert("Победа!!!");
    //пробуем здесь победу+надо убрать щелчок
    //сделать 
    click=5;
      td2.style.width='500px';
    td2.style.height='500px';  
    pic2.src = "img/win.gif"; 
    
     
    }
    

}else{
    idImg = document.getElementById("pic" + cart1);
    idImg.src = "img/zkartiu.jpg";  
    idImg = document.getElementById("pic" + cart2);
    idImg.src = "img/zkartiu.jpg"; 
    idImg = document.getElementById("td" + cart1);
    idImg.className="down";  
    idImg = document.getElementById("td" + cart2);
    idImg.className="down";

}
clearInterval(interval);
}
/*for(i=0; i<=11; i++){
var num=s[i];
idImg=document.getElementById("pic"+i);
idImg.src=ds[num]; */