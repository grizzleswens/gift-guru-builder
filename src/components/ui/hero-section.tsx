import { cn } from '@/lib/utils';
import EditableText from '../EditableText';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative py-20 px-6 text-center", className)}>
      <div className="absolute inset-0 luxury-gradient opacity-5" />
      
      <div className="relative max-w-4xl mx-auto space-y-6">
        <EditableText
          initialText="Curated Gift Guide"
          persistentKey="hero-title"
          className="elegant-text text-5xl md:text-6xl font-bold tracking-tight"
          placeholder="Enter your main headline..."
        />
        
        <EditableText
          initialText="Discover the most exquisite finds, carefully selected for those who appreciate life's finer moments. Each piece tells a story of elegance, craftsmanship, and timeless beauty."
          persistentKey="hero-subtitle"
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          placeholder="Write your compelling subtitle..."
          multiline
        />
        
        <div className="pt-4">
          <div className="w-24 h-px gold-gradient mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;