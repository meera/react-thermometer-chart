import Thermometer from 'react-thermometer-chart';

export default function App() {
  return (
    <>
      <h1> React Thermometer Chart</h1>
      <h2> How to Install </h2> 
        <h4>npm install react-thermometer-chart --save</h4>
      <Thermometer color='green' />

      <Thermometer color='blue' />

      <Thermometer width="150px" height="240px" steps={5} minValue={1000} maxValue={40000} currentValue={20000}> 
</Thermometer>
R
    </>
  );
}
