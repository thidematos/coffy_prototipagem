import React, { useState } from 'react';
import { 
  Coffee, User, Mail, Phone, Camera, ArrowRight, ChevronLeft, Lock, Eye, EyeOff 
} from 'lucide-react';

// --- Componente de Cadastro ---
const SignUpScreen = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Simula o upload de imagem
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full w-full bg-[#402B29] flex flex-col relative overflow-hidden text-[#F2F2F2] font-content">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97218] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#735145] rounded-full mix-blend-screen filter blur-[80px] opacity-10 pointer-events-none"></div>

      {/* Header: Chevron Esquerda | Título Centralizado | Logo Direita */}
      <div className="relative flex items-center justify-center px-6 pt-8 pb-4 z-10 border-b border-[#735145]/20 min-h-[80px]">
        
        {/* Botão de Voltar - Posicionado Absolutamente à Esquerda */}
        <button className="absolute left-6 text-[#F2F2F2] hover:text-[#F2C166] transition-colors mt-2 p-1">
            <ChevronLeft size={28} />
        </button>

        {/* Título Centralizado */}
        <h2 className="text-3xl font-logo text-[#F2C166] tracking-wide mt-3">Crie sua conta</h2>

        {/* Logo Stacked (Xícara acima do nome) - Posicionada Absolutamente à Direita */}
        <div className="absolute right-6 flex flex-col items-center leading-none">
             <Coffee className="text-[#F2C166] mb-[-4px] z-10" size={16} strokeWidth={2.5} />
             <h1 className="text-2xl font-logo text-[#F2F2F2]">Coffy</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 px-6 flex flex-col z-10 overflow-y-auto pb-6 hide-scrollbar pt-6">
        
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Campo de Avatar */}
            <div className="flex justify-center mb-6">
                <div className="relative group">
                    <div className={`w-28 h-28 rounded-full border-2 ${avatarPreview ? 'border-[#F2C166]' : 'border-[#735145] border-dashed'} flex items-center justify-center overflow-hidden bg-[#735145]/10 transition-all group-hover:border-[#F2C166]`}>
                        {avatarPreview ? (
                            <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <User size={32} className="text-[#F2F2F2]/30" />
                        )}
                    </div>
                    
                    {/* Botão de Upload (Overlay) */}
                    <label className="absolute bottom-0 right-0 bg-[#D97218] p-2.5 rounded-full shadow-lg cursor-pointer hover:bg-[#F2C166] transition-colors transform group-hover:scale-110">
                        <Camera size={18} className="text-[#402B29]" />
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                </div>
            </div>

            {/* Nome Completo */}
            <div className="group">
                <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Nome Completo</label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Ex: João Marcelo" 
                        className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all font-content text-base"
                    />
                </div>
            </div>

            {/* E-mail */}
            <div className="group">
                <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">E-mail</label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                    <input 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all font-content text-base"
                    />
                </div>
            </div>

            {/* Telefone */}
            <div className="group">
                <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Telefone</label>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                    <input 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all font-content text-base"
                    />
                </div>
            </div>

            {/* Senha */}
            <div className="group">
                <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Senha</label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-12 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all font-content text-base"
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

            {/* Confirmar Senha */}
            <div className="group">
                <label className="text-xs text-[#F2C166] font-bold mb-1 block ml-1 uppercase tracking-wider">Confirmar Senha</label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 group-focus-within:text-[#F2C166] transition-colors" size={20} />
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="w-full bg-[#735145]/20 border border-[#735145] text-[#F2F2F2] pl-12 pr-12 py-4 rounded-xl focus:outline-none focus:border-[#F2C166] focus:bg-[#735145]/30 placeholder-[#F2F2F2]/20 transition-all font-content text-base"
                    />
                     <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>

            {/* Botão de Cadastro */}
            <button className="w-full bg-[#F2C166] hover:bg-[#D97218] text-[#402B29] font-bold py-4 rounded-xl shadow-lg shadow-[#F2C166]/20 transform transition-all active:scale-[0.98] mt-4 flex items-center justify-center group uppercase tracking-wider text-base">
                Finalizar Cadastro
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <p className="text-center text-xs text-[#F2F2F2]/40 mt-4 pb-4">
                Ao se cadastrar, você concorda com nossos <br/> <a href="#" className="text-[#D97218] hover:underline">Termos de Uso</a>.
            </p>

        </form>
      </div>

    </div>
  );
};

// --- Container Principal Mobile ---
const CoffyApp = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-content antialiased">
      <div 
        className="w-full bg-[#402B29] rounded-[40px] overflow-hidden shadow-2xl relative text-[#F2F2F2] ring-8 ring-gray-800"
        style={{
            maxWidth: '400px',
            aspectRatio: '9/20',
            height: 'auto',
            maxHeight: '90vh'
        }}
      >
         <SignUpScreen />
      </div>

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
      `}</style>
    </div>
  );
};

export default CoffyApp;