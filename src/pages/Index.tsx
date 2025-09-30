import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/ui/hero-section';
import GiftItem from '@/components/GiftItem';
import FeaturedCard from '@/components/FeaturedCard';
import EditableText from '@/components/EditableText';
import ProductCard from '@/components/ProductCard'; 

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
            initialText="Put whatever tf you want here grate"
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
        
        {/* Tech Products Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="elegant-text text-3xl md:text-4xl font-semibold mb-4">
              Put more shit here or delete it shore
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our selection of innovative technology and modern essentials
            </p>
          </div>
          
          <div className="space-y-6">
            <ProductCard
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
              title="Premium Wireless Headphones"
              buttonText="Shop Now"
              buttonLink="#"
              description="Experience crystal-clear sound with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear. Perfect for music lovers and professionals alike."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
              title="Smart Fitness Watch"
              buttonText="Learn More"
              buttonLink="#"
              description="Track your fitness goals with style. This smartwatch monitors heart rate, sleep patterns, and daily activity. Water-resistant design with a vibrant display and week-long battery life keeps you connected and motivated."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop"
              title="Ultra-Portable Camera"
              buttonText="View Details"
              buttonLink="#"
              description="Capture life's moments in stunning detail. This compact camera delivers professional-quality photos and 4K video in a pocket-sized package. Perfect for travel, vlogging, or everyday photography adventures."
            />
          </div>
</div>
      </main>
    </div>
  );
};

export default Index;