function ignore(event) {
    event.stopImmediatePropagation()
    event.preventDefault()
    event.returnValue = '';
}

const WINDOW_EVENT_TYPES = [
    'beforeunload',
]
WINDOW_EVENT_TYPES.forEach((event_type) => window.addEventListener(event_type, ignore))

const DOCUMENT_EVENT_TYPES = [
    'auxclick',
    'click',
    'keydown',
    'keypress',
    'keyup',
    'mousedown',
    'mouseup',
]
DOCUMENT_EVENT_TYPES.forEach((event_type) => document.addEventListener(event_type, ignore))
