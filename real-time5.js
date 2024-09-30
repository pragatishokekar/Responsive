var arr=[
    {dp:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww" , story:" https://images.unsplash.com/photo-1720692739658-ee952b1aebb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1720697022909-a7eead3d9eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"},

    {dp:"https://images.unsplash.com/photo-1621784564114-6eea05b89863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1719850361670-2897ae0f8b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://plus.unsplash.com/premium_photo-1708110770197-8b09b02efb3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1678188466220-07a6f395ecfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MDB8fHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1551024739-78e9d60c45ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1719915240873-49ce126be732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDJ8fHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1616207133278-0064d3440006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1681412205320-c4d8d51dc7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzF8fHxlbnwwfHx8fHw%3D"},


]
var clutter=""
arr.forEach(function(elem,idx){
clutter += `<div class="st-1">
<img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector(".story").innerHTML=clutter

document.querySelector(".story").addEventListener("click",function(dets){
   
    document.querySelector(".full-scr").style.display="block"
    document.querySelector(".full-scr").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-scr").style.display="none"
    }, 2000);

});