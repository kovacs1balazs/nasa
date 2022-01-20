async function getDataByDate (date) {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=rOboIyTBLDidALhrwy30CYE91ZayozWrmOSxOjPH&date=${date}`);
    return await res.json();
};

const render = (loadedData) => {
    let date = loadedData.date;
    const img = loadedData.hdurl;
    const title = loadedData.title;
    const descr = loadedData.explanation;
          
    document.querySelector('H1').innerText = title;
    document.querySelector('H3').innerText = descr;
    document.querySelector('p').innerText = date;
    document.querySelector('img').src = img;
};

async function init () {
    const initialData = await getDataByDate("")
    console.log(initialData);
    render(initialData); 
    
    const currentDate = new Date().toISOString().slice(0, 10);
    console.log(currentDate)
    const dateSel = document.getElementById("dateSelectInput");
    dateSel.max = currentDate;
            
    dateSel.addEventListener("change", async (e) => {
        date = e.target.value
        console.log(date)
        const nextData = await getDataByDate(date)
        console.log(nextData);
        render(nextData)
    });                      
}; 


window.addEventListener('load', init);

