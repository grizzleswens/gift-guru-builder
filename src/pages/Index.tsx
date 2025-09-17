import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/ui/hero-section';
import GiftItem from '@/components/GiftItem';
import FeaturedCard from '@/components/FeaturedCard';
import EditableText from '@/components/EditableText';

// Import generated images
import giftScarf from '@/assets/gift-scarf.jpg';
import giftTeaSet from '@/assets/gift-tea-set.jpg';
import giftHandbag from '@/assets/gift-handbag.jpg';
import giftJewelry from '@/assets/gift-jewelry.jpg';
import giftCandles from '@/assets/gift-candles.jpg';
import giftCashmere from '@/assets/gift-cashmere.jpg';

const Index = () => {
  const featuredItem = {
    image: giftCashmere,
    title: "Editor's Choice: Pure Cashmere Throw",
    description: "This month's featured selection represents the pinnacle of luxury and comfort. Our premium cashmere throw is hand-selected for its unparalleled softness and sophisticated style. Crafted from the finest fibers, it transforms any space into a sanctuary of elegance. Perfect for those who appreciate the finer things in life.",
    price: "$485",
    category: "Featured"
  };

  const giftItems = [
    {
      id: 1,
      image: giftScarf,
      title: "Silk Heritage Scarf",
      description: "A masterpiece of artistry, this hand-woven silk scarf features intricate gold patterns inspired by classical motifs. Perfect for the woman who appreciates timeless elegance.",
      price: "$285",
      category: "Fashion"
    },
    {
      id: 2,
      image: giftTeaSet,
      title: "Porcelain Tea Ceremony Set",
      description: "Transform daily rituals into moments of mindfulness with this exquisite ceramic tea set. Each piece is crafted with gold accents that catch the morning light beautifully.",
      price: "$195",
      category: "Home"
    },
    {
      id: 3,
      image: giftHandbag,
      title: "Artisan Leather Handbag",
      description: "Crafted from the finest Italian leather, this burgundy handbag combines minimalist design with exceptional functionality. A timeless companion for the modern sophisticate.",
      price: "$420",
      category: "Accessories"
    },
    {
      id: 4,
      image: giftJewelry,
      title: "Golden Harmony Jewelry Set",
      description: "Delicate yet striking, this handcrafted jewelry set features warm gold tones that complement any skin tone. Each piece is designed to be treasured for generations.",
      price: "$350",
      category: "Jewelry"
    },
    {
      id: 5,
      image: giftCandles,
      title: "Luxury Botanical Candles",
      description: "Hand-poured with natural soy wax and infused with botanical essences, these candles create an atmosphere of serenity and warmth in any space.",
      price: "$125",
      category: "Wellness"
    },
    {
      id: 6,
      image: giftCashmere,
      title: "Pure Cashmere Throw",
      description: "Unparalleled softness meets sophisticated style in this luxurious cashmere throw. Perfect for cozy evenings or as an elegant accent piece.",
      price: "$485",
      category: "Home"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Card */}
        <div className="mb-20">
          <FeaturedCard
            id="featured-main"
            image={featuredItem.image}
            initialTitle={featuredItem.title}
            initialDescription={featuredItem.description}
            price={featuredItem.price}
            category={featuredItem.category}
          />
        </div>

        <div className="text-center mb-16">
          <EditableText
            initialText="Thoughtfully Selected Treasures"
            persistentKey="section-title"
            className="elegant-text text-3xl md:text-4xl font-semibold mb-4"
            placeholder="Enter section title..."
          />
          <EditableText
            initialText="Each item in our collection has been chosen for its exceptional quality, unique character, and ability to bring joy to both giver and receiver."
            persistentKey="section-description"
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            placeholder="Add section description..."
            multiline
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftItems.map((item) => (
            <GiftItem
              key={item.id}
              id={`gift-${item.id}`}
              image={item.image}
              initialTitle={item.title}
              initialDescription={item.description}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-20 py-16 border-t border-border">
          <EditableText
            initialText="The Art of Thoughtful Giving"
            persistentKey="footer-title"
            className="elegant-text text-2xl font-medium mb-6"
            placeholder="Enter footer title..."
          />
          <EditableText
            initialText="In a world of endless choices, we believe in the power of curation. Each piece in our collection represents a commitment to quality, beauty, and the meaningful moments that gifts can create."
            persistentKey="footer-description"
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            placeholder="Add closing message..."
            multiline
          />
        </div>
      </main>
    </div>
  );
};

export default Index;