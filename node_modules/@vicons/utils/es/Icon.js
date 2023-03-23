import { defineComponent, renderSlot, computed, h, onBeforeMount, inject } from 'vue';
import { mountStyle } from '@xicons/utils';
import { iconConfigInjectionKey, iconConfigProviderProps } from './IconConfigProvider';
import { defaultTag } from './config';
export const Icon = defineComponent({
    name: 'Icon',
    props: iconConfigProviderProps,
    setup(props, { slots }) {
        const IconConfigProvider = inject(iconConfigInjectionKey, null);
        const mergedSizeRef = computed(() => {
            var _a;
            const _size = (_a = props.size) !== null && _a !== void 0 ? _a : IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.size;
            if (_size === undefined) {
                return undefined;
            }
            if (typeof _size === 'number' || /^\d+$/.test(_size))
                return `${_size}px`;
            return _size;
        });
        const mergedColorRef = computed(() => {
            const { color } = props;
            if (color === undefined) {
                if (IconConfigProvider) {
                    return IconConfigProvider.color;
                }
                return undefined;
            }
            return color;
        });
        const mergedTagRef = computed(() => {
            var _a;
            const { tag } = props;
            if (tag === undefined) {
                return (_a = IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.tag) !== null && _a !== void 0 ? _a : defaultTag;
            }
            return tag;
        });
        onBeforeMount(() => {
            mountStyle();
        });
        return () => h(mergedTagRef.value, {
            class: 'xicon',
            style: {
                color: mergedColorRef.value,
                fontSize: mergedSizeRef.value
            }
        }, [
            renderSlot(slots, 'default')
        ]);
    }
});
