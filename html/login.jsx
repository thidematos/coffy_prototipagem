import React, { useState, useEffect } from 'react';
import { Coffee, Mail, Lock, User, Eye, EyeOff, ArrowRight, MapPin, Heart } from 'lucide-react';

const CoffyApp = () => {
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);

  // Paleta de cores baseada no prompt
  const colors = {
    gold: '#F2C166',
    orange: '#D97218',
    lightBrown: '#735145',
    darkBrown: '#402B29',
    white: '#F2F2F2',
  };

  // Simula uma tela de "Splash" (Carregamento)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#402B29] text-[#F2F2F2] font-content relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#F2C166 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>
        
        <div className="animate-bounce mb-4">
          <Coffee size={64} color={colors.gold} strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl font-logo tracking-wide text-[#F2C166]">Coffy</h1>
        <p className="mt-2 text-sm text-[#735145] animate-pulse uppercase tracking-widest font-bold">Passando o café...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#402B29] text-[#F2F2F2] font-content flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#D97218] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#735145] rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>

      <div className="w-full max-w-md bg-[#402B29] rounded-3xl border border-[#735145]/30 shadow-2xl overflow-hidden relative z-10 backdrop-blur-sm">
        
        {/* Header com Imagem */}
        <div className="h-56 w-full relative"> {/* Aumentei levemente a altura para acomodar o layout vertical */}
            <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee Art" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#402B29] via-[#402B29]/60 to-transparent flex flex-col justify-end items-center p-6 pb-8">
                <div className="flex flex-col items-center relative">
                    {/* Icone como "chapeuzinho" */}
                    <Coffee className="text-[#F2C166] mb-[-15px] z-10 drop-shadow-lg" size={32} strokeWidth={2} />
                    <h1 className="text-6xl font-logo text-[#F2F2F2] drop-shadow-md pt-2">Coffy</h1>
                </div>
                <p className="text-sm text-[#F2C166] opacity-90 leading-relaxed max-w-[90%] font-light text-center mt-1">
                    Conectando você a experiências autênticas.
                </p>
            </div>
        </div>

        {/* Form Container */}
        <div className="p-6 pt-6">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Campo Nome (Apenas Cadastro) */}
                {authMode === 'signup' && (
                    <div className="group animate-fadeIn">
                        <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Seu Nome</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                            <input 
                                type="text" 
                                placeholder="Como prefere ser chamado?" 
                                className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-base"
                            />
                        </div>
                    </div>
                )}

                {/* Campo Email */}
                <div className="group animate-fadeIn">
                    <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">E-mail</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                        <input 
                            type="email" 
                            placeholder="seu@email.com" 
                            className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-base"
                        />
                    </div>
                </div>

                {/* Campo Senha */}
                <div className="group animate-fadeIn">
                    <div className="flex justify-between items-center mb-1 ml-1">
                        <label className="text-xs text-[#F2C166] font-bold uppercase tracking-wider">Senha</label>
                        {authMode === 'login' && (
                            <a href="#" className="text-xs text-[#F2F2F2]/60 hover:text-[#D97218] transition-colors underline decoration-dotted">Esqueceu?</a>
                        )}
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-12 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all text-base"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                {/* Botão de Ação Principal */}
                <button className="w-full bg-[#F2C166] hover:bg-[#D97218] text-[#402B29] font-bold py-4 rounded-xl shadow-lg shadow-[#F2C166]/20 transform transition-all active:scale-[0.98] mt-6 flex items-center justify-center group uppercase tracking-wider text-base">
                    {authMode === 'login' ? 'Começar Jornada' : 'Confirmar Cadastro'}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                 {/* Botão Secundário para Alternar Modo */}
                 <button 
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    className="w-full bg-transparent border border-[#735145] hover:bg-[#735145]/20 text-[#F2F2F2] font-bold py-3 rounded-xl transition-all active:scale-[0.98] mt-3 uppercase tracking-wider text-sm"
                >
                    {authMode === 'login' ? 'Cadastrar-se' : 'Já tenho conta'}
                </button>

            </form>

            {/* Divisor Social */}
            <div className="mt-8 relative flex items-center justify-center">
                <div className="absolute w-full border-t border-[#735145]/50"></div>
                <span className="relative px-3 bg-[#402B29] text-xs text-[#F2F2F2]/40 uppercase tracking-widest">ou continue com</span>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-3 px-4 border border-[#735145] rounded-xl hover:bg-[#735145]/20 transition-colors">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" color="#F2C166"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" color="#D97218"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" color="#F2F2F2"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" color="#D97218"/>
                    </svg>
                    <span className="text-sm font-bold text-[#F2F2F2]">Google</span>
                </button>
                <button className="flex items-center justify-center py-3 px-4 border border-[#735145] rounded-xl hover:bg-[#735145]/20 transition-colors">
                     <svg className="w-5 h-5 mr-2 text-[#F2F2F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.684.816-1.813 1.508-2.953 1.508-.24 0-.48-.016-.717-.046.04-1.29.563-2.5 1.375-3.328C13.722 1.77 15.143 1 16.365 1.43zm2.597 4.965c-.066.027-2.13 1.205-4.22 1.205-1.782 0-3.61-1.15-4.52-1.15-1.076 0-2.822 1.23-3.6 1.28-3.056.177-5.18 3.553-5.18 6.01 0 1.83.67 3.86 1.45 5.09 1.107 1.75 2.68 1.68 3.65 1.68 1.05 0 2.4-.67 3.98-.67 1.62 0 2.87.67 3.9.67 1.05 0 2.522.02 3.73-1.75.76-1.1 1.44-2.82 1.44-2.85-.022-.032-2.84-1.12-2.84-4.52 0-2.84 2.18-4.23 2.22-4.25-.03-.09-.53-1.26-1.92-1.26z"/>
                    </svg>
                    <span className="text-sm font-bold text-[#F2F2F2]">Apple</span>
                </button>
            </div>
        </div>

        {/* Footer info */}
        <div className="bg-[#402B29] p-4 text-center border-t border-[#735145]/30">
            <p className="text-[10px] text-[#F2F2F2]/40">
                Ao entrar, você concorda com nossos <a href="#" className="text-[#D97218] hover:underline">Termos</a> e <a href="#" className="text-[#D97218] hover:underline">Política de Privacidade</a>.
            </p>
        </div>

      </div>

      {/* Styles for animation and fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        .font-logo {
            font-family: 'Parisienne', cursive;
        }

        .font-content {
            font-family: 'Lato', sans-serif;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CoffyApp;