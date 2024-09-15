const container = document.querySelector(".container");

for (let i=0; i<256; i++){

    const div = document.createElement("div");

    div.className = "dots"

    div.addEventListener("mouseover", (event) => {
        div.style.backgroundColor = "black"
    });

    container.appendChild(div);

}