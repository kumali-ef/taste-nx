import { publishMe } from './publish-me';

describe('publishMe', () => {
  it('should work', () => {
    expect(publishMe()).toEqual('publish-me');
  });
});
