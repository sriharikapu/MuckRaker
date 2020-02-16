import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Funding, Investigation } from "./pages";
import Header from "./components/Header/Header";
import { useStoreActions } from "./store";

const App: React.FC = () => {
  const { connectToMetamask } = useStoreActions(state => state.user);

  useEffect(() => {
    startEthereumListener(connectToMetamask);

    return () => {
      window.ethereum.removeListeners("accountsChanged", null);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/funding" component={Funding}></Route>
        <Route exact path="/investigate" component={Investigation}></Route>
      </Switch>
    </Router>
  );
};
/**
 * @summary This function will attach an event listener to the global ethereum objected injected by Metamask (and other modern dApp browsers).
 * To call the redux action creator web3 function everything there's a change in the accounts.
 * This will be triggered both when the user first enables metamask(via connect)
 * and when the user switches accounts, i.e from account 1 to account 2
 * @access global access (to ethereum window object)
 */
const startEthereumListener = (connectToMetamask: Function) => () => {
  window.ethereum.addListener("accountsChanged", () => {
    connectToMetamask();
  });
};
export default App;
