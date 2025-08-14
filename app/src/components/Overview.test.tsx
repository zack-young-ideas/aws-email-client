import { render, screen } from '@testing-library/react';
import Overview from './Overview';


describe('Overview component', () => {
  it('renders emails', () => {
    const emails = [{
      id: 'ee39f356-7188-4a2c-a039-93b6035cd726',
      from: 'noreply@acmecorp.com',
      subject: 'Welcome to Acme Corp!',
      date: '2025-07-23T09:00:00.100Z',
      content: 'Hi Test User, Welcome to Acme Corp! We\'re ...',
    }];

    render(<Overview emails={emails} />);

    expect(screen.getByText('noreply@acmecorp.com')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Acme Corp!')).toBeInTheDocument();
  });
});
