import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should render custom text', () => {
    const { baseElement } = render(<Button text="Fixed text" />);
    expect(baseElement).toBeTruthy();
  });
});
