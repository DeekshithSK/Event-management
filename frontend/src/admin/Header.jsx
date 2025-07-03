import { Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-purple flex justify-between items-center p-4 shadow-md border-b border-border-color">

      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        className="flex items-center justify-center p-2 text-text-primary hover:bg-purple/20 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Title */}
      <div className="flex items-center">
        <span className="text-xl font-bold flex items-center text-text-primary">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
       Event 
        </span>
      </div>
    </header>
  )
}

export default Header
