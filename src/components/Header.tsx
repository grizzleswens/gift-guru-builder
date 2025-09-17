import EditableText from './EditableText';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-luxury border-b border-luxury/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <EditableText
          initialText="Curated Gifts"
          className="text-luxury-foreground text-xl font-serif font-semibold"
          placeholder="Enter website title..."
        />
      </div>
    </header>
  );
};

export default Header;