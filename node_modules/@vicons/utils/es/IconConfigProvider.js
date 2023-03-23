import { defineComponent, renderSlot, provide } from 'vue';
export const iconConfigProviderProps = {
    size: [String, Number],
    color: String,
    tag: String
};
export const iconConfigInjectionKey = Symbol('IconConfigInjection');
export const IconConfigProvider = defineComponent({
    name: 'IconConfigProvider',
    props: iconConfigProviderProps,
    setup(props, { slots }) {
        provide(iconConfigInjectionKey, props);
        return () => renderSlot(slots, 'default');
    }
});
