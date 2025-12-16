import React, { useState, useEffect } from 'react';
import { Coffee, Mail, Lock, User, Eye, EyeOff, ArrowRight, ChevronRight } from 'lucide-react';

// --- Componente de Onboarding (Corrigido) ---
const OnboardingScreen = ({ onFinish }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Valorizar Encontros",
      text: "Promovemos união e conexões genuínas entre pessoas através do café"
    },
    {
      title: "Experiências Marcantes",
      text: "Criamos momentos memoráveis que vão além de uma simples xícara de café"
    },
    {
      title: "Apoio Local",
      text: "Fortalecemos negócios locais e valorizamos a cultura cafeeira brasileira"
    },
    {
      title: "Tecnologia Humanizada",
      text: "Usamos tecnologia para melhorar a experiência dos amantes de café"
    },
    {
      title: "Simplicidade",
      text: "Priorizamos facilidade de uso sem comprometer a qualidade da experiência"
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-full w-full flex flex-col justify-between">
      
      {/* Imagem de Fundo com Filtros */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Coffee Atmosphere" 
            className="w-full h-full object-cover"
         />
         {/* Overlay Escuro + Blur */}
         <div className="absolute inset-0 bg-[#402B29]/70 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#402B29] via-[#402B29]/40 to-transparent"></div>
      </div>

      {/* Header - Logo Centralizada */}
      <div className="relative z-10 pt-20 flex flex-col items-center animate-fadeIn">
        <Coffee className="text-[#F2C166] mb-[-12px] z-10 drop-shadow-lg" size={48} strokeWidth={2} />
        <h1 className="text-7xl font-logo text-[#F2F2F2] drop-shadow-md pt-2">Coffy</h1>
      </div>

      {/* Conteúdo do Carrossel (Corrigido e com nova tipografia) */}
      <div className="relative z-10 w-full px-6 mb-8 flex-1 flex flex-col justify-end pb-16">
        
        {/* Texto do Slide Atual */}
        <div className="min-h-[180px] flex flex-col justify-end items-center text-center mb-4">
             {/* Usamos o key={currentSlide} para forçar a remontagem e animação a cada troca */}
            <div key={currentSlide} className="animate-fadeInSlide">
                {/* Fonte ajustada para text-4xl */}
                <h2 className="text-4xl font-logo text-[#F2C166] mb-3 leading-tight drop-shadow-sm">
                    {slides[currentSlide].title}
                </h2>
                {/* Fonte ajustada para text-base */}
                <p className="text-base text-[#F2F2F2] leading-relaxed px-4 font-content">
                    {slides[currentSlide].text}
                </p>
            </div>
        </div>

        {/* Indicadores do Carrossel */}
        <div className="flex gap-2 mb-8 mt-4 justify-center">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-8 bg-[#D97218]' : 'w-2 bg-[#F2F2F2]/30'
                    }`}
                />
            ))}
        </div>

        {/* Botão CTA */}
        <button 
            onClick={onFinish}
            className="w-full bg-[#F2C166] hover:bg-[#D97218] text-[#402B29] font-bold py-4 rounded-xl shadow-lg shadow-[#F2C166]/20 transform transition-all active:scale-[0.98] flex items-center justify-center group uppercase tracking-wider text-sm"
        >
            Desfrute dessa experiência
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
        </button>

      </div>
    </div>
  );
};

// --- Componente de Login/Cadastro (Ajustado para o novo container) ---
const AuthScreen = () => {
    const [authMode, setAuthMode] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="h-full w-full flex items-center justify-center p-4 relative animate-fadeIn">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#D97218] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#735145] rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
  
        <div className="w-full bg-[#402B29] rounded-3xl border border-[#735145]/30 shadow-2xl overflow-hidden relative z-10 backdrop-blur-sm">
          
          {/* Header com Imagem Pequena */}
          <div className="h-48 w-full relative">
              <img 
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coffee Art" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#402B29] via-[#402B29]/60 to-transparent flex flex-col justify-end items-center p-6 pb-6">
                  <div className="flex flex-col items-center relative">
                      <Coffee className="text-[#F2C166] mb-[-12px] z-10 drop-shadow-lg" size={28} strokeWidth={2} />
                      <h1 className="text-5xl font-logo text-[#F2F2F2] drop-shadow-md pt-2">Coffy</h1>
                  </div>
                  <p className="text-xs text-[#F2C166] opacity-90 leading-relaxed max-w-[90%] font-light text-center mt-1">
                      Conectando você a experiências autênticas.
                  </p>
              </div>
          </div>
  
          {/* Form Container */}
          <div className="p-5 pt-4">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  
                  {authMode === 'signup' && (
                      <div className="group animate-fadeInSlide">
                          <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Seu Nome</label>
                          <div className="relative">
                              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={18} />
                              <input type="text" placeholder="Como prefere ser chamado?" className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-sm font-content" />
                          </div>
                      </div>
                  )}
  
                  <div className="group animate-fadeInSlide">
                      <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">E-mail</label>
                      <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={18} />
                          <input type="email" placeholder="seu@email.com" className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-sm font-content" />
                      </div>
                  </div>
  
                  <div className="group animate-fadeInSlide">
                      <div className="flex justify-between items-center mb-1 ml-1">
                          <label className="text-xs text-[#F2C166] font-bold uppercase tracking-wider">Senha</label>
                          {authMode === 'login' && <a href="#" className="text-xs text-[#F2F2F2]/60 hover:text-[#D97218] transition-colors underline decoration-dotted">Esqueceu?</a>}
                      </div>
                      <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={18} />
                          <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-10 pr-10 py-3 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-sm font-content" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors">
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                      </div>
                  </div>
  
                  <button className="w-full bg-[#F2C166] hover:bg-[#D97218] text-[#402B29] font-bold py-3.5 rounded-xl shadow-lg shadow-[#F2C166]/20 transform transition-all active:scale-[0.98] mt-4 flex items-center justify-center group uppercase tracking-wider text-sm">
                      {authMode === 'login' ? 'Começar Jornada' : 'Confirmar Cadastro'}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
  
                  <button type="button" onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="w-full bg-transparent border border-[#735145] hover:bg-[#735145]/20 text-[#F2F2F2] font-bold py-3 rounded-xl transition-all active:scale-[0.98] mt-2 uppercase tracking-wider text-xs">
                      {authMode === 'login' ? 'Cadastrar-se' : 'Já tenho conta'}
                  </button>
              </form>

            <div className="mt-4 flex items-center justify-center gap-4">
                 <button className="p-2.5 border border-[#735145] rounded-xl hover:bg-[#735145]/20 transition-colors"><span className="text-xs font-bold text-[#F2F2F2]">G</span></button>
                 <button className="p-2.5 border border-[#735145] rounded-xl hover:bg-[#735145]/20 transition-colors"><span className="text-xs font-bold text-[#F2F2F2]"></span></button>
            </div>
          </div>
        </div>
      </div>
    );
};

// --- App Principal (Container Mobile) ---
const CoffyApp = () => {
  const [currentView, setCurrentView] = useState('onboarding'); // 'onboarding' ou 'auth'

  return (
    // Container externo para centralizar na tela do navegador
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-content antialiased">
      
      {/* Container Simulando Mobile (Proporção iPhone) */}
      <div className="w-full max-w-[430px] h-[90vh] max-h-[932px] bg-[#402B29] rounded-[40px] overflow-hidden shadow-2xl relative text-[#F2F2F2] ring-8 ring-gray-800">
        {currentView === 'onboarding' && <OnboardingScreen onFinish={() => setCurrentView('auth')} />}
        {currentView === 'auth' && <AuthScreen />}
      </div>

      {/* Styles Globais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        .font-logo { font-family: 'Parisienne', cursive; }
        .font-content { font-family: 'Lato', sans-serif; }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }

        /* Nova animação para os slides */
        @keyframes fadeInSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlide { animation: fadeInSlide 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CoffyApp;