function swapClass(id){
    if (document.getElementById(id).classList.contains("button-top")){
        document.getElementById(id).classList.remove("button-top");
        document.getElementById(id).classList.add("button-bottom");
    }
    else {
        document.getElementById(id).classList.remove("button-bottom");
        document.getElementById(id).classList.add("button-top");
    }

}


function ShowHidenService(id, serviceID) {
    elem = document.getElementById(serviceID);
    state = elem.style.display; 
    ExBtn = document.querySelectorAll('.service-expandButton')
    ActiveEl = document.querySelectorAll('.service-description')
    BtnToSwap = document.getElementById(id)
    if (BtnToSwap.classList.contains('button-top')) {
        BtnToSwap.classList.remove('button-top')
        BtnToSwap.classList.remove('BigBtn')
        BtnToSwap.classList.add('button-bottom')
    }
    else {
        BtnToSwap.classList.remove('button-bottom')
        BtnToSwap.classList.add('button-top')
        BtnToSwap.classList.add('BigBtn')
    }

    for (var i = 0; i < ActiveEl.length; i++){
        display = ActiveEl[i].style.display;
        if (display == 'grid') {
            ActiveEl[i].style.display = 'none'
            ExBtn[i].classList.remove('button-top')
            ExBtn[i].classList.remove('BigBtn')
            ExBtn[i].classList.add('button-bottom')
        }     
    }
    if (state =='grid') {
        elem.style.display='none'; 
    }
    else {
        elem.style.display='grid';
    }
}

function ShowHidenInfo(id, infoDescID) {
    swapClass(id);
    elem = document.getElementById(infoDescID);
    state = elem.style.display; 
    if (state =='block') {
        elem.style.display='none'; 
    }
    else {
        elem.style.display='block';
    }
}



