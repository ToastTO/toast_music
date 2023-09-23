const dropBtn1 = document.getElementById("dropBtn1");

// dropBtn1.addEventListener("click", rotate(dropBtn1))
// dont need (), just pass a function name.
dropBtn1.addEventListener("click", () => { toggle_rotate_class(dropBtn1); })

function toggle_rotate_class(dropBtn) {
    dropBtn.classList.toggle("rotate");
}