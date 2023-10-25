import { ApolloProvider } from "@apollo/client";
import SearchGit from "./components/SearchGit";
import client from "./apollo";
function App() {
  return (
   <ApolloProvider client={client}>
   <SearchGit/>
   </ApolloProvider>
  
  
  
  );
}

export default App;
