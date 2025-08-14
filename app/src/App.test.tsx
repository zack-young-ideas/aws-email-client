import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

let originalWindowProperty;

describe('App component', () => {
  it('renders AccessKeySetup component if not completed yet', async () => {
    const apiObject = {
      getSetupData: async () => ({
        ok: true,
        json: async () => ({
          accessKeyId: false,
          smtpCredentials: false,
        }),
      })
    }

    render(<App apiObject={apiObject} />);

    await waitFor(() => expect(
      screen.getByLabelText(/access key id/i)
    ).toBeInTheDocument());
    expect(screen.getByLabelText(/secret access key/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });

  it('renders SmtpSetup component if not completed yet', async () => {
    const apiObject = {
      getSetupData: async () => ({
        ok: true,
        json: async () => ({
          accessKeyId: true,
          smtpCredentials: false,
        }),
      })
    }

    render(<App apiObject={apiObject} />);

    await waitFor(() => expect(
      screen.getByLabelText(/username/i)
    ).toBeInTheDocument());
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument();
  });
});
