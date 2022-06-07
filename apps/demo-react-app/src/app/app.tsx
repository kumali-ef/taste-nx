// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Button from './button/button';

export function App() {
  return (
    <>
      <Button text="Tailwind.css3.0" />
      <NxWelcome title="demo-react-app" />
      <div />
    </>
  );
}

export default App;
