import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-auto max-w-7xl  border-b-2 ">
      <h1 className="text-6xl font-bold">knowledge cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
