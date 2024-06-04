import Feature from './Feature';

const List = ({ features }) => {
  return (
    <section className="features">
      {features.map((feature) => {
        return <Feature key={feature.id} {...feature} />;
      })}
    </section>
  );
};
export default List;
