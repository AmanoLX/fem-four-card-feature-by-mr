import { useState } from 'react';
import './index.css';
import featuresData from './data';
import List from './List';

function App() {
  const [features, setFeatures] = useState(featuresData);
  console.log(features);
  return (
    <main>
      <section className="hero">
        <h2 className="hero__subtitle">Reliable, efficient delivery</h2>
        <h1 className="hero__title">Powered by Technology</h1>
        <p className="hero__text">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <List features={features} />
    </main>
  );
}

export default App;
