declare const __brand: unique symbol;
type Brand<T> = { [__brand]: T };

export type Branded<BaseType, T> = BaseType & Brand<T>;

export type WeakOpaqueType<BaseType, T> = Branded<BaseType, T>;
export type StrongOpaqueType<BaseType, T> = (BaseType & Brand<T>) | Brand<T>;
export type SuperOpaqueType<BaseType, T> = Brand<T>;
