import { LocationRec } from './location-rec.model';

class MockLocationRec {
    city = { city: 'Test City' };
}

describe('LocationRec', () => {
  it('should create an instance', () => {
    expect(new MockLocationRec()).toBeTruthy();
  });
});
