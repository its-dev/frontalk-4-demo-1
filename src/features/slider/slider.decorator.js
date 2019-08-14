import { SwipeDetect } from '../../core'

export function SliderDecorator() {
    let elem = this.elem
    let bodyElem = this.bodyElem
    let leftBtn = this.leftBtn
    let rightBtn = this.rightBtn
    
    this.current = 0

    const render = () => {
        rightBtn.classList.remove('hide')
        leftBtn.classList.remove('hide')
        if (this.current === 0) {
            leftBtn.classList.add('hide')
        } else if (this.current === this.images.length - 1) {
            rightBtn.classList.add('hide')
        }
        bodyElem.style.transform = `translateX(-${this.current * elem.clientWidth}px)`
    }

    const onSlide = (num) => {
        let cur = this.current + num
        if (cur < 0) {
            cur = 0
        } else if (cur >= this.images.length) {
            cur = this.images.length - 1
        }
        this.current = cur
        render()
    }
    
    const onNext = () => onSlide(1)
    const onPrev = () => onSlide(-1)

    render()
    leftBtn.addEventListener('click', onPrev)
    rightBtn.addEventListener('click', onNext)
    window.addEventListener('resize', render)

    const swipe = new SwipeDetect(elem)
    swipe.onEnd = () => {
        if (swipe.direct === 'left') {
            onNext()
        } else if (swipe.direct === 'right') {
            onPrev()
        }
    }
    swipe.init()
}
