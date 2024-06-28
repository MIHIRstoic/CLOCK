const hourhand=document.getElementById("hourhand");
const minutehand=document.getElementById("minutehand");
const secondhand=document.getElementById("secondhand");
setInterval(Update,1000);
function Update(){
    const time=new Date();
    const hour=time.getHours();
    const minute=time.getMinutes();
    const second=time.getSeconds();
    const hDegree=hour*30+minute*.5;
    const mDegree=minute*6;
    const sDegree=second*6;
    hourhand.style.transform=`rotate(${hDegree}deg)`;
    minutehand.style.transform=`rotate(${mDegree}deg)`;
    secondhand.style.transform=`rotate(${sDegree}deg)`;
    console.log(hour,minute,second,hDegree,mDegree,sDegree)
}