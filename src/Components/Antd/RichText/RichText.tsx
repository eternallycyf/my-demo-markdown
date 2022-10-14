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

export default class UploadDemo extends React.Component<EditorProps> {
  editorRef = React.createRef();

  state = {
    editorState: BraftEditor.createEditorState(null),
  };

  isContentEmpty = (content: EditorState) => {
    return content.toHTML() === '<p></p>';
  };

  // 处理文本粘贴
  handlePastedText = (
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

  handleChange = (editorState: EditorState) => {
    const { form, name, valueType, onChange } = this.props;
    console.log(editorState.toHTML());
    const content =
      valueType === 'raw' ? editorState.toRAW() : editorState.toHTML();
    this.setState({ editorState });
    form?.setFieldsValue({ [name]: content });
    if (onChange) {
      onChange(content);
    }
  };

  uploadHandler = param => {
    const { form, name, valueType, onChange } = this.props;
    if (!param.file) {
      return false;
    }
    const content = ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: URL.createObjectURL(param.file),
      },
    ]);
    this.setState({
      editorState: content,
    });
    this.handleChange(content);
  };

  render() {
    const {
      form,
      valueType,
      extendControlKey,
      value,
      onChange,
      ...restProps
    } = this.props;
    const { editorRef, handlePastedText } = this;
    // 自定义控件
    const customControlsKeys = Object.keys(CustomControls);
    const extendControls: any = extendControlKey!.map(key => {
      const index = customControlsKeys.indexOf(key);
      if (key !== -1) {
        return (CustomControls as any)[customControlsKeys[index]];
      }
    });

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            ref={editorRef}
            value={this.state.editorState}
            controlBarStyle={{ background: '#f1f1f1' }}
            handlePastedText={handlePastedText}
            contentStyle={{ height: 500 }}
            onChange={this.handleChange}
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
              control(editorRef, {
                form,
                uploadHandler: this.uploadHandler,
                editorState: this.state.editorState,
                ...restProps,
              }),
            )}
            {...restProps}
          />
        </div>
      </div>
    );
  }
}
