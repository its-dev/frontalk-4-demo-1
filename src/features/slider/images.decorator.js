const template = ({src}) => (`
    <img src="${src}" alt="#" draggable="false"/>
`)

export function ImagesDecorator(init) {
    let elem = this.elem
    let bodyElem = this.bodyElem
    let imageElems = []
    let images = [...init]

    const render = () => {
        bodyElem.innerHTML = ''
        imageElems = []
        images.forEach(src => {
            let slide = document.createElement('div')
            slide.classList.add('SliderSelect__slide')
            slide.innerHTML = template({src})
            imageElems.push(slide)
            bodyElem.appendChild(slide)
        })
        resize()  
    }

    const resize = () => {
        let width = elem.clientWidth
        imageElems.forEach(img => {
            img.style.width = width + 'px'
            img.style.height = width + 'px'
        })
    }

    const onSetImages = (data) => {
        images = data
        render()
    }

    Object.defineProperty(this, 'images', {
		get: () => images,
		set: onSetImages
	})

    this.addImages = (data = []) => {
        onSetImages([...images, ...data])
    }

    render()
    window.addEventListener('resize', resize)
}
