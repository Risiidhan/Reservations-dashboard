export type Nullable<T> = T | null;

export type OmitKeys<T, K extends keyof T> = Omit<T, K>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
