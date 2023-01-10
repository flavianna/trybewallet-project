import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa a pagina de login da aplicação', () => {
  test('testa se existe o campo de email', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    expect(inputEmail).toBeInTheDocument();
  });

  test('Testa se existe um campo de senha', () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByRole('textbox');
    expect(passwordInput).toBeInTheDocument();
  });

  test('Testa se existe um botao contendo o texto Entrar', () => {
    renderWithRouterAndRedux(<App />);
    const buttonSubmit = screen.getByRole('button', { name: /entrar/i });
    expect(buttonSubmit).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão Entrar redireciona para a rota Wallet', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonSubmit = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    userEvent.type(inputEmail, 'teste@test.com');
    userEvent.type(passwordInput, '123456');
    expect(inputEmail.value).toBe('teste@test.com');
    expect(passwordInput.value).toBe('123456');
    userEvent.click(buttonSubmit);
    expect(history.location.pathname).toBe('/carteira');
  });
});
