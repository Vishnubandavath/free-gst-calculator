'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const redirectMap: Record<string, string> = {
  instagram: 'https://www.instagram.com/vsnexos/',
  threads: 'https://www.threads.com/@vsnexos',
  linkedin: 'https://www.linkedin.com/in/vsnexos/',
  email: 'mailto:business@vsnexos.com',
};

export default function RedirectPage() {
  const params = useParams();
  const router = useRouter();
  const [platform, setPlatform] = useState<string | null>(null);

  useEffect(() => {
    if (params.platform) {
      const p = params.platform as string;
      setPlatform(p);
      
      const targetUrl = redirectMap[p.toLowerCase()];
      
      if (targetUrl) {
        // Track analytics placeholder
        console.log(`Tracking redirect to: ${p}`);
        
        const timer = setTimeout(() => {
          window.location.href = targetUrl;
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        router.push('/');
      }
    }
  }, [params.platform, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="text-center space-y-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-500/50 mx-auto"
        >
          <Calculator size={40} />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Redirecting to VSNEXOS Social Media...
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">
            Please wait while we take you to {platform || 'our social page'}
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-indigo-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
