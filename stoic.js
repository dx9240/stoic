function ignore(event) {
    event.stopImmediatePropagation()
    event.preventDefault()
}

const EVENT_TYPES = [
    'mousedown',
    'mouseup',
    'click',
    'keydown',
    'keyup',
    'keypress',
]

EVENT_TYPES.forEach((event_type) => document.addEventListener(event_type, ignore))
