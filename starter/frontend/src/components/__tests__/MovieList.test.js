import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MovieList from '../MovieList';

test('renders movies returned by the API', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          movies: [
            { id: '123', title: 'Top Gun: Maverick' },
            { id: '456', title: 'Sonic the Hedgehog' },
          ],
        }),
    })
  );

  render(<MovieList onMovieClick={jest.fn()} />);

  expect(await screen.findByText('Top Gun: Maverick')).toBeInTheDocument();
  expect(await screen.findByText('Sonic the Hedgehog')).toBeInTheDocument();

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalled();
  });
});