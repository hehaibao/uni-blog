"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconConfigProvider = exports.iconConfigInjectionKey = exports.iconConfigProviderProps = void 0;
const vue_1 = require("vue");
exports.iconConfigProviderProps = {
    size: [String, Number],
    color: String,
    tag: String
};
exports.iconConfigInjectionKey = Symbol('IconConfigInjection');
exports.IconConfigProvider = vue_1.defineComponent({
    name: 'IconConfigProvider',
    props: exports.iconConfigProviderProps,
    setup(props, { slots }) {
        vue_1.provide(exports.iconConfigInjectionKey, props);
        return () => vue_1.renderSlot(slots, 'default');
    }
});
