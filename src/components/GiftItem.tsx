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
        <img 
          src={image} 
          alt={initialTitle}
          className={cn(
            "w-full h-64 object-cover smooth-transition",
            isHovered && "scale-105"
          )}
        />
        {category && (
          <Badge 
            variant="secondary"
            className="absolute top-4 left-4 bg-luxury/90 text-luxury-foreground border-0"
          >
            {category}
          </Badge>
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
        
        {price && (
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="font-medium text-luxury">{price}</span>
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