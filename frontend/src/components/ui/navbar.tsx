import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type Path = '/' | '/contactus';

interface NavItemProps {
  path: Path;
  children: React.ReactNode;
  currentPath: Path;
  onNavigate: (path: Path) => void;
  isMobile?: boolean;
}

interface NavbarProps {
  currentPath: Path;
  onNavigate: (path: Path) => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  path, 
  children, 
  currentPath, 
  onNavigate, 
  isMobile 
}) => {
  const isActive = currentPath === path;
  const baseStyles = "transition-colors";
  const desktopStyles = isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500';
  const mobileStyles = `${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} 
                       block px-3 py-2 rounded-md text-base hover:bg-gray-50 w-full text-left`;

  return (
    <button
      onClick={() => onNavigate(path)}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('/')}
              className="text-xl font-bold text-gray-800"
            >
              Your Brand
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            <NavItem path="/" currentPath={currentPath} onNavigate={onNavigate}>
              Home
            </NavItem>
            <NavItem path="/contactus" currentPath={currentPath} onNavigate={onNavigate}>
              Contact Us
            </NavItem>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavItem path="/" currentPath={currentPath} onNavigate={onNavigate} isMobile>
                Home
              </NavItem>
              <NavItem path="/contactus" currentPath={currentPath} onNavigate={onNavigate} isMobile>
                Contact Us
              </NavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;