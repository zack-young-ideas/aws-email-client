import { render, screen } from '@testing-library/react';
import Setup from './Setup';

test('renders form', () => {
  render(<Setup />);

  expect(screen.getByLabelText(/access token id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/secret access token/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
