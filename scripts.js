function changephone() {
    var phone = document.getElementById('inpsvgphone').value.replace(/[^\d]/g, '');
    if (phone[0] == '3' && phone[1] == '8' && phone[2] == '0') { phone = '+380'+phone.slice(3, 12);
    }else if(phone[0] == '0'){phone = '+380'+phone.slice(1, 10);
    }else{phone = '+380'+phone.slice(0,  9);}

    phone = phone.slice(0, 3) + '-' + phone.slice(3, 6) + '-' + phone.slice(6, 8) + '-' + phone.slice(8, 10) + '-' + phone.slice(10, 13);
    
    document.getElementById('inpsvgphone').value = phone;
    var phones = document.getElementsByClassName('svgphone');
    for (var i = 0; i <= phones.length - 1; i++) {
        phones[i].innerHTML = phone;
    }
}
function changename() {
    var name = document.getElementById('inpsvgname').value.toUpperCase();
    var fs = 48;
    document.getElementById('inpsvgname').value = name;
    var names = document.getElementsByClassName('svgname');
    if (name.length>8) {fs = 30;
    }else if (name.length==8) {fs = 34;
    }else if (name.length==7) {fs = 38;
    }else if (name.length==6) {fs = 42;}
    for (var i = 0; i <= names.length - 1; i++) {
        names[i].innerHTML = name;
        names[i].setAttribute('font-size', fs);
    }
}
function changecolor() {
    var elems = document.getElementsByClassName('clrelinsvg');
    var elems2 = document.getElementsByClassName('obvclrelinsvg');
    var color;
    if (document.getElementById('inpcolor').value == 1) {
        document.getElementById('gr1').setAttribute('style', 'stop-opacity:1; stop-color:#D7B56D');
        document.getElementById('gr2').setAttribute('style', 'stop-opacity:1; stop-color:#FEFEFE');
        document.getElementById('gr3').setAttribute('style', 'stop-opacity:1; stop-color:#D7B56E');
        document.getElementById('gr4').setAttribute('style', 'stop-opacity:1; stop-color:#FEFEFE');
        color = '#0F0F0F';
    }else if (document.getElementById('inpcolor').value == 2) {
        document.getElementById('gr1').setAttribute('style', 'stop-opacity:1; stop-color:#CACACA');
        document.getElementById('gr2').setAttribute('style', 'stop-opacity:1; stop-color:#FEFEFE');
        document.getElementById('gr3').setAttribute('style', 'stop-opacity:1; stop-color:#CACACA');
        document.getElementById('gr4').setAttribute('style', 'stop-opacity:1; stop-color:#FEFEFE');
        color = '#0F0F0F';
    }else if (document.getElementById('inpcolor').value == 3) {
        document.getElementById('gr1').setAttribute('style', 'stop-opacity:1; stop-color:#D17C37');
        document.getElementById('gr2').setAttribute('style', 'stop-opacity:1; stop-color:#F5E6D8');
        document.getElementById('gr3').setAttribute('style', 'stop-opacity:1; stop-color:#D17C37');
        document.getElementById('gr4').setAttribute('style', 'stop-opacity:1; stop-color:#F5E6D8');
        color = '#0F0F0F';
    }else if (document.getElementById('inpcolor').value == 4) {
        document.getElementById('gr1').setAttribute('style', 'stop-opacity:1; stop-color:#222222');
        document.getElementById('gr2').setAttribute('style', 'stop-opacity:1; stop-color:#575757');
        document.getElementById('gr3').setAttribute('style', 'stop-opacity:1; stop-color:#222222');
        document.getElementById('gr4').setAttribute('style', 'stop-opacity:1; stop-color:#575757');
        color = '#F7F7F7';
    }
    for (var i = elems.length - 1; i >= 0; i--) {elems[i].setAttribute('fill', color);}
    for (i = elems2.length - 1; i >= 0; i--) {elems2[i].setAttribute('style', 'stroke:'+color+';stroke-width:5;');}
}


function changeshape() {
    document.getElementById('round').classList.add('dnone');
    document.getElementById('kost1').classList.add('dnone')
    document.getElementById('heart').classList.add('dnone')
    if (document.getElementById('inpshape').value == 1) {
        document.getElementById('round').classList.remove('dnone');
    }else if (document.getElementById('inpshape').value == 2) {
        document.getElementById('kost1').classList.remove('dnone');
    }else if (document.getElementById('inpshape').value == 3) {
        document.getElementById('heart').classList.remove('dnone');  
    }
}

function changesize() {
    var elems = document.getElementsByClassName('svgsize');
    var prices = document.getElementsByClassName('price');
    if (document.getElementById('inpsize').value == 1) {
        for (var i = elems.length - 1; i >= 0; i--) {elems[i].innerHTML = '40mm'}
        for (var i = prices.length - 1; i >= 0; i--) {prices[i].innerHTML = '179 UAH'}
    } else if (document.getElementById('inpsize').value == 2) {
        for (var i = elems.length - 1; i >= 0; i--) {elems[i].innerHTML = '60mm'}
        for (var i = prices.length - 1; i >= 0; i--) {prices[i].innerHTML = '199 UAH'}
    } else if (document.getElementById('inpsize').value == 3) {
        for (var i = elems.length - 1; i >= 0; i--) {elems[i].innerHTML = '80mm'}
        for (var i = prices.length - 1; i >= 0; i--) {prices[i].innerHTML = '219 UAH'}
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}