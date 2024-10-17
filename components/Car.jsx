const Car = ({ car }) => {
  return (
    <div className="car-bg flex flex-col gap-2 p-5 rounded-lg">
      <span>Name: {car.Make_Name}</span>
      <span>Model: {car.Model_Name}</span>
    </div>
  );
};

export default Car;
