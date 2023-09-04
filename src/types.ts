export interface Demo {
  [k: string]: string;
}

export type PickFirstParam<T extends () => void> = T extends (
  arg: infer U,
  ...args: any[]
) => void
  ? U
  : never;
