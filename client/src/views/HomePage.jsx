import Cards from "../components/Cards";

export default function HomePage() {

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?w=2000&t=st=1703054323~exp=1703054923~hmac=364f11cd1c30e4831991a12cc1b91467ca376d173b2c1371ebe5736f06ceb0e1")',
      }}
    >
      <div className="flex flex-row flex-wrap gap-6 justify-center my-5">
        <Cards />
      </div>
    </div>
  );
}