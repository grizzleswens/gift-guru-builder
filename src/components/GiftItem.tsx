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
  const [imageLink, setImageLink] = useState('');
  const [headlineLink, setHeadlineLink] = useState('');
  const [priceLink, setPriceLink] = useState('');

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
          <a 
            href={imageLink || '#'} 
            target={imageLink ? '_blank' : '_self'}
            rel={imageLink ? 'noopener noreferrer' : undefined}
            className={cn(imageLink ? 'cursor-pointer' : 'cursor-default')}
          >
            <img 
              src={currentImage} 
              alt={initialTitle}
              className={cn(
                "w-full h-64 object-cover smooth-transition",
                isHovered && "scale-105"
              )}
            />
          </a>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 smooth-transition flex items-center justify-center flex-col gap-2">
            <EditableText
              initialText={currentImage}
              className="text-white text-sm bg-black/70 rounded-md px-3 py-2 font-mono"
              placeholder="Enter image URL..."
              onTextChange={setCurrentImage}
            />
            <EditableText
              initialText={imageLink}
              className="text-white text-sm bg-black/70 rounded-md px-3 py-2"
              placeholder="Enter affiliate link..."
              onTextChange={setImageLink}
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
      
      <div className="p-6 space-y-4 pb-0">
        <div className="relative group/headline">
          <a 
            href={headlineLink || '#'} 
            target={headlineLink ? '_blank' : '_self'}
            rel={headlineLink ? 'noopener noreferrer' : undefined}
            className={cn(headlineLink ? 'cursor-pointer' : 'cursor-default')}
          >
            <EditableText
              initialText={initialTitle}
              className="elegant-text text-xl font-semibold leading-tight"
              placeholder="Enter gift title..."
            />
          </a>
          <div className="absolute -top-2 -right-2 opacity-0 group-hover/headline:opacity-100 smooth-transition">
            <EditableText
              initialText={headlineLink}
              className="text-xs bg-black/70 text-white rounded px-2 py-1"
              placeholder="Affiliate link..."
              onTextChange={setHeadlineLink}
            />
          </div>
        </div>
        
        <EditableText
          initialText={initialDescription}
          className="text-muted-foreground leading-relaxed"
          placeholder="Describe this wonderful gift..."
          multiline
        />
      </div>

      {currentPrice && (
        <div className="p-6 pt-4 relative group/price">
          <a 
            href={priceLink || '#'} 
            target={priceLink ? '_blank' : '_self'}
            rel={priceLink ? 'noopener noreferrer' : undefined}
            className="block"
          >
            <EditableText
              initialText={currentPrice}
              className="w-full bg-burgundy text-burgundy-foreground hover:bg-burgundy/90 font-medium py-3 px-4 rounded-md text-center cursor-pointer smooth-transition block"
              placeholder="Enter price..."
              onTextChange={setCurrentPrice}
            />
          </a>
          <div className="absolute -top-2 right-2 opacity-0 group-hover/price:opacity-100 smooth-transition z-10">
            <EditableText
              initialText={priceLink}
              className="text-xs bg-black/70 text-white rounded px-2 py-1"
              placeholder="Affiliate link..."
              onTextChange={setPriceLink}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default GiftItem;