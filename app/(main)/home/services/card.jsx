import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function Card({ title, para, badge, extra, className }) {
  return (
    <div className={cn("bg-[#1C1F26] border-0 p-6", className)}>
      <div className="w-fit py-1 px-2 bg-[#31D64D] text-white hover:bg-[#31D64D]/90 mb-4">{badge}</div>

      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-400 max-w-lg">{para}</p>
        </div>

        <button className="rounded-full">
          <ArrowUpRight className="h-6 w-6" />
        </button>
      </div>

      {extra}
    </div>
  )
}

export default Card