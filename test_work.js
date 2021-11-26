const btn=document.querySelector('.btn');
const idBtn=document.querySelector('.id_btn');
const MyResultFetch=document.querySelector('.my_result');
const  AnswerFetch=document.querySelector('.answer-fetch');
btn.addEventListener('click',()=>{
    const options={
        method:'GET',
    mode:'cors',
    headers:{
           "Content-Type": "application/json"
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response)=>{
        const result=response.json();
        console.log('result', result);
        return result;
    })
   
    
    .then((data)=>{;
        console.log(data);
        function arrayShow(data, id){
       const index=Math.trunc(data.length/2);  
    const element=data[index];
    if(element.id===id){
        console.log (element)      
    }
    else if(element.id>id){
        let arrayLeft=data.slice(0, index);
        for (i=0;i<arrayLeft.length;i++){
             let elementLeft=arrayLeft[i]
            if(elementLeft.id===id){
             console.log (elementLeft);
        }
        }
        return element.id;  
    }else if (element.id<id){
         let arrayRight=data.slice(index);
        for (j=0;j<arrayRight.length;j++){
            let elementRight=arrayRight[j]
            if(elementRight.id===id){
           console.log(elementRight);
            }
        }
        return  element.id;
    }else {
        return null;
    }
        }
   arrayShow(data, 60);
    })
    
    .catch(()=>{console.log('error')});
    
});

idBtn.addEventListener('click',()=>{
    const options={
        method:'GET',
    mode:'cors',
    headers:{
           "Content-Type": "application/json"
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response)=>{
       const resultText=response.text();
        return resultText;
       
    })
    .then((Answer)=>{
        AnswerFetch.textContent=Answer;
    })
    .catch(()=>{console.log('error')});
    
});
 