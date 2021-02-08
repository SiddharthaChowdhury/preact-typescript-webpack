import { h, FunctionComponent, Fragment } from 'preact';
import {
  useState,
  useCallback,
  useEffect,
} from "preact/hooks";

interface IAppProps {
  msg: string;
}
const App: FunctionComponent<IAppProps> = ({msg}) => {
  const [value, setValue] = useState(0);

  const increment = useCallback((e: any) => {
    setValue(value + 1);
  }, [value]);

  useEffect(() => {
      console.log("Example: useEffect - Component mounted!")
  }, []);

  return (
    <Fragment>
      <h2>{msg}</h2>
      <span>Counter value: {value}</span>
      &nbsp; <button onClick={increment}>Increment</button>
    </Fragment>
  )
}

export default App;
