import EditableText from './EditableText';
import { Gift } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-luxury border-b border-luxury/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center gap-3">
          <EditableText
            initialText="Curated Gifts"
            persistentKey="site-title"
            className="text-luxury-foreground text-2xl font-serif font-bold"
            placeholder="Enter website title..."
          />
          <Gift className="text-luxury-foreground w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;