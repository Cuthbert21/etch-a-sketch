const container = document.querySelector(".container");

for (let i=0; i<256; i++){

    const div = document.createElement("div");

    div.className = "dots"

    div.addEventListener("mouseover", (event) => {
        div.style.backgroundColor = "black"
    });

    container.appendChild(div);

}

const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
    let input = parseInt(prompt("Enter a number between 1-100", "16"));
    let result = input * input;
    let size = 480 / input;
    container.innerHTML = '';

    for (let i=0; i<result; i++){

        const div = document.createElement("div");
    
        div.className = "dots"

        div.setAttribute("style", `height: ${size}px; width: ${size}px;`);
    
        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "black"
        });
    
        container.appendChild(div);
    
    }
});