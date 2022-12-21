import { render, screen } from '@testing-library/react';
import App from './App';
import {Router} from 'react-router-dom';

import {createMemoryHistory} from 'history';

test('renders react component', async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />,
    </Router>,
  );

  // 👇️ your tests...
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();
});
