import React, { useState } from 'react';
import { 
  Coffee, MapPin, Star, Bell, Filter, Navigation, Plus, CreditCard, 
  ChevronRight, QrCode, Mail, Lock, User, Eye, Home, Heart, ShoppingBag, 
  Settings, ArrowLeft, Search, Check, X, AlertCircle, ToggleRight 
} from 'lucide-react';

// --- Componentes Reutilizáveis para Demo ---

const RatingCupIcon = ({ rating, size = 32 }) => {
  const percentage = Math.min(Math.max((rating / 5) * 100, 0), 100);
  const id = `ds-gradient-${rating}-${Math.random()}`; // Fix id collision

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id={id} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset={`${percentage}%`} stopColor="#D97218" />
            <stop offset={`${percentage}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#402B29" strokeOpacity="1" fill="none" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#402B29" strokeOpacity="1" fill="#F2F2F2" />
        <line x1="6" y1="1" x2="6" y2="4" stroke="#402B29" strokeOpacity="1" />
        <line x1="10" y1="1" x2="10" y2="4" stroke="#402B29" strokeOpacity="1" />
        <line x1="14" y1="1" x2="14" y2="4" stroke="#402B29" strokeOpacity="1" />
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="none" fill={`url(#${id})`} className="opacity-80" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="none" fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

const ColorSwatch = ({ name, hex, usage, darkText = false }) => (
  <div className="flex flex-col gap-2">
    <div 
      className={`h-24 w-full rounded-2xl shadow-md flex items-center justify-center relative group overflow-hidden ${darkText ? 'text-[#402B29]' : 'text-[#F2F2F2]'}`}
      style={{ backgroundColor: hex }}
    >
        <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity font-bold">{hex}</span>
    </div>
    <div>
      <h4 className="font-bold text-[#402B29]">{name}</h4>
      <p className="text-sm text-[#735145]">{usage}</p>
    </div>
  </div>
);

// --- Layout Principal do Design System ---
const CoffyDesignSystem = () => {
  const [toggleState, setToggleState] = useState(true);

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#402B29] font-content antialiased p-4 md:p-12 pb-32">
      
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-16 border-b border-[#735145]/20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Coffee className="text-[#D97218] mb-[-8px]" size={40} strokeWidth={2.5} />
            <h1 className="text-6xl font-logo text-[#402B29]">Coffy</h1>
          </div>
          <p className="text-[#735145] text-lg max-w-lg mt-4">
            Design System v2.0<br/>
            <span className="text-sm opacity-80">Componentes, Widgets e Diretrizes de UI/UX</span>
          </p>
        </div>
        <div className="text-right">
             <div className="bg-[#402B29] text-[#F2C166] px-4 py-2 rounded-lg inline-block text-sm font-bold font-mono shadow-lg">
                THEME: DARK ROAST
             </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- COLUNA ESQUERDA (Fundamentos & Navegação) --- */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* 1. Cores */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#402B29]">
              <div className="p-1.5 bg-[#D97218] rounded-lg"></div>
              Paleta de Cores
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <ColorSwatch name="Dark Roast" hex="#402B29" usage="Backgrounds, Textos" />
              <ColorSwatch name="Gold Crema" hex="#F2C166" usage="Highlights, Icons" darkText />
              <ColorSwatch name="Bronze" hex="#D97218" usage="Primary Buttons" />
              <ColorSwatch name="Light Roast" hex="#735145" usage="Bordas, Secundários" />
            </div>
          </section>

          {/* 2. Tipografia */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#402B29]">
              <div className="p-1.5 bg-[#D97218] rounded-lg"></div>
              Tipografia
            </h2>
            <div className="space-y-4">
              <div className="p-5 border border-[#735145]/20 rounded-xl bg-white shadow-sm">
                <p className="text-xs text-[#735145] mb-1 font-mono uppercase">Display / Logo</p>
                <p className="text-4xl font-logo text-[#402B29]">Parisienne</p>
              </div>
              <div className="p-5 border border-[#735145]/20 rounded-xl bg-white shadow-sm">
                <p className="text-xs text-[#735145] mb-1 font-mono uppercase">Interface</p>
                <div className="space-y-2">
                    <p className="text-2xl font-content font-bold text-[#402B29]">Lato Bold (H1-H3)</p>
                    <p className="text-xl font-content font-normal text-[#402B29]">Lato Regular (Body)</p>
                    <p className="text-xl font-content font-light text-[#402B29]">Lato Light (Subtitles)</p>
                </div>
              </div>
            </div>
          </section>

           {/* 3. Navegação */}
           <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#402B29]">
              <div className="p-1.5 bg-[#D97218] rounded-lg"></div>
              Navegação
            </h2>
            
            <div className="space-y-6">
                {/* Top Bar */}
                <div className="bg-[#402B29] p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between text-[#F2F2F2]">
                        <button className="p-2 hover:bg-[#F2F2F2]/10 rounded-full transition-colors"><ArrowLeft size={24} /></button>
                        <span className="font-bold text-lg">Menu</span>
                        <button className="p-2 hover:bg-[#F2F2F2]/10 rounded-full transition-colors"><Search size={24} /></button>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-[#402B29] px-6 py-4 rounded-2xl shadow-lg flex justify-between items-center">
                    <button className="flex flex-col items-center gap-1 text-[#F2C166]">
                        <Home size={24} strokeWidth={2.5} />
                        <span className="text-[10px] font-bold">Início</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors">
                        <Heart size={24} />
                        <span className="text-[10px]">Favoritos</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors">
                        <ShoppingBag size={24} />
                        <span className="text-[10px]">Pedidos</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors">
                        <User size={24} />
                        <span className="text-[10px]">Perfil</span>
                    </button>
                </div>
            </div>
          </section>

        </div>

        {/* --- COLUNA DIREITA (Componentes, Widgets & Feedback) --- */}
        <div className="lg:col-span-8 space-y-12">

            {/* 4. Biblioteca de Componentes UI */}
            <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#402B29]">
                    <div className="p-1.5 bg-[#D97218] rounded-lg"></div>
                    Componentes & Controles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Botões e Seleção */}
                    <div className="bg-[#402B29] p-8 rounded-3xl relative overflow-hidden shadow-xl">
                        <h3 className="text-[#F2C166] font-mono text-xs mb-6 uppercase tracking-widest border-b border-[#F2C166]/20 pb-2">Botões & Toggles</h3>
                        
                        <div className="space-y-4">
                            <button className="w-full bg-[#F2C166] hover:bg-[#D97218] text-[#402B29] font-bold py-4 rounded-xl shadow-lg shadow-[#F2C166]/10 flex items-center justify-center group uppercase tracking-wider text-sm transition-all active:scale-[0.98]">
                                Adicionar ao Carrinho
                                <Plus className="ml-2" size={18} />
                            </button>

                            <button className="w-full bg-transparent border border-[#735145] hover:bg-[#735145]/20 text-[#F2F2F2] font-bold py-3 rounded-xl transition-all uppercase tracking-wider text-xs active:scale-[0.98]">
                                Ver Detalhes
                            </button>

                            {/* Custom Toggle Switch */}
                            <div className="flex items-center justify-between bg-[#735145]/20 p-3 rounded-xl">
                                <span className="text-[#F2F2F2] text-sm font-bold">Notificações Push</span>
                                <button 
                                    onClick={() => setToggleState(!toggleState)}
                                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${toggleState ? 'bg-[#D97218]' : 'bg-[#735145]'}`}
                                >
                                    <div className={`w-5 h-5 bg-[#F2F2F2] rounded-full shadow-md transform transition-transform duration-300 ${toggleState ? 'translate-x-5' : 'translate-x-0'}`}></div>
                                </button>
                            </div>

                            {/* Checkbox & Radio Mockup */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="w-5 h-5 rounded border-2 border-[#D97218] bg-[#D97218] flex items-center justify-center text-[#402B29]"><Check size={14} strokeWidth={4}/></div>
                                    <span className="text-[#F2F2F2] text-sm">Leite Vegetal</span>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="w-5 h-5 rounded-full border-2 border-[#735145]"></div>
                                    <span className="text-[#F2F2F2]/60 text-sm">Açúcar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inputs e Listas */}
                    <div className="bg-white p-8 rounded-3xl border border-[#735145]/10 shadow-lg">
                        <h3 className="text-[#402B29] font-mono text-xs mb-6 uppercase tracking-widest border-b border-[#402B29]/10 pb-2">Formulários & Listas</h3>
                        
                        <div className="space-y-6">
                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#402B29]/40" size={18} />
                                <input type="text" placeholder="Buscar café..." className="w-full bg-[#F2F2F2] text-[#402B29] pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97218] transition-all text-sm font-content placeholder-[#402B29]/30" />
                            </div>

                            {/* List Item (Menu Card) */}
                            <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-[#F2F2F2] hover:border-[#D97218]/30 hover:shadow-md transition-all cursor-pointer group">
                                <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Latte" className="w-16 h-16 rounded-lg object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-[#402B29] group-hover:text-[#D97218] transition-colors">Caramel Latte</h4>
                                    <p className="text-xs text-[#735145] mt-0.5">Com leite vaporizado</p>
                                </div>
                                <span className="font-bold text-[#402B29] text-sm">R$ 14,90</span>
                            </div>

                            {/* Skeleton Loader (Loading State) */}
                            <div className="flex items-center gap-4 p-3 rounded-xl border border-[#F2F2F2]">
                                <div className="w-16 h-16 rounded-lg bg-gray-200 animate-pulse"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

             {/* 5. Feedback e Widgets Especiais */}
            <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#402B29]">
                    <div className="p-1.5 bg-[#D97218] rounded-lg"></div>
                    Feedback & Widgets
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Status Feedback (Toasts/Alerts) */}
                    <div className="space-y-4">
                        {/* Success Toast */}
                        <div className="bg-[#402B29] text-[#F2F2F2] p-4 rounded-xl shadow-lg border-l-4 border-[#4CAF50] flex items-start gap-3">
                            <div className="bg-[#4CAF50]/20 p-1 rounded-full text-[#4CAF50] shrink-0">
                                <Check size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Pedido Confirmado!</h4>
                                <p className="text-xs text-[#F2F2F2]/70 mt-0.5">Seu café está sendo preparado.</p>
                            </div>
                        </div>

                        {/* Error Toast */}
                        <div className="bg-[#402B29] text-[#F2F2F2] p-4 rounded-xl shadow-lg border-l-4 border-[#EF4444] flex items-start gap-3">
                            <div className="bg-[#EF4444]/20 p-1 rounded-full text-[#EF4444] shrink-0">
                                <AlertCircle size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Falha na Conexão</h4>
                                <p className="text-xs text-[#F2F2F2]/70 mt-0.5">Verifique sua internet e tente novamente.</p>
                            </div>
                        </div>

                         {/* Badge Info */}
                         <div className="inline-flex items-center gap-2 bg-[#F2C166]/20 text-[#D97218] px-3 py-1 rounded-full border border-[#F2C166]/40">
                             <Star size={12} fill="currentColor" />
                             <span className="text-xs font-bold uppercase tracking-wider">Novo Item</span>
                         </div>
                    </div>

                    {/* Widgets Interativos */}
                    <div className="flex flex-col gap-4">
                         {/* Location Widget */}
                        <div className="bg-[#D97218] p-4 rounded-2xl text-[#F2F2F2] flex items-center justify-between shadow-lg">
                             <div className="flex items-center gap-3">
                                 <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                     <MapPin size={20} />
                                 </div>
                                 <div>
                                     <p className="text-[10px] uppercase font-bold opacity-80">Localização Atual</p>
                                     <p className="font-bold text-sm">Av. Paulista, 1230</p>
                                 </div>
                             </div>
                             <ChevronRight size={20} className="opacity-60" />
                        </div>

                        {/* Order Progress Widget */}
                        <div className="bg-white border border-[#735145]/10 p-4 rounded-2xl shadow-sm">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-bold text-[#402B29] uppercase">Status do Pedido</span>
                                <span className="text-xs text-[#D97218] font-bold">Preparando</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-[#D97218] h-2 rounded-full w-[60%] relative">
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#F2C166] rounded-full shadow border border-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#735145]/20 text-center text-[#735145] text-sm">
        <p>Coffy Design System v2.0 • Prototipado com React & Tailwind CSS</p>
      </footer>

      {/* Styles Globais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        .font-logo { font-family: 'Parisienne', cursive; }
        .font-content { font-family: 'Lato', sans-serif; }
      `}</style>
    </div>
  );
};

export default CoffyDesignSystem;