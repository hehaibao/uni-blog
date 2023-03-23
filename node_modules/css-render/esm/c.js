import { render } from './render';
import { mount, unmount } from './mount';
function wrappedRender(props) {
    return render(this, this.instance, props);
}
// do not guard node calling, it should throw an error.
function wrappedMount(options = {}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) {
    const { target, id, ssr, props, count = false, head = false, boost = false, force = false } = options;
    const targetElement = mount(this.instance, this, id !== null && id !== void 0 ? id : target, props, head, count, boost, force, ssr);
    return targetElement;
}
function wrappedUnmount(options = {}) {
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const { id, target, delay = 0, count = false } = options;
    if (delay === 0)
        unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count);
    else {
        setTimeout(() => unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count), delay);
    }
}
const createCNode = function (instance, $, props, children) {
    return {
        instance,
        $,
        props,
        children,
        els: [],
        render: wrappedRender,
        mount: wrappedMount,
        unmount: wrappedUnmount
    };
};
export const c = function (instance, $, props, children) {
    if (Array.isArray($)) {
        return createCNode(instance, { $: null }, null, $);
    }
    if (Array.isArray(props)) {
        return createCNode(instance, $, null, props);
    }
    else if (Array.isArray(children)) {
        return createCNode(instance, $, props, children);
    }
    else {
        return createCNode(instance, $, props, null);
    }
};
