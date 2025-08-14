import { fireEvent, render, screen } from '@testing-library/react';
import SmtpSetup from './SmtpSetup';


describe('SmtpSetup component', () => {
  it('renders form', () => {
    const handler = jest.fn();

    render(<SmtpSetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });

  it('calls handler function when form is submitted', async () => {
    const handler = jest.fn();

    expect(handler).not.toHaveBeenCalled();

    render(<SmtpSetup errorMessage={''} submitHandler={handler} />);

    const usernameInput = await screen.getByLabelText(/username/i);
    fireEvent.change(
      usernameInput,
      { target: { value: 'fakeUsername' } }
    );
    const passwordInput = await screen.getByLabelText(/password/i);
    fireEvent.change(
      passwordInput,
      { target: { value: 'fakePassword' } }
    );
    const submitButton = await screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(handler).toHaveBeenCalledWith(
      'fakeUsername',
      'fakePassword',
    );
  });

  it('displays error message', () => {
    const handler = jest.fn();

    const { rerender } = render(
      <SmtpSetup errorMessage={'Error'} submitHandler={handler} />
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();

    rerender(<SmtpSetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });
});
