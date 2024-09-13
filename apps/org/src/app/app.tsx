
import { ChakraProvider } from '@chakra-ui/react';

import NxWelcome from './nx-welcome';
import { system } from './theme';

export function App() {
  return (
    <ChakraProvider value={system}>
      <NxWelcome title="org" />
    </ChakraProvider>
  );
}

export default App;
