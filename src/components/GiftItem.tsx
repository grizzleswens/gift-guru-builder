import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import EditableText from './EditableText';
import { cn } from '@/lib/utils';

interface GiftItemProps {
  image: string;
  initialTitle: string;
  initialDescription: string;
  price?: string;
  category?: string;
  className?: string;
}

const GiftItem = ({ 
  image, 
  initialTitle, 
  initialDescription, 
  price, 
  category,
  className 
}: GiftItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentPrice, setCurrentPrice] = useState(price || '');
  const [currentCategory, setCurrentCategory] = useState(category || '');

  return (
    <Card 
      className={cn(
        "group overflow-hidden border-0 luxury-shadow smooth-transition",
        "hover:shadow-2xl hover:-translate-y-2 bg-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="relative group/image">
          <img 
            src={currentImage} 
            alt={initialTitle}
            className={cn(
              "w-full h-64 object-cover smooth-transition",
              isHovered && "scale-105"
            )}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 smooth-transition flex items-center justify-center">
            <EditableText
              initialText={currentImage}
              className="text-white text-sm bg-black/70 rounded-md px-3 py-2 font-mono"
              placeholder="Enter image URL..."
              onTextChange={setCurrentImage}
            />
          </div>
        </div>
        {currentCategory && (
          <div className="absolute top-4 left-4">
            <EditableText
              initialText={currentCategory}
              className="bg-luxury/90 text-luxury-foreground border-0 px-3 py-1 rounded-full text-sm font-medium"
              placeholder="Category..."
              onTextChange={setCurrentCategory}
            />
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <EditableText
          initialText={initialTitle}
          className="elegant-text text-xl font-semibold leading-tight"
          placeholder="Enter gift title..."
        />
        
        <EditableText
          initialText={initialDescription}
          className="text-muted-foreground leading-relaxed"
          placeholder="Describe this wonderful gift..."
          multiline
        />
        
        {currentPrice && (
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <EditableText
              initialText={currentPrice}
              className="font-medium text-luxury"
              placeholder="Enter price..."
              onTextChange={setCurrentPrice}
            />
            <div className="text-sm text-muted-foreground">
              Click text to edit
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default GiftItem;