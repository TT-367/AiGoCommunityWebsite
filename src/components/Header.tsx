import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Avatar } from './ui/Avatar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm supports-[backdrop-filter]:bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-md transform transition hover:scale-105">
              <span className="text-white font-black text-xl tracking-tighter">Ai</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">AiGo</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">AI游戏开发论坛</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <a href="#" className="hover:text-black transition-colors">Discover</a>
            <a href="#" className="hover:text-black transition-colors">Topics</a>
            <a href="#" className="hover:text-black transition-colors">Collections</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" size="sm" />
        </div>
      </div>
    </header>
  );
}
