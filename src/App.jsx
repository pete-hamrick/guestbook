import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <Layout>
      <h1>Hello World, I'm in the app component</h1>
      <Home />
    </Layout>
  );
}
