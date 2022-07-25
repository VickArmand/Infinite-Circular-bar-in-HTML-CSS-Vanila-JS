const infinitecircle= document.getElementById('circular');
const maincontent= document.getElementById('text');
window.onload=(()=>{

   
const startint=setInterval(() => {
console.log('Time in');

    }, 3000);
    setTimeout(() => {
        var op=1
        while(op>=0)
        {
            infinitecircle.style.opacity=String(op)
            op--;
          
        }    
        
        console.log('Time out');
        clearInterval(startint);
        infinitecircle.style.display='none';
       
    }, 3000);
    const interval2=setInterval(()=>{
        console.log('Time in');
    },3000)
    setTimeout(()=>{
        var op=0
        while(op<=1)
        {
            maincontent.style.opacity=String(op)
            op++;
            
          
        }
        console.log('Time out');
        clearInterval(interval2)
    },3000)




})