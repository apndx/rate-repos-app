import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';


describe('Form', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId('usernameField'), 'littleEdith');
    fireEvent.changeText(getByTestId('passwordField'), 'password');
    fireEvent.press(getByTestId('submitButton'));

    await waitFor(() => {
      // expect the onSubmit function to have been called once and with a correct first argument
      expect(onSubmit).toHaveBeenCalledTimes(1);

      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'littleEdith',
        password: 'password',
      });
    });

  });
});
