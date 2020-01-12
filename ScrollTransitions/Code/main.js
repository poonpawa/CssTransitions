//detecting scrolling event
window.addEventListener("scroll", e => {
    console.log(window.scrollY);
    if (window.scrollY > 750 && window.scrollY < 1300) {
        let scrollAmount = (window.scrollY - 1300) / 4;
        //prettier-ignore
        document.querySelector(".text-content").style.transform = `translateY(${scrollAmount}%)`;

        if (window.scrollY < 900) {
            let shiftRight = window.scrollY - 725;
            let shiftDown = window.scrollY - 748;
            //prettier-ignore
            document.querySelector("#tab").style.transform = `translate3d(${shiftRight}px, ${shiftDown}px, 0px)`;
        }
    }
});
