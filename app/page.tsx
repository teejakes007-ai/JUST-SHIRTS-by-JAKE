'use client'

import { Heart, ShoppingCart, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const addToCart = () => setCart(cart + 1)

  const products = [
    {
      id: 1,
      name: 'Classic Ivory Shirt',
      description: 'Timeless elegance in pure white',
      price: '₦18,500',
      image: '/product-1.png',
    },
    {
      id: 2,
      name: 'Stone Grey Premium',
      description: 'Sophisticated neutral tone',
      price: '₦22,000',
      image: '/product-2.png',
    },
    {
      id: 3,
      name: 'Pearl White Luxury',
      description: 'Premium comfort fit',
      price: '₦27,500',
      image: '/product-3.png',
    },
    {
      id: 4,
      name: 'Charcoal Essentials',
      description: 'Versatile everyday essential',
      price: '₦19,999',
      image: '/product-4.png',
    },
    {
      id: 5,
      name: 'Off-White Statement',
      description: 'Minimalist luxury piece',
      price: '₦24,500',
      image: '/product-5.png',
    },
    {
      id: 6,
      name: 'Black Excellence',
      description: 'Bold and refined',
      price: '₦30,000',
      image: '/product-6.png',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">JUST SHIRTS</h1>
            <p className="text-lg md:text-xl font-bold text-primary tracking-wide">by JAKE</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Home
            </a>
            <a href="#shop" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Shop
            </a>
            <a href="#about" className="text-sm font-medium hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Search size={20} className="text-foreground" />
            </button>
            <button
              onClick={addToCart}
              className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
            >
              <ShoppingCart size={20} className="text-foreground" />
              {cart > 0 && (
                <span className="absolute top-0 right-0 bg-foreground text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={addToCart}
              className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
            >
              <ShoppingCart size={20} className="text-foreground" />
              {cart > 0 && (
                <span className="absolute top-0 right-0 bg-foreground text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
            <button onClick={toggleMenu} className="p-2 hover:bg-secondary rounded-lg transition-colors">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block text-sm font-medium hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#shop"
                className="block text-sm font-medium hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="#about"
                className="block text-sm font-medium hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-sm font-medium hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full p-2 border border-border rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                <Search size={18} />
                <span className="text-sm font-medium">Search</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Image */}
            <div className="h-96 md:h-full min-h-96 bg-muted rounded-lg overflow-hidden">
              <Image
                src="/product-1.png"
                alt="Premium Ivory Shirt"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl sm:text-6xl font-serif font-light leading-tight text-balance">
                  A Great Shirt Never Goes Out of Style.
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Premium shirts made for everyday confidence.
              </p>
              <button className="px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shirts Section */}
      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-light mb-4 text-center">Featured Collection</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Discover our curated selection of premium shirts, each designed with meticulous attention to
            detail and comfort.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="h-80 bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-xl font-semibold">{product.price}</p>
                    <button
                      onClick={addToCart}
                      className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-serif font-light">About JUST SHIRTS by JAKE</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe one well-made shirt can elevate your entire wardrobe. Every piece is designed with
            comfort, quality, and timeless style in mind. Our commitment to premium materials and
            craftsmanship ensures that each shirt becomes a staple in your everyday essentials.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-light mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Subscribe to get updates on new collections and exclusive offers.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground text-foreground placeholder-muted-foreground"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">JUST SHIRTS</h3>
              <p className="text-sm text-muted-foreground">by JAKE</p>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-foreground transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 JUST SHIRTS by JAKE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
