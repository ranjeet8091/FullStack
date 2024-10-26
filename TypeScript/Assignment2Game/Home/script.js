function HandleSubmit(event) {
    event.preventDefault();
    const level = document.querySelector('input[name="label"]:checked').value;
    console.log(level);

    if (level === "Beginner") {
        window.location.href = "/TypeScript/Assignment2Game/Level/Beginner/index.html"; 
    } else if (level === "Medium") {
        window.location.href = "/TypeScript/Assignment2Game/Level/Intermediate/index.html"; 
    } else if (level === "Expert") {
        window.location.href = "/TypeScript/Assignment2Game/Level/Higher/index.html"; 
    }
}
