import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import ListData from './components/ListData';

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  })
  
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <h1>Hello World</h1>
          <ListData />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
