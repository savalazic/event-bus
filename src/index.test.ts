import { EventBus } from './';

describe('EventBus', () => {
  let eventBus: any = {};

  beforeEach(() => {
    eventBus = new EventBus();
  });

  it('should works with basic usage', () => {
    let value = 1;
    eventBus.addEventListener(
      'increment',
      ({ detail }: any) => (value += detail.value),
    );
    eventBus.dispatchEvent('increment', { value: 5 });
    expect(value).toEqual(6);
  });
});
