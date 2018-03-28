$(()=>{
    const input=$(".input");
    const box=document.querySelector('.box');
    const data=[
        {title:"中国香港",content:"非常美"},
        {title:"中国海南",content:"过分过分过分"},
        {title:"日本东京",content:"非常美"},
        {title:"日本广岛",content:"地方的所得税"},
        {title:"美国纽约",content:"非辅导辅导费"},
        {title:"美国洛杉矶",content:"非常下次下次重新334美"},
        {title:"英国轮顿",content:"非常34434美"},
        {title:"法国巴黎",content:"非常343434美"},
    ];
    let arr=[];
    let bodyContent=""
    input.change((e)=>{
       arr=data.filter((v)=>e.target.value.trim()!==''&&v.title.includes(e.target.value));
       bodyContent=arr.map((v)=>`<li>${v.title}</li>`).join('');
       box.innerHTML=bodyContent;
    })
})


