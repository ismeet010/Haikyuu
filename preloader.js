window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader-container")
    loader.classList.add("loader-container--hidden")
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    })
});