/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import hash from './hash';
import { render } from './render';
import { createElement, queryElement, removeElement } from './utils';
if (window) {
    window.__cssrContext = {};
}
function getCount(el) {
    const count = el.getAttribute('mount-count');
    if (count === null)
        return null;
    return Number(count);
}
function setCount(el, count) {
    el.setAttribute('mount-count', String(count));
}
export { getCount, setCount };
export function unmount(intance, node, id, count) {
    const { els } = node;
    // If target is undefined, unmount all styles
    if (id === undefined) {
        els.forEach(removeElement);
        node.els = [];
    }
    else {
        const target = queryElement(id);
        // eslint-disable-next-line
        if (target && els.includes(target)) {
            const mountCount = getCount(target);
            if (!count) {
                if (mountCount !== null) {
                    console.error(`[css-render/unmount]: The style with target='${id}' is mounted in no-count mode.`);
                }
                else {
                    removeElement(target);
                    node.els = els.filter(el => el !== target);
                }
            }
            else {
                if (mountCount === null) {
                    console.error(`[css-render/unmount]: The style with target='${id}' is mounted in count mode.`);
                }
                else {
                    if (mountCount <= 1) {
                        removeElement(target);
                        node.els = els.filter(el => el !== target);
                    }
                    else
                        setCount(target, mountCount - 1);
                }
            }
        }
    }
}
function addElementToList(els, target) {
    els.push(target);
}
function mount(instance, node, id, props, head, count, boost, force, ssrAdapter
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) {
    if (boost && !ssrAdapter) {
        if (id === undefined) {
            console.error('[css-render/mount]: `id` is required in `boost` mode.');
            // @ts-expect-error
            return;
        }
        const cssrContext = window.__cssrContext;
        if (!cssrContext[id]) {
            cssrContext[id] = true;
            render(node, instance, props, boost);
        }
        // @ts-expect-error
        return;
    }
    let target;
    const { els } = node;
    let style;
    if (id === undefined) {
        style = node.render(props);
        id = hash(style);
    }
    if (ssrAdapter) {
        ssrAdapter(id, style !== null && style !== void 0 ? style : node.render(props));
        // @ts-expect-error
        return;
    }
    const queriedTarget = queryElement(id);
    if (force || queriedTarget === null) {
        target = queriedTarget === null ? createElement(id) : queriedTarget;
        if (style === undefined)
            style = node.render(props);
        target.textContent = style;
        // @ts-expect-error
        if (queriedTarget !== null)
            return;
        if (head) {
            const firstStyleEl = document.head.getElementsByTagName('style')[0] || null;
            document.head.insertBefore(target, firstStyleEl);
        }
        else {
            document.head.appendChild(target);
        }
        if (count) {
            setCount(target, 1);
        }
        addElementToList(els, target);
    }
    else {
        const mountCount = getCount(queriedTarget);
        if (count) {
            if (mountCount === null) {
                console.error(`[css-render/mount]: The style with id='${id}' has been mounted in no-count mode.`);
            }
            else {
                setCount(queriedTarget, mountCount + 1);
            }
        }
        else {
            if (mountCount !== null) {
                console.error(`[css-render/mount]: The style with id='${id}' has been mounted in count mode.`);
            }
        }
    }
    // @ts-expect-error
    return queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : target;
}
export { mount };
