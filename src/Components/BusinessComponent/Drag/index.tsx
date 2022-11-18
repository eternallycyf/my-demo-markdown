import React, { useRef, useState } from 'react';
import { Tag } from 'antd';
import { DATA_LIST_DICT } from './constant';
import { IDataList, IDragEvent, _checkIsTargetEqual } from './interface';

const renderTag = (data: IDataList[]) => {
  const TagsNode = data.map(item => (
    <Tag
      {...item}
      key={item.key}
      data-key={item.key}
      className="tag_item"
      color={item.color}
    >
      {item.color}
    </Tag>
  ));
  return TagsNode;
};

const test = () => {
  const tagBox = useRef<HTMLDivElement>(null);
  const [startTag, setStartTag] = useState<HTMLDivElement | null>(null!);
  const [endTag, setEndTag] = useState<HTMLDivElement | null>(null!);
  const [dataList, setDataList] = useState<IDataList[]>(DATA_LIST_DICT);

  const handleDragstart = (e: IDragEvent) =>
    e.target && setStartTag(e.target as HTMLDivElement);

  const handleDragover = (e: IDragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    if (_checkIsTargetEqual(tagBox.current, target)) return setEndTag(null!);

    if (!_checkIsTargetEqual(endTag, target)) return setEndTag(target);
  };

  const handleDragend = (e: IDragEvent) => {
    e.preventDefault();
    if (!endTag) return false;

    let list = [...dataList];
    const endKey = (endTag?.getAttribute('data-key') as any) as number;
    const startKey = (startTag?.getAttribute('data-key') as any) as number;
    // 交换位置
    [list[startKey], list[endKey]] = [list[endKey], list[startKey]];

    setDataList([...list]);
  };

  const EventsPool = {
    onDragStart: handleDragstart,
    onDragOver: handleDragover,
    onDragEnd: handleDragend,
  };

  return (
    <div ref={tagBox} {...EventsPool}>
      {renderTag(dataList)}
    </div>
  );
};

export default test;
