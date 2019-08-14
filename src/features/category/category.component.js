import { Store } from '../../core'
import { SliderComponent } from '../slider'

export function CategoryComponent({
    init, id, title
}) {
    this.store = new Store(init)
    this.control = new SliderComponent({
        elem: document.getElementById(id),
        title,
        onChange: (state) => this.store.state = state
    })

    const onChange = (state) => {
        console.log(state)
    }

    this.store.subscribe(onChange)
}
