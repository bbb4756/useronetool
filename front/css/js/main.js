window.addEventListener('DOMContentLoaded',init)

function init(){
    // 슬라이드
    let imgPos = 0
    let position = 0
    // img-area 크기
    const imgWidth = 1200
    const images = document.querySelector('#pic_box')

    function plusposition() {
        imgPos = imgPos + 1
        position -= imgWidth
        images.style.transform = `translateX(${position}px)`
    }

    function minusposition() {
        imgPos = imgPos - 3
        position += imgWidth * 3
        images.style.transform = `translateX(${position}px)`
    }

    function loop() {
        setTimeout(loop, 3000)
        if (imgPos >= 0 && imgPos < 3) {
            plusposition()
        } else if (imgPos === 3) {
            minusposition()
        }
    }

    function go() {
        setTimeout(loop,3000)
    }
    go()


}