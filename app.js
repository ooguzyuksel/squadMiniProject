let data = [
    {
        name: "Oguzhan",
        age: "28",
        department: "Full Stack"
    },
    {
        name: "Sarah",
        age: "27",
        department: "Front-End"
    },
    {
        name: "Michael",
        age: "23",
        department: "Back-End"
    },
    {
        name: "Alexa",
        age: "32",
        department: "IoT"
    },
    {
        name: "Cortana",
        age: "35",
        department: "AI"
    },
    {
        name: "Siri",
        age: "33",
        department: "Voice Assitant"
    }
];

let information = document.querySelector("#info");



const showButton = document.querySelector(".btn");
showButton.addEventListener("click", () => {
    let details = data.map((item) => {
        return "<div>" + item.name + " is " + item.age + " years old. His department is, " + item.department + "</div>";
    });

    information.innerHTML = details.join("\n");
});


showButton.addEventListener("mouseenter", () => {
    if (!showButton.classList.contains("hover")) {
        showButton.classList.add("hover");
    };
});

showButton.addEventListener("mouseleave", () => {
    if (showButton.classList.contains("hover")) {
        showButton.classList.remove("hover");
    };
});
