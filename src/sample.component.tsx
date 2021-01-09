export default function SampleComponent(props: any) {
  const {stuff} = props;
  const getKeys = () => Object.entries(stuff);
  return (<div>
    {getKeys().map(([key, value]) => <span key={key}>{`${key} - ${value}`}</span>)}
  </div>);
};
