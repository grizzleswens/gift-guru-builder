import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePersistentText } from '@/hooks/use-persistent-text';
import { Check, Save } from 'lucide-react';

interface EditableTextProps {
  initialText: string;
  persistentKey?: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  onTextChange?: (text: string) => void;
}

const EditableText = ({ 
  initialText, 
  persistentKey,
  className, 
  placeholder = "Click to edit...", 
  multiline = false,
  onTextChange
}: EditableTextProps) => {
  const { getText, updateText, saveStatus, isLoaded } = usePersistentText();
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  // Initialize text when persistent data is loaded
  useEffect(() => {
    if (isLoaded && persistentKey) {
      const persistentText = getText(persistentKey, initialText);
      console.log(`Loading text for ${persistentKey}:`, persistentText);
      setText(persistentText);
    } else if (!persistentKey) {
      setText(initialText);
    }
  }, [isLoaded, persistentKey, initialText, getText]);

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    console.log(`Saving text for ${persistentKey}:`, text);
    setIsEditing(false);
    if (persistentKey) {
      updateText(persistentKey, text);
    }
    onTextChange?.(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      console.log(`Saving text via Enter for ${persistentKey}:`, text);
      setIsEditing(false);
      if (persistentKey) {
        updateText(persistentKey, text);
      }
      onTextChange?.(text);
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const currentSaveStatus = persistentKey ? saveStatus[persistentKey] : null;

  if (isEditing) {
    const Component = multiline ? 'textarea' : 'input';
    return (
      <div className="relative">
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
        {/* Save Status Indicator during editing */}
        {persistentKey && currentSaveStatus && (
          <div className={cn(
            "absolute -right-8 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs",
            currentSaveStatus === 'saving' && "text-muted-foreground",
            currentSaveStatus === 'saved' && "text-green-600"
          )}>
            {currentSaveStatus === 'saving' && <Save className="w-3 h-3 animate-pulse" />}
            {currentSaveStatus === 'saved' && <Check className="w-3 h-3" />}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
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
      
      {/* Save Status Indicator */}
      {persistentKey && currentSaveStatus && (
        <div className={cn(
          "absolute -right-8 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs",
          currentSaveStatus === 'saving' && "text-muted-foreground",
          currentSaveStatus === 'saved' && "text-green-600"
        )}>
          {currentSaveStatus === 'saving' && <Save className="w-3 h-3 animate-pulse" />}
          {currentSaveStatus === 'saved' && <Check className="w-3 h-3" />}
        </div>
      )}
    </div>
  );
};

export default EditableText;