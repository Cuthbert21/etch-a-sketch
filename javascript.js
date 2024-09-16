const container = document.querySelector(".container");

for (let i=0; i<256; i++){

    const div = document.createElement("div");

    div.className = "dots"

    div.style.opacity = 0;

    div.addEventListener("mouseover", (event) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = `#${randomColor}`;
        let divOpacity = parseFloat(div.style.opacity);
        div.style.opacity = `${divOpacity = divOpacity + 0.1}`;
    });

    container.appendChild(div);

}

const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        while (true) {
    let input = parseInt(prompt("Enter a number between 1-100", "64"));
    if (input > 0 && input < 101) {
        console.log('Correct!');
        let result = input * input;
    let size = 480 / input;
    container.innerHTML = '';

    for (let i=0; i<result; i++){

        const div = document.createElement("div");
    
        div.className = "dots"

        div.setAttribute("style", `height: ${size}px; width: ${size}px;`);

        div.style.opacity = 0;
    
        div.addEventListener("mouseover", (event) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = `#${randomColor}`;
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.1}`;
        });
    
        container.appendChild(div);
    
    }
        break;
      }
    }
    
});