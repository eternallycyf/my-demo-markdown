import React from 'react';
import { Modal, Button, ModalFuncProps } from 'antd';
import styles from './index.less';

interface IAsyncConfirm {
  footerBtns: any[];
  modalProps: ModalFuncProps;
  type: ModalFuncProps['type'];
}

export const asyncConfirm = (props: IAsyncConfirm) => {
  const { footerBtns, modalProps, type = 'info' } = props;

  return new Promise(resolve => {
    const { content } = modalProps;
    const originContent = (
      <div className={styles.confirm_btns}>
        {footerBtns.map(b => (
          <Button
            {...b.btnProps}
            key={b.code}
            onClick={() => {
              modalRef.destroy();
              resolve(b.code);
            }}
          >
            {b.btnChild}
          </Button>
        ))}
      </div>
    );

    const modalContent = !content ? (
      originContent
    ) : (
      <>
        {content}
        {originContent}
      </>
    );

    const modalRef = Modal[type]({
      ...modalProps,
      className: styles.async_confirm,
      content: modalContent,
    });
  });
};

interface ICreateModal {
  onOk?: (status: string, destoryFn: () => void) => void;
  type?: ModalFuncProps['type'];
  title?: React.ReactNode;
  content?: React.ReactNode;
  modalProps?: ModalFuncProps;
}

export const createModal = async ({
  onOk = (status, destoryFn) => destoryFn(),
  type = 'info',
  title = '确定删除嘛',
  content = '',
  modalProps = {},
}: ICreateModal) => {
  const confirmCode = await asyncConfirm({
    footerBtns: [
      { code: false, btnChild: '取消' },
      {
        btnProps: { type: 'primary' },
        code: true,
        btnChild: '确定',
        onClick: onOk,
      },
    ],
    type,
    modalProps: {
      title,
      content,
      ...modalProps,
    },
  });
};
