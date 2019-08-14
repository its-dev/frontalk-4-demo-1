import { ImagesDecorator } from './images.decorator'
import { SliderDecorator } from './slider.decorator'

const template = ({title}) => (`
    <div class="SliderSelect__head">
        <div class="SliderSelect__title">${title}</div>
        <div class="SliderSelect__actions">
            <button type="button" value="add">Выбрать</button>
            <button type="button" value="download">Загрузить</button>
        </div>
    </div>
    <div class="SliderSelect__wrap">
        <div class="SliderSelect__body"></div>
    </div>
    <div class="SliderSelect__arr SliderSelect__arr--left"></div>
    <div class="SliderSelect__arr SliderSelect__arr--right"></div>
`)

export function SliderComponent({
    elem, images = [], title = '', onChange = () => {}
}) {
    this.elem = elem
    this.elem.innerHTML = template({title})
    
    this.bodyElem = this.elem.querySelector('.SliderSelect__body')
    this.leftBtn = this.elem.querySelector('.SliderSelect__arr--left')
    this.rightBtn = this.elem.querySelector('.SliderSelect__arr--right')
    this.addBtn = this.elem.querySelector('button[value="add"]')

    ImagesDecorator.call(this, images)
    SliderDecorator.call(this)

    this.addBtn.addEventListener('click', () => {
        onChange(this.images[this.current])
    })
}
