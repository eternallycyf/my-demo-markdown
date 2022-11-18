export type IDragEvent = React.DragEvent<HTMLDivElement>;

export type IHandleCheckIsTargetEqualHandle = {
  (currentTarget: HTMLDivElement | null, target: HTMLDivElement): boolean;
};

export interface IDataList {
  color: string;
  draggable: boolean;
  key: number;
  closable?: boolean;
}

export const _checkIsTargetEqual: IHandleCheckIsTargetEqualHandle = (
  currentTarget,
  target,
) => currentTarget === target;
