import { useState } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  initialText: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  onTextChange?: (text: string) => void;
}

const EditableText = ({ 
  initialText, 
  className, 
  placeholder = "Click to edit...", 
  multiline = false,
  onTextChange
}: EditableTextProps) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    onTextChange?.(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      setIsEditing(false);
      onTextChange?.(text);
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    const Component = multiline ? 'textarea' : 'input';
    return (
      <Component
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          "bg-transparent border-none outline-none resize-none",
          "focus:ring-2 focus:ring-luxury/20 rounded-md px-2 py-1",
          multiline && "min-h-[4rem]",
          className
        )}
        placeholder={placeholder}
        autoFocus
        {...(multiline && { rows: 3 })}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "cursor-pointer hover:bg-luxury/5 rounded-md px-2 py-1 smooth-transition",
        "border border-transparent hover:border-luxury/20",
        text === '' && "text-muted-foreground",
        className
      )}
    >
      {text || placeholder}
    </div>
  );
};

export default EditableText;