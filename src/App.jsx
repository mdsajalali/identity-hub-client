import AllUsers from "./components/AllUsers";

const App = () => {
  return (
    <div>
      <header className="bg-[#06D6A0] p-2">
        <h1 className="text-center text-3xl md:text-4xl">
          User Management System
        </h1>
      </header>
      <AllUsers />
    </div>
  );
}

export default App