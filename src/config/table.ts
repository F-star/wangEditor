/**
 * @description table相关配置
 * @author huanghao
 */

const defaultTableAttrsObj: { [index: string]: string } = {
    border: '0',
    cellpadding: '0',
    cellspacing: '0',
    style: 'table-layout: fixed; width: 0;',
}

export function replaceSPAttrs(el: HTMLElement) {
    for (const attr in el.attributes) {
        el.removeAttribute(attr)
    }
    for (const key in defaultTableAttrsObj) {
        el.setAttribute(key, defaultTableAttrsObj[key])
    }
}

export const minRowWidth = 40
export const defaultRowWidth = '100px'
export const defaultTableAttrs =
    'border="0" cellpadding="0" cellspacing="0" style="table-layout: fixed; width: 0;"'
