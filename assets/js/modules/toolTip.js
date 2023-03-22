import tippy from 'tippy.js';

export default function toolTip() {
    const parent = '[data-tippy-content]';
    
    tippy(parent, {
        theme: 'favorite',
        arrow: false,
    });
}