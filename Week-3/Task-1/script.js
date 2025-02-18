let lights = ["red", "yellow", "green"];
let durations = [5, 2, 5];
let currentIndex = 0;
let timer = durations[currentIndex];

function changeLight() {
    lights.forEach(light => {
        document.getElementById(light).style.backgroundColor = "gray";
        document.getElementById(`${light}-timer`).innerText = "";
    });
    
    let currentLight = lights[currentIndex];
    document.getElementById(currentLight).style.backgroundColor = currentLight;
    let countdown = timer;
    document.getElementById(`${currentLight}-timer`).innerText = countdown;
    document.getElementById(`${currentLight}-timer`).style.color = "white";

    let interval = setInterval(() => {
        countdown--;
        document.getElementById(`${currentLight}-timer`).innerText = countdown;
        document.getElementById(`${currentLight}-timer`).style.color = "white";
        if (countdown <= 0) {
            clearInterval(interval);
        }
    }, 1000);
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % lights.length;
        timer = durations[currentIndex];
        changeLight();
    }, timer * 1000);
}

changeLight();