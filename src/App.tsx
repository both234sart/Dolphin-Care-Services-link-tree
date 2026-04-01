/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Facebook, Send, Mail, Heart, ShieldCheck, Waves, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { generateLogo } from "./services/logoService";

export default function App() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isLoadingLogo, setIsLoadingLogo] = useState(true);

  useEffect(() => {
    async function loadLogo() {
      try {
        const url = await generateLogo();
        setLogoUrl(url);
      } catch (error) {
        console.error("Failed to generate logo:", error);
      } finally {
        setIsLoadingLogo(false);
      }
    }
    loadLogo();
  }, []);

  const links = [
    {
      name: "Facebook Page",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/share/1CVX3Mp4zv/?mibextid=wwXIfr",
      color: "from-ocean-blue to-aqua-blue",
    },
    {
      name: "Telegram Contact",
      icon: <Send className="w-5 h-5" />,
      url: "https://t.me/dolphincareservices",
      color: "from-aqua-blue to-teal-green",
    },
    {
      name: "Email Us",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:enquirydolpcareservices@gmail.com?subject=Inquiry%20from%20Link%20in%20Bio&body=Hello%20Dolphin%20Care%20Services%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20healthcare%20services.",
      color: "from-teal-green to-ocean-blue",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-radial-[at_50%_50%] from-aqua-blue/5 via-white to-white" />
      
      {/* Floating Shapes - Subtle Dolphin/Wave Theme */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 bg-aqua-blue/10 rounded-full blur-3xl animate-float"
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-green/10 rounded-full blur-3xl animate-float-delayed"
      />

      <main className="w-full max-w-md flex flex-col items-center text-center space-y-8 z-10">
        {/* Logo/Icon Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {isLoadingLogo ? (
            <div className="w-24 h-24 bg-gradient-to-br from-ocean-blue to-aqua-blue rounded-3xl flex items-center justify-center shadow-xl shadow-aqua-blue/20">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          ) : logoUrl ? (
            <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-aqua-blue/10 overflow-hidden p-2">
              <img 
                src={logoUrl} 
                alt="Dolphin Care Services Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-24 h-24 bg-gradient-to-br from-ocean-blue to-aqua-blue rounded-3xl flex items-center justify-center shadow-xl shadow-aqua-blue/20">
              <Waves className="w-12 h-12 text-white" />
            </div>
          )}
          
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-teal-green p-2 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Heart className="w-4 h-4 text-white fill-current" />
          </motion.div>
        </motion.div>

        {/* Header Section */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold tracking-tight text-ocean-blue"
          >
            Dolphin Care Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-ocean-blue/70 leading-relaxed max-w-[280px] mx-auto text-sm font-medium"
          >
            Providing trusted healthcare support with compassion and professionalism.
          </motion.p>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4 pt-4">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center justify-between w-full p-4 bg-white border border-aqua-blue/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="flex items-center space-x-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg shadow-aqua-blue/10`}>
                  {link.icon}
                </div>
                <span className="font-semibold text-ocean-blue group-hover:text-aqua-blue transition-colors">
                  {link.name}
                </span>
              </div>
              
              <div className="text-aqua-blue/30 group-hover:text-aqua-blue transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center space-x-6 pt-4 text-aqua-blue/40"
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Secure</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Care</span>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-ocean-blue/40 text-xs font-medium tracking-wide"
        >
          We are here to support your care needs
        </motion.p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-1 h-1 rounded-full bg-aqua-blue/30" />
          <div className="w-1 h-1 rounded-full bg-teal-green/30" />
          <div className="w-1 h-1 rounded-full bg-ocean-blue/30" />
        </div>
      </footer>
    </div>
  );
}
