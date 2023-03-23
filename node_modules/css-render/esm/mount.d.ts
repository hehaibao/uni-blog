import { CNode, CssRenderInstance, CRenderProps, MountId, SsrAdapter } from './types';
declare function getCount(el: HTMLStyleElement): number | null;
declare function setCount(el: HTMLStyleElement, count: number): void;
export { getCount, setCount };
export declare function unmount(intance: CssRenderInstance, node: CNode, id: MountId, count: boolean): void;
declare function mount<T extends CRenderProps, U extends SsrAdapter | undefined = undefined>(instance: CssRenderInstance, node: CNode, id: MountId, props: T, head: boolean, count: boolean, boost: boolean, force: boolean, ssrAdapter?: U): U extends undefined ? HTMLStyleElement : void;
export { mount };
