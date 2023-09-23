const dropBtn1 = document.getElementById("dropBtn1");
const dropBtn2 = document.getElementById("dropBtn2");
const dropBtn3 = document.getElementById("dropBtn3");
const dropBtn4 = document.getElementById("dropBtn4");
const dropBtn5 = document.getElementById("dropBtn5");

// dropBtn1.addEventListener("click", rotate(dropBtn1))
// dont need (), just pass a function name.
dropBtn1.addEventListener("click", () => { toggle_rotate_class(dropBtn1); })
dropBtn2.addEventListener("click", () => { toggle_rotate_class(dropBtn2); })
dropBtn3.addEventListener("click", () => { toggle_rotate_class(dropBtn3); })
dropBtn4.addEventListener("click", () => { toggle_rotate_class(dropBtn4); })
dropBtn5.addEventListener("click", () => { toggle_rotate_class(dropBtn5); })

function toggle_rotate_class(dropBtn) {
    dropBtn.classList.toggle("rotate");
}