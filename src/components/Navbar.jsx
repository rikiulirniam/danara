export const Navbar = () => {
  return (
    <nav className="bg-main-color fixed top-0 left-0 right-0 flex justify-between rounded-b-3xl text-white shadow-xl/30 p-4">
      <h1 className="text-2xl font-bold">Tembang</h1>
      <input type="text" placeholder="What are you looking for?" 
      className="bg-white text-black text-xs rounded-full px-3"  />
      <span className="bg-white flex items-center rounded-full px-3 ">
        <h1 className="text-black">
             R
        </h1>
      </span>
    </nav>
  );
};
