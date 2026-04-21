const button = document.getElementById("toggle-theme");

button.addEventListener("click", changeTheme);

function changeTheme() {

    const isDark = document.body.style.backgroundColor === "black";

    if (isDark) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        button.textContent = "Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.textContent = "Light Mode";
    }
}