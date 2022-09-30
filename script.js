const bt=document.getElementById('btn');
bt.addEventListener('click',(e)=>{
    if(bt.innerHTML=='SWITCH ON')
    {
        bt.innerHTML='SWITCH OFF';
        document.getElementById('image').src="https://images.freeimages.com/images/previews/07c/light-bulb-2-1427493.jpg";
        document.getElementById('body').style.background="yellow";
    }
    else if(bt.innerHTML=='SWITCH OFF')
    {
        bt.innerHTML='SWITCH ON';
        document.getElementById('image').src="https://images.freeimages.com/images/previews/70a/light-bulb-1-1427502.jpg";
        document.getElementById('body').style.background="black";
    }
});