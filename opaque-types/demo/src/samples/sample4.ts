type Brand<BaseType, Name> = BaseType & { __brand: Name };
type UserId = Brand<string, 'UserId'>;
