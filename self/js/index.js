var allItems = document.querySelectorAll('.item');



var arrResult = [];

for (var i = 0; i<allItems.length;i++){
    var div = allItems[i];

    var temColor = Math.random()*360;
    div.style.backgroundColor = 'hsl('+temColor+',50%,50%)';


    console.group(i);
    console.log(div);
    console.dir(div.querySelector('a'));
    console.dir(div.querySelector('span'));
    console.groupEnd();

    var a = div.querySelector('a');
    var span = div.querySelector('span');
    var obj = {};
    if(i%3==0){
        if(a){
            a.classList.add('red');
        }
    }
    if(i==3){

    }

    obj.hasA = false;
    obj.hasSpan = false;
    obj.aHref = "";
    obj.aTxt = "";
    obj.spanTxt = "";

    if(a){
        obj.hasA = true;
        obj.aHref = a.href;
        obj.aTxt = a.innerText;
    }
    if(span){
        obj.hasSpan = true;
        obj.spanTxt = span.innerText;
    }
    console.dir(obj);
    arrResult.push(obj);

}
creatElements(arrResult);

function creatElements(data){
    data.forEach(function(item){
        if(item.hasA){
            var a = document.createElement('a');
            a.innerText = item.aTxt;
            a.href = item.aHref;
            a.classList.add('order');

            var img = document.createElement('img');
            img.style.width = "100px";

            img.src = "images/33.png";
            a.appendChild(img);

            document.body.appendChild(a);
        }
    })
}

function btnClicked(e){
    var firstA = document.querySelector('a');
    firstA.click();
}