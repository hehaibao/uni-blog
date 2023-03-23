import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
export declare const iconConfigProviderProps: {
    readonly size: PropType<string | number | undefined>;
    readonly color: StringConstructor;
    readonly tag: StringConstructor;
};
declare type IconConfigInjection = ExtractPropTypes<typeof iconConfigProviderProps>;
export declare const iconConfigInjectionKey: InjectionKey<IconConfigInjection>;
export declare const IconConfigProvider: import("vue").DefineComponent<{
    readonly size: PropType<string | number | undefined>;
    readonly color: StringConstructor;
    readonly tag: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    tag?: string | undefined;
    color?: string | undefined;
    size?: string | number | undefined;
}>, {}>;
export {};
