import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

describe('Testa a página Wallet', () => {
  it('Testa se a função "fetch" é chamada corretamente quando o usuário clica no botão "adicionar despesa', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    renderWithRouterAndRedux(<Wallet />);

    await act(async () => {
      const value = await screen.getByTestId('value-input');
      userEvent.type(value, '20.00');

      const description = await screen.getByTestId('description-input');
      userEvent.type(description, 'Cinema');

      const method = await screen.getByTestId('method-input');
      userEvent.selectOptions(method, ['Dinheiro']);

      const tag = await screen.getByTestId('tag-input');
      userEvent.selectOptions(tag, ['Lazer']);

      const button = screen.getByRole('button', { name: /adicionar despesa/i });
      userEvent.click(button);

      expect(global.fetch).toHaveBeenCalledTimes(2);
    });
  });
});
