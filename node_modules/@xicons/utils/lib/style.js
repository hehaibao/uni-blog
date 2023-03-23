"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountStyle = void 0;
const css_render_1 = require("css-render");
const { c } = css_render_1.CssRender();
const style = c('.xicon', {
    width: '1em',
    height: '1em',
    display: 'inline-flex'
}, [
    c('svg', {
        width: '1em',
        height: '1em'
    }),
    c('svg:not([fill])', {
        fill: 'currentColor'
    })
]);
const mountStyle = () => {
    style.mount({ id: 'xicons-icon' });
};
exports.mountStyle = mountStyle;
