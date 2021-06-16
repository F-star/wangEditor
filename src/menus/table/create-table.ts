/**
 * @description 创建tabel
 * @author lichunlin
 */

import { EMPTY_P } from '../../utils/const'
import Editor from '../../editor/index'
import $ from '../../utils/dom-core'

class CreateTable {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor
    }

    /**
     * 执行创建
     * @param rowValue 行数
     * @param colValue 列数
     */
    public createAction(rowValue: number, colValue: number) {
        const editor = this.editor

        //不允许在有序列表中添加table
        let $selectionElem = $(editor.selection.getSelectionContainerElem())
        const $ul = $($selectionElem.elems[0]).parentUntilEditor('UL', editor)
        const $ol = $($selectionElem.elems[0]).parentUntilEditor('OL', editor)
        if ($ul || $ol) {
            return
        }

        const tableDom: string = this.createTableHtml(rowValue, colValue)
        editor.cmd.do('insertHTML', tableDom)
    }

    /**
     * 创建table、行、列
     * @param rowValue 行数
     * @param colValue 列数
     */
    public createTableHtml(rowValue: number, colValue: number): string {
        let rowStr: string = ''
        let colStr: string = ''
        for (let i = 0; i < rowValue; i++) {
            colStr = ''
            for (let j = 0; j < colValue; j++) {
                if (i === 0) {
                    colStr = colStr + '<th><br></th>'
                } else {
                    colStr = colStr + '<td><br></td>'
                }
            }
            rowStr = rowStr + '<tr>' + colStr + '</tr>'
        }

        let colgroupContent: string = ''
        for (let j = 0; j < colValue; j++) {
            colgroupContent += `<col></col>`
        }
        const tableDom =
            '<table border="0" cellpadding="0" cellspacing="0">' +
            `<colgroup>${colgroupContent}</colgroup>` +
            `<tbody>${rowStr}</tbody></table>${EMPTY_P}`
        return tableDom
    }
}

export default CreateTable
