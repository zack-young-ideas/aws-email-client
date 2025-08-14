import { fireEvent, render, screen } from '@testing-library/react';
import AccessKeySetup from './AccessKeySetup';


describe('AccessKeySetup component', () => {
  it('renders form', () => {
    const handler = jest.fn();

    render(<AccessKeySetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/access key id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access key/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });

  it('calls handler function when form is submitted', async () => {
    const handler = jest.fn();

    expect(handler).not.toHaveBeenCalled();

    render(<AccessKeySetup errorMessage={''} submitHandler={handler} />);

    const accessKeyIdInput = await screen.getByLabelText(/access key id/i);
    fireEvent.change(
      accessKeyIdInput,
      { target: { value: 'fakeAccessKeyID' } }
    );
    const secretAccessKey = await screen.getByLabelText(
      /secret access key/i
    );
    fireEvent.change(
      secretAccessKey,
      { target: { value: 'fakeSecretAccessKey' } }
    );
    const submitButton = await screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(handler).toHaveBeenCalledWith(
      'fakeAccessKeyID',
      'fakeSecretAccessKey',
    );
  });

  it('displays error message', () => {
    const handler = jest.fn();

    const { rerender } = render(
      <AccessKeySetup errorMessage={'Error'} submitHandler={handler} />
    );

    expect(screen.getByLabelText(/access key id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access key/i)).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();

    rerender(<AccessKeySetup errorMessage={''} submitHandler={handler} />);

    expect(screen.getByLabelText(/access key id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/secret access key/i)).toBeInTheDocument();
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });
});
