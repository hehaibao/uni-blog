"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const vue_1 = require("vue");
const utils_1 = require("@xicons/utils");
const IconConfigProvider_1 = require("./IconConfigProvider");
const config_1 = require("./config");
exports.Icon = vue_1.defineComponent({
    name: 'Icon',
    props: IconConfigProvider_1.iconConfigProviderProps,
    setup(props, { slots }) {
        const IconConfigProvider = vue_1.inject(IconConfigProvider_1.iconConfigInjectionKey, null);
        const mergedSizeRef = vue_1.computed(() => {
            var _a;
            const _size = (_a = props.size) !== null && _a !== void 0 ? _a : IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.size;
            if (_size === undefined) {
                return undefined;
            }
            if (typeof _size === 'number' || /^\d+$/.test(_size))
                return `${_size}px`;
            return _size;
        });
        const mergedColorRef = vue_1.computed(() => {
            const { color } = props;
            if (color === undefined) {
                if (IconConfigProvider) {
                    return IconConfigProvider.color;
                }
                return undefined;
            }
            return color;
        });
        const mergedTagRef = vue_1.computed(() => {
            var _a;
            const { tag } = props;
            if (tag === undefined) {
                return (_a = IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.tag) !== null && _a !== void 0 ? _a : config_1.defaultTag;
            }
            return tag;
        });
        vue_1.onBeforeMount(() => {
            utils_1.mountStyle();
        });
        return () => vue_1.h(mergedTagRef.value, {
            class: 'xicon',
            style: {
                color: mergedColorRef.value,
                fontSize: mergedSizeRef.value
            }
        }, [
            vue_1.renderSlot(slots, 'default')
        ]);
    }
});
