const Navbar = () => {
    const navigationItems = [
      { label: 'Platform Features', id:'platformfeatures' }, 
      { label: 'Token Benefits', id: 'tokenbenefits' },
     
      { label: 'Roadmap', id: 'roadmap' },
      { label: 'Tokenomics', id: 'tokenomics' },
      { label: 'Whitepaper', id: 'whitepaper' },
      { label: 'Blogs', id: 'Blogs' },
    ];
  
    return (
      <nav className="  min-w-[240px] max-md:max-w-full px-4">
        <ul className="flex flex-wrap navbar-menu font-rubik self-stretch xxl:px-6 xl:px-1 lg:px-0 py-3 my-auto rounded-lg max-md:px-5 gap-7 items-center  text-base text-secondary whitespace-nowrap">
          {navigationItems.map((item, index) => (
            <li key={index} className="border-b-2 border-transparent hover:border-white">
              {item.id ? (
                <a href={`#${item.id}`} className="scroll-link">
                  {item.label}
                </a>
              ) : (
                  <a href="/" className="scroll-link">
                    <span>{item.label}</span>
                  </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  