import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface CtaProps {
  className?: string;
}

const Cta: React.FC<CtaProps> = ({ className }) => {
  return (
    <div className={cn("grid tablet:flex items-center justify-between", className)}>
      <Button className='ghost hover:text-primary-main w-fit'>Login</Button>
      <Button className=' bg-gradient-to-t from-primary-main to-primary-15 text-white'>Book a demo</Button>
    </div>
  );
}

export default Cta;
