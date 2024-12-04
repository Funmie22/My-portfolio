const Navbar = () => {
    return (
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10 bg-blue-500"> {/* Added bg-blue-500 for testing */}
        <nav
          className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          style={{ opacity: 1, willChange: 'auto', transform: 'none' }}
        >
          <a
            className="relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            href="#about"
          >
            <span className="!cursor-pointer text-sm">About</span>
          </a>
          <a
            className="relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            href="#projects"
          >
            <span className="!cursor-pointer text-sm">Projects</span>
          </a>
          <a
            className="relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            href="#testimonials"
          >
            <span className="!cursor-pointer text-sm">Milestones</span>
          </a>
          <a
            className="relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            href="#contact"
          >
            <span className="!cursor-pointer text-sm">Contact</span>
          </a>
        </nav>
      </main>
    );
  };
  
  export default Navbar;
  