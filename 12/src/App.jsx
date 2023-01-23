import { ThemeProvider } from 'styled-components';
import { useCallback, useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsLight(!isLight);
  }, [isLight]);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Header toggleTheme={toggleTheme} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
