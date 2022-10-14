import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import BraftEditor, { EditorState, BraftEditorProps } from 'braft-editor';
import Table from 'braft-extensions/dist/table';
import MaxLength from 'braft-extensions/dist/max-length';
import ColorPicker from 'braft-extensions/dist/color-picker';
import { ContentUtils, ContenntUtils } from 'braft-utils';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/code-highlighter.css';
import CustomControls from './components/controls';
import { FormInstance } from 'rc-field-form';
import { CONTROLS_ALL, CONTROLS_LESS } from './components/constant';
import { Upload } from 'antd';

BraftEditor.use(Table());
BraftEditor.use(
  MaxLength({
    defaultValue: 10000,
  }),
);
BraftEditor.use(
  ColorPicker({
    theme: 'light', // 支持dark和light两种主题，默认为dark
  }),
);

interface EditorProps {
  form?: FormInstance;
  // 表单名称
  name?: string;
  extendControlKey?: any[];
  value?: string;
  valueType?: 'html' | 'raw';
  onChange?: (value: string) => void;
}

const RichText: React.FunctionComponent<EditorProps> = React.forwardRef(
  ({ form, valueType, extendControlKey, value, onChange, ...restProps }) => {
    const editorRef = React.useRef<any>(null);

    const isContentEmpty = (content: EditorState) => {
      return content.toHTML() === '<p></p>';
    };

    // 处理文本粘贴
    const handlePastedText = (
      text: string,
      HTML: string,
      editorState: any,
      editor: any,
    ) => {
      // 在此处来自行处理HTML内容之类的
      const stripedHTMLStringFunc = (HTML: string) => {
        if (HTML) {
          HTML = HTML.replace(/font-size:(.+?)(pt)/g, ($0, $1, $2) => {
            $1 = parseInt($1, 10);
            $2 = $2.replace('pt', 'px');
            return `font-size: ${$1}${$2}`;
          });

          HTML = HTML.replace(/ptpx/g, 'px');
          return HTML;
        }
        return undefined;
      };

      // 调用innerHTML 来将内容插入到编辑器
      editor.setValue(
        ContenntUtils.insertHTML(
          editorState,
          stripedHTMLStringFunc(HTML),
          'paste',
        ),
      );
      return 'handled'; // 一定要return handled 来告诉编辑器你自己已经处理过了粘贴内容 不需要编辑器处理
    };

    const handleChange = async (state: any) => {
      const content = valueType === 'raw' ? state.toRAW() : state.toHTML();
      if (onChange) {
        onChange(content);
      }
    };

    // 自定义控件
    const customControlsKeys = Object.keys(CustomControls);
    const extendControls: any = extendControlKey!.map(key => {
      const index = customControlsKeys.indexOf(key);
      if (key !== -1) {
        return (CustomControls as any)[customControlsKeys[index]];
      }
    });

    const insertMediItem = () => {
      let editorState = form?.getFieldValue('content');
      editorState = ContentUtils.insertMedias(editorState, [
        {
          type: 'IMAGE',
          url:
            'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg',
        },
      ]);
      form?.setFieldsValue({ content: editorState });
    };

    return (
      <BraftEditor
        ref={editorRef}
        onChange={handleChange}
        contentStyle={{ height: 500 }}
        controlBarStyle={{ background: '#f1f1f1' }}
        handlePastedText={handlePastedText}
        controls={CONTROLS_LESS as any}
        media={{
          externals: {
            image: true,
            video: false,
            audio: false,
            embed: false,
          },
        }}
        extendControls={extendControls.map((control: any) =>
          control(editorRef, { form, ...restProps }),
        )}
        {...restProps}
      />
    );
  },
);

RichText.defaultProps = {
  valueType: 'html',
  extendControlKey: [],
};

export default RichText;
