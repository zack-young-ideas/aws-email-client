import { fireEvent, render, screen } from '@testing-library/react';
import AccessTokenSetup from './AccessTokenSetup';


describe('AccessTokenSetup component', () => {
  it('renders form', () => {
    const handler = jest.fn();

    render(<AccessTokenSetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/access token id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access token/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });

  it('calls handler function when form is submitted', async () => {
    const handler = jest.fn();

    expect(handler).not.toHaveBeenCalled();

    render(<AccessTokenSetup errorMessage={''} submitHandler={handler} />);

    const accessTokenIdInput = await screen.getByLabelText(/access token id/i);
    fireEvent.change(
      accessTokenIdInput,
      { target: { value: 'fakeAccessTokenID' } }
    );
    const secretAccessToken = await screen.getByLabelText(
      /secret access token/i
    );
    fireEvent.change(
      secretAccessToken,
      { target: { value: 'fakeSecretAccessToken' } }
    );
    const submitButton = await screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(handler).toHaveBeenCalledWith(
      'fakeAccessTokenID',
      'fakeSecretAccessToken',
    );
  });

  it('displays error message', () => {
    const handler = jest.fn();

    const { rerender } = render(
      <AccessTokenSetup errorMessage={'Error'} submitHandler={handler} />
    );

    expect(screen.getByLabelText(/access token id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access token/i)).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();

    rerender(<AccessTokenSetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/access token id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access token/i)).toBeInTheDocument();
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });
});
