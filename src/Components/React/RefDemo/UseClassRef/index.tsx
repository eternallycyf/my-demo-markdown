import React, { useRef, useEffect } from 'react';

interface Iprops {}
interface IState {
  name: any[];
}
class Test extends React.PureComponent<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      name: [2],
    };
  }
  handleSetName = () => this.setState({ name: [1] });
  render() {
    return <>Test</>;
  }
}

const App = () => {
  const TestRef = useRef<InstanceType<typeof Test>>(null!);
  useEffect(() => console.log(TestRef.current.state.name), []);
  return <Test ref={TestRef} />;
};

export default App;
