import React, { useState } from 'react';
import { Coffee, MapPin, Star, Bell, Filter, Navigation, Plus, CreditCard, ChevronRight } from 'lucide-react';

// --- Componente: Ícone de Xícara com Preenchimento Variável (Nota 0-5) ---
const RatingCupIcon = ({ rating, size = 24 }) => {
  // Converte nota 0-5 para porcentagem 0-100
  const percentage = Math.min(Math.max((rating / 5) * 100, 0), 100);
  const id = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id={id} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset={`${percentage}%`} stopColor="#D97218" /> {/* Bronze/Laranja preenchido */}
            <stop offset={`${percentage}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Camada de Fundo (Outline vazado ou cor base escura) */}
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#402B29" strokeOpacity="0.8" fill="none" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#402B29" strokeOpacity="0.8" fill="#F2F2F2" />
        <line x1="6" y1="1" x2="6" y2="4" stroke="#402B29" strokeOpacity="0.8" />
        <line x1="10" y1="1" x2="10" y2="4" stroke="#402B29" strokeOpacity="0.8" />
        <line x1="14" y1="1" x2="14" y2="4" stroke="#402B29" strokeOpacity="0.8" />

        {/* Camada de Preenchimento (Sobreposta) */}
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="none" fill={`url(#${id})`} className="opacity-80" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="none" fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

// --- Componente: Marcador do Mapa ---
const MapMarker = ({ x, y, name, rating }) => {
  return (
    <div 
      className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full cursor-pointer group hover:z-50 transition-all duration-300"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Pop-up do nome e nota */}
      <div className="bg-[#F2F2F2] px-3 py-1.5 rounded-xl shadow-lg mb-1 flex items-center gap-2 border border-[#735145]/20 animate-bounce-slight group-hover:scale-110 transition-transform">
        <span className="text-[#402B29] font-bold text-xs whitespace-nowrap">{name}</span>
        <div className="flex items-center gap-0.5 bg-[#402B29] px-1.5 py-0.5 rounded-md">
           <Star size={8} className="text-[#F2C166] fill-[#F2C166]" />
           <span className="text-[#F2C166] text-[10px] font-bold">{rating}</span>
        </div>
      </div>
      
      {/* Ícone do Pin Personalizado */}
      <div className="relative">
        <div className="w-10 h-10 bg-[#F2F2F2] rounded-full border-2 border-[#D97218] flex items-center justify-center shadow-xl z-10 relative">
             <RatingCupIcon rating={rating} size={20} />
        </div>
        {/* Triângulo do Pin */}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D97218] rotate-45 border-r border-b border-[#D97218]"></div>
        {/* Sombra no chão */}
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/30 rounded-full blur-[2px]"></div>
      </div>
    </div>
  );
};

// --- Tela Principal (Home) ---
const HomeScreen = () => {
  // Dados Mockados das Cafeterias
  const coffeeShops = [
    { id: 1, name: "Café da Esquina", rating: 4.8, x: 50, y: 40 },
    { id: 2, name: "Aroma Paulista", rating: 3.2, x: 25, y: 30 },
    { id: 3, name: "Espresso Arte", rating: 5.0, x: 75, y: 60 },
    { id: 4, name: "Grão Mestre", rating: 4.2, x: 40, y: 70 },
  ];

  const promotions = [
    { id: 1, title: "Cappuccino em Dobro", desc: "Compre 1 leve 2", color: "from-[#D97218] to-[#F2C166]" },
    { id: 2, title: "Pão de Queijo", desc: "Grátis no combo", color: "from-[#735145] to-[#D97218]" },
    { id: 3, title: "30% OFF", desc: "Em filtrados", color: "from-[#402B29] to-[#735145]" },
  ];

  return (
    <div className="relative h-full w-full bg-[#F2F2F2] flex flex-col font-content overflow-hidden">
      
      {/* --- SEÇÃO 1: MAPA (55% da tela) --- */}
      <div className="relative h-[55%] w-full bg-gray-200 overflow-hidden">
        {/* Imagem de Fundo Realista Google Maps */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                // Imagem genérica de mapa urbano estilo Google Maps
                backgroundImage: 'url("https://snazzymaps.com/uploads/assets/style-snazzy-maps-clean-3.png")', 
                opacity: 0.9
            }}
        ></div>

        {/* Overlay de Gradiente Superior para facilitar leitura de status bar se houvesse */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#402B29]/30 to-transparent pointer-events-none"></div>

        {/* Marcadores */}
        {coffeeShops.map(shop => (
            <MapMarker key={shop.id} {...shop} />
        ))}

        {/* Marcador de "Você está aqui" */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-16 h-16 bg-[#4285F4]/30 rounded-full animate-ping absolute"></div>
             <div className="w-4 h-4 bg-[#4285F4] border-2 border-white rounded-full shadow-lg relative z-10"></div>
        </div>

        {/* Botões Flutuantes do Mapa */}
        <div className="absolute top-12 right-4 flex flex-col gap-3">
            <button className="bg-[#402B29] p-3 rounded-full text-[#F2F2F2] shadow-lg hover:bg-[#D97218] transition-colors">
                <Navigation size={20} />
            </button>
            <button className="bg-[#F2F2F2] p-3 rounded-full text-[#402B29] shadow-lg hover:bg-gray-100 transition-colors">
                <Filter size={20} />
            </button>
        </div>
      </div>

      {/* --- SEÇÃO 2: BOTTOM SHEET (Sobreposto - 50% da altura para caber tudo) --- */}
      <div className="absolute bottom-0 w-full h-[50%] bg-[#402B29] rounded-tl-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] flex flex-col px-6 pt-8 pb-8 z-20">
        
        {/* Header: Saudação e Avatar */}
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-[#F2F2F2]/60 text-xs font-bold uppercase tracking-widest mb-1">Bem-vindo de volta,</p>
                <h1 className="text-4xl text-[#F2C166] font-logo">João Marcelo</h1>
            </div>
            <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-[#D97218] overflow-hidden p-0.5">
                     <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#F2C166] rounded-full border-2 border-[#402B29]"></div>
            </div>
        </div>

        {/* Card de Créditos/Pontos */}
        <div className="bg-[#735145]/30 border border-[#F2C166]/20 rounded-2xl p-4 flex items-center justify-between mb-6 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D97218]/20 rounded-lg text-[#D97218]">
                    <Coffee size={24} />
                </div>
                <div>
                    <p className="text-xs text-[#F2F2F2]/60">Seus Coffy Points</p>
                    <p className="text-xl font-bold text-[#F2F2F2]">340 <span className="text-xs font-normal opacity-70">pts</span></p>
                </div>
            </div>
            <button className="bg-[#F2C166] text-[#402B29] text-xs font-bold py-2 px-3 rounded-lg hover:bg-[#D97218] transition-colors">
                Trocar
            </button>
        </div>

        {/* Swipable: Promoções do Dia */}
        <div className="flex-1 flex flex-col min-h-0"> {/* min-h-0 crucial para flexbox scrolling */}
            <div className="flex justify-between items-center mb-3 shrink-0">
                <h3 className="text-[#F2F2F2] font-bold text-sm">Promoções do dia</h3>
                <span className="text-[#D97218] text-xs cursor-pointer hover:underline">Ver todas</span>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x h-full items-start">
                {promotions.map(promo => (
                    <div 
                        key={promo.id} 
                        className={`min-w-[160px] h-32 rounded-2xl bg-gradient-to-br ${promo.color} p-4 flex flex-col justify-between relative overflow-hidden snap-center cursor-pointer transform hover:scale-105 transition-transform shadow-lg`}
                    >
                        {/* Detalhe decorativo */}
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                        
                        <div>
                             <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold backdrop-blur-md">Hoje</span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg leading-tight mb-1">{promo.title}</h4>
                            <p className="text-white/80 text-xs">{promo.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

    </div>
  );
};

// --- App Principal (Container Mobile) ---
const CoffyApp = () => {
  return (
    // Container externo para centralizar na tela do navegador
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-content antialiased">
      
      {/* Container Simulando Mobile (Proporção 1080x2380 ~ 9:20) */}
      <div 
        className="w-full bg-[#402B29] rounded-[40px] overflow-hidden shadow-2xl relative text-[#F2F2F2] ring-8 ring-gray-800"
        style={{
            maxWidth: '400px',
            aspectRatio: '9/20',
            height: 'auto',
            maxHeight: '90vh' // Limite de altura da viewport
        }}
      >
         <HomeScreen />
      </div>

      {/* Styles Globais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        .font-logo { font-family: 'Parisienne', cursive; }
        .font-content { font-family: 'Lato', sans-serif; }

        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        @keyframes bounce-slight {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        .animate-bounce-slight {
            animation: bounce-slight 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CoffyApp;