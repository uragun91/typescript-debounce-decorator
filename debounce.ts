export const debounce = (delay: number = 100): MethodDecorator => {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]): any {
      if (!this.__timeout__) {
        Object.defineProperty(this, "__timeout__", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: {}
        });
      }

      clearTimeout(this.__timeout__[propertyKey]);
      this.__timeout__[propertyKey] = setTimeout(
        () => original.apply(this, args),
        delay
      );
    };

    return descriptor;
  };
};
