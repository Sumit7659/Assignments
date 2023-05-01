document.body.style.backgroundColor='#FDF4F5'

let a0=document.getElementById('first1')
let create=document.createElement('h1')
create.innerHTML='<h1 id="header"><b>Assignemnt & Projects</b></h1>'
a0.prepend(create)
let a=document.getElementById('header')
a.style.textAlign="center"
a.style.fontStyle='oblique'
a.style.color='#E8A0BF'
a.style.marginBottom='10px'
a.style.marginTop='20px'

let b=document.getElementsByClassName('card')
for(let i=0;i<b.length;i++){
    b[i].style.padding='10px'
    b[i].style.backgroundColor='lightcyan'
}

let c=document.getElementById('first')
let d=document.getElementById('second')
let e=document.getElementById('third')
c.style.textAlign='center'
d.style.textAlign='center'
e.style.textAlign='center'
c.style.fontStyle='italic'
d.style.fontStyle='italic'
e.style.fontStyle='italic'
c.style.color='mediumvioletred'
d.style.color='mediumvioletred'
e.style.color='mediumvioletred'

let links=document.getElementsByClassName('btn')
for(let k=0;k<links.length;k++){

    links[k].style.backgroundColor='lightpink'
    links[k].style.border='1px solid darkorchid'
    links[k].style.color='aquamarine'
    links[k].style.font='italic bold 20px arial,serif'
    links[k].style.marginLeft='30px'
}

let p=document.getElementsByClassName('card-text')
for(let m=0;m<p.length;m++){
    p[m].style.color='darkslategray'
}

let img=document.getElementsByClassName('card-img-top')
img.setAttribute('alt','ASSIGNMENTS')