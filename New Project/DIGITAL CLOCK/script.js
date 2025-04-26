const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const hour = document.querySelector(".hour");
const day = ['sun','mon','tue','wed','thrus','fri','sat'];

const getTime = ()=>{
    const now = new Date();


    const ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs === 0 ? 12 : hrs;

    
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    const currentday = now.getDay();
    day.forEach((day , index) =>{
        const el = document.querySelector('.' + day);
        if (index === currentday) {
            el.style.color = 'red'; // highlight today
            el.style.fontWeight = 'bold';
        } else {
            el.style.color = ''; // reset others
            el.style.fontWeight = '';
        }
    })
}

getTime();
setInterval(getTime, 1000);
