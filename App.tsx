import { Clock, MapPin, Phone, Star, Coffee, Utensils, Navigation, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen relative font-sans text-ink selection:bg-saffron selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InfoBanner />
        <Menu />
        <Gallery />
        <Reviews />
        <AboutInfo />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-3xl font-black uppercase tracking-tighter">
          <span className="text-saffron">Sharma</span> Sweets
        </div>
        <div className="hidden md:flex gap-8 text-xs font-sans font-bold uppercase tracking-widest text-ink/60">
          <a href="#menu" className="hover:text-saffron transition-colors">Menu</a>
          <a href="#reviews" className="hover:text-saffron transition-colors">Reviews</a>
          <a href="#about" className="hover:text-saffron transition-colors">About</a>
        </div>
        <a href="#contact" className="px-6 py-2 rounded-full border border-ink text-ink hover:bg-ink hover:text-warm-bg transition-all text-xs font-bold uppercase tracking-widest">
          Visit Us
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-ink/60 mb-2">
            <Star className="w-3 h-3 text-saffron fill-current" />
             Est. 2005 • Birahimpur, UP
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-black tracking-tight uppercase m-0 relative z-20 break-words pr-4">
            Taste the <br />
            <span className="text-saffron">Traditional.</span>
          </h1>
          <p className="text-lg font-sans text-ink/80 max-w-md leading-relaxed mt-6 relative z-20">
            A popular local spot serving traditional North Indian sweets, snacks, and vegetarian meals. Known for our fresh, crispy jalebi and samosa.
          </p>
          <div className="pt-8 flex flex-wrap gap-4">
            <a href="#menu" className="bg-saffron text-white px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider hover:bg-[#d96c1c] transition-all flex items-center gap-2 group">
              Our Menu
              <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#menu" className="border border-ink text-ink px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider hover:bg-ink hover:text-white transition-all flex items-center gap-2">
              Crispy Jalebi
            </a>
            <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-ink/20">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-ink/10 border border-warm-bg flex items-center justify-center overflow-hidden">
                    <Star className="w-4 h-4 text-saffron fill-current" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold">
                4.3 <span className="font-sans text-xs uppercase tracking-widest opacity-60 ml-2">248 REVIEWS</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-sm shadow-custom overflow-hidden relative">
            <img 
              src="https://images.openai.com/static-rsc-4/VYScgmxUqQybr5iqzI7o_T5HKSJZMfw-wZKI4wz22k21qlOChzjRIC5AXc-Z7KDDSMR0ugQl7mzH0913-QMHHHA_Lk6ZjiER3cyXzmzEswaXiVPmlMejDUDqeV2s2upGzkQB3uCb-vPAMsckVYEfx_VjfpPZDOuT_yq9HngMG2USaL0MzZBldoc-v2Z1o92E?purpose=fullsize" 
              alt="Traditional Indian Sweets" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[1px] border-black/10 rounded-sm"></div>
          </div>
          
          {/* Floating Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-custom border-t-4 border-saffron flex gap-4 items-center"
          >
            <div className="w-12 h-12 flex items-center justify-center text-saffron">
               <MapPin className="w-8 h-8" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-sans font-bold tracking-widest text-ink/60 mb-1">Location</div>
              <div className="font-serif font-black text-xl leading-tight uppercase">Birahimpur</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoBanner() {
  const info = [
    { icon: Clock, label: "Open Daily", value: "7:00 AM – 10:00 PM" },
    { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
    { icon: Coffee, label: "Amenities", value: "Dine-in & Takeaway" },
  ];

  return (
    <div className="bg-ink text-warm-bg py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 border-b border-warm-bg/10 md:border-b-0 md:border-l md:border-r border-warm-bg/10">
          {info.map((item, i) => (
            <div key={i} className="py-8 md:py-16 md:px-12 flex items-center gap-6 border-t md:border-t-0 md:border-r border-warm-bg/10 last:border-r-0">
              <div className="w-12 h-12 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-saffron" />
              </div>
              <div>
                <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-warm-bg/50 mb-2">{item.label}</div>
                <div className="font-serif text-xl font-bold italic tracking-wide">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const menuItems = [
    { name: "Crispy Jalebi", price: "₹120/kg", desc: "Freshly made, syrupy and crispy.", img: "https://images.openai.com/static-rsc-4/SMXxDqeJnVwts1lIaPr2joXTRFOVAlaqMpBges4bKmPf7lw1xee9EAVWRvLx4e_Ep9fd-iTb9KepAxODjQ2naQs6wxDiSzdqcjlA1NdKFZApPzEBBZOHromrHVzAoY7Ww0mwDecUP0alPUEJcTCaL3QugBWTNz3wVXS8dqvXMo1pjKRwR-ok4NLJww1HZDFL?purpose=fullsize" },
    { name: "Punjabi Samosa", price: "₹15/pc", desc: "Spiced potato filling, golden fried.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800" },
    { name: "Kachori Sabzi", price: "₹40/plate", desc: "Crispy kachoris with tangy potato curry.", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800" },
    { name: "Veg Thali", price: "₹120", desc: "Complete meal with dal, sabzi, roti & rice.", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800" },
    { name: "Rasgulla", price: "₹200/kg", desc: "Soft, spongy cottage cheese balls in syrup.", img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="menu" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="border-l-4 border-saffron pl-6">
            <div className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-ink/50 mb-4">Our Menu</div>
            <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Highlights</h2>
          </div>
          <p className="font-sans text-lg italic text-ink/80 max-w-sm">From morning snacks to festive sweets, our menu is filled with authentic flavors.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 group items-center border-b border-ink/10 pb-6"
            >
              {item.img ? (
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-sm shadow-custom overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ) : (
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-sm shadow-custom bg-black/5 flex items-center justify-center shrink-0">
                  <Utensils className="w-8 h-8 text-black/20" />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl font-bold">{item.name}</h3>
                  <div className="font-sans font-bold text-saffron text-sm">{item.price}</div>
                </div>
                <p className="font-sans text-sm italic text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "https://images.openai.com/static-rsc-4/VYScgmxUqQybr5iqzI7o_T5HKSJZMfw-wZKI4wz22k21qlOChzjRIC5AXc-Z7KDDSMR0ugQl7mzH0913-QMHHHA_Lk6ZjiER3cyXzmzEswaXiVPmlMejDUDqeV2s2upGzkQB3uCb-vPAMsckVYEfx_VjfpPZDOuT_yq9HngMG2USaL0MzZBldoc-v2Z1o92E?purpose=fullsize", alt: "Sweets Selection 1" },
    { src: "https://images.openai.com/static-rsc-4/SMXxDqeJnVwts1lIaPr2joXTRFOVAlaqMpBges4bKmPf7lw1xee9EAVWRvLx4e_Ep9fd-iTb9KepAxODjQ2naQs6wxDiSzdqcjlA1NdKFZApPzEBBZOHromrHVzAoY7Ww0mwDecUP0alPUEJcTCaL3QugBWTNz3wVXS8dqvXMo1pjKRwR-ok4NLJww1HZDFL?purpose=fullsize", alt: "Sweets Selection 2" },
    { src: "https://images.openai.com/static-rsc-4/BA4hS-Bt0DG0-vpXwix2Szxt5MOoGIHOQqDyxv_Dpt9LYvbMu-m_hW8T70ZY7XZTQ_YaKtyiAynKbo-VaGO9dBpysC1PCKiO5vK17uJDBoWeCXheZxLYbaftbwYYYy7FV3DKW60-ltRgKiiAw78Eyu-MO2PkKd2rlLYBz-ngkAeUJ0T1lPkz0QszBL5Cu8xh?purpose=fullsize", alt: "Sweets Selection 3" },
    { src: "https://images.openai.com/static-rsc-4/Uo3EJZEHCjb3hMZC-3lJuQuSe-e7VAYEz9GUR69BWY_hLyIgdTnjvkwHZFg2xJhq76Gxpt_Q5A5VDEoAF-lGmGaUedtxYkaq25sxXSeBtMw-OGsSpiHunD8uWrf3YVWF4R1HBJwWWtq7QZbUrsBnrSbjth13D3Y3YjkKGL4NapYwpdxBzR7eE7_W6qocxF4Q?purpose=fullsize", alt: "Sweets Selection 4" },
    { src: "https://images.openai.com/static-rsc-4/bsLYwNXR8IcIPGe7uPAJYXg_6VU-tLZcTkiUCTRxXG6E4farx--NBjSumSEWDhQKmoE5479VWhI0UJOdp6Ht7dI5giNUAfeikpjL8lGX3Pm5A8t08S77Tc-Ky50yDw7wkME4wkKfXGLiRaD3y6H6AxaaBOyk4fiPC5ORpfow4ogtsZNg1QxE7MyOxfnz26Co?purpose=fullsize", alt: "Sweets Selection 5" },
    { src: "https://images.openai.com/static-rsc-4/ePknjknRn2EMQCNxaZKefpzjze8NWN_HbGdns7VLAyCD2LCaTEodGMyd835PzjvmNfO7NOSFbyG-8Z117aNatV9TObAdXem-dicpKn-UNZfjfRPSi-Wx2LEJh-qznKrls8cgdGYVLB916-3djjCfirYGWjcHxGnn5V9vKZfQFgp9pwaJr58LpKJD85sGYyX7?purpose=fullsize", alt: "Sweets Selection 6" },
  ];

  return (
    <section className="py-24 px-6 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-ink/50 mb-4">Gallery</div>
          <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-center">Traditional Sweets</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square rounded-sm shadow-custom overflow-hidden border-2 border-transparent hover:border-saffron group cursor-pointer transition-colors"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { text: "Best jalebi in town, always fresh and crispy!", rating: 5 },
    { text: "Affordable and tasty food, good for family outings.", rating: 4 },
    { text: "Love the samosas here. Service can be slow during peak hours but worth the wait.", rating: 4 },
  ];

  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="font-sans text-[10px] uppercase font-bold tracking-[0.3em] text-ink/50 mb-4">Testimonials</div>
          <h2 className="font-serif font-black uppercase tracking-tighter text-6xl md:text-7xl leading-none mb-6">What Locals Say</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex text-saffron">
              {[1, 2, 3, 4].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
              <Star className="w-6 h-6 fill-current opacity-50" />
            </div>
            <span className="font-serif font-bold italic text-2xl">4.3 / 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-sm bg-white shadow-custom border-t-4 border-saffron flex flex-col">
              <div className="flex text-saffron mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutInfo() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="border-l-4 border-saffron pl-8">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-ink/50 mb-4">Our Story</div>
          <h2 className="font-serif font-black text-6xl uppercase tracking-tighter leading-[0.9] mb-8">Serving <br/>Birahimpur <br/>since 2005.</h2>
          <p className="font-sans text-lg italic text-ink/80 leading-relaxed mb-8">
            Founded by Rajesh Sharma, Sharma Sweets has been the community's go-to destination for authentic North Indian flavors. Whether it is your daily evening tea with samosas, or festive sweets for your family, we ensure quality and freshness in every bite.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="px-6 py-2 rounded-full border border-ink font-sans text-xs font-bold uppercase tracking-widest text-ink">Dine-in Available</span>
            <span className="px-6 py-2 rounded-full border border-ink font-sans text-xs font-bold uppercase tracking-widest text-ink">Takeaway</span>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-sm shadow-custom overflow-hidden">
          <div className="absolute inset-0 bg-[#E67E22] opacity-5 mix-blend-multiply z-10 pointer-events-none"></div>
          <img src="https://images.openai.com/static-rsc-4/BA4hS-Bt0DG0-vpXwix2Szxt5MOoGIHOQqDyxv_Dpt9LYvbMu-m_hW8T70ZY7XZTQ_YaKtyiAynKbo-VaGO9dBpysC1PCKiO5vK17uJDBoWeCXheZxLYbaftbwYYYy7FV3DKW60-ltRgKiiAw78Eyu-MO2PkKd2rlLYBz-ngkAeUJ0T1lPkz0QszBL5Cu8xh?purpose=fullsize" alt="Restaurant Interior/Sweets" className="w-full h-full object-cover relative z-0" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink text-warm-bg pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-16">
        <div className="col-span-12 md:col-span-4 flex flex-col">
          <h2 className="font-serif font-black text-4xl uppercase tracking-tighter mb-4 text-white">Sharma<br/><span className="text-saffron">Sweets</span></h2>
          <p className="text-warm-bg/60 text-sm leading-relaxed mb-8 max-w-xs">
            Traditional North Indian sweets, snacks, and vegetarian meals. Authentic taste since 2005.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-widest text-warm-bg/40 mt-auto">
            GST: 09ABCDE1234F1Z5
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-4">
          <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Location & Contact</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-saffron shrink-0" />
              <span className="text-sm font-bold leading-relaxed">Main Market Road,<br/>Near Hanuman Mandir,<br/>Birahimpur, UP 226001</span>
            </li>
            <li className="flex items-center gap-4">
              <WhatsAppIcon className="w-5 h-5 text-saffron shrink-0" />
              <span className="text-sm font-bold">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-saffron shrink-0" />
              <span className="text-sm font-bold">sharmasweets@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4">
          <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Business Hours</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between border-b border-white/10 pb-4"><span>Mon - Thu</span><span className="font-bold">7 AM - 10 PM</span></li>
            <li className="flex justify-between border-b border-white/10 pb-4 text-saffron font-bold"><span>Fri - Sat</span><span>7 AM - 10:30 PM</span></li>
            <li className="flex justify-between border-b border-white/10 pb-4"><span>Sunday</span><span className="font-bold">8 AM - 10 PM</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-warm-bg/30">
        <div>© {new Date().getFullYear()} Sharma Sweets. All rights reserved.</div>
        <div className="flex gap-6">
          <span>Rajesh Sharma, Owner</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
