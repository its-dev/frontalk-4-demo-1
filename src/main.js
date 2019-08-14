import { CategoryComponent } from './features/category'

import img1 from '../public/images/1.png' 
import img2 from '../public/images/2.png' 
import img3 from '../public/images/3.png' 
import img4 from '../public/images/4.png' 
import img5 from '../public/images/5.png'

export const category1 = new CategoryComponent({
    init: '',
    id: 'category1',
    title: 'Category 1',
})
export const category2 = new CategoryComponent({
    init: '',
    id: 'category2',
    title: 'Category 2',
})
export const category3 = new CategoryComponent({
    init: [],
    id: 'category3',
    title: 'Category 3',
})

const init = () => {
    // fetch('/')
    category1.control.addImages([img1, img2, img3, img4, img5])
    category2.control.addImages([img1, img2])
    category3.control.addImages([img1, img2, img3, img4])
}

document.addEventListener('DOMContentLoaded', init)
