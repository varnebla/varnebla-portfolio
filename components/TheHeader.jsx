const TheHeader = () => {
  return (
    <header className="w-full px-6 py-4 mx-auto md:px-16">
      <nav className="flex justify-end text-lg gap-x-2 md:text-xl">
        <a href="#description" className="no-underline">
          About me
        </a>
      </nav>
    </header>
  );
};

export default TheHeader;
