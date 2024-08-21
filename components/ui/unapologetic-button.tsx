import React from 'react'

const UnapologeticButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="px-4 py-2 border border-blue-0 bg-transparent text-white  dark:border-blue-0 relative group transition duration-200 rounded-full md:mt-10">
    <div className="absolute bottom-0 right-0 bg-blue-50 h-full w-full opacity-0 -z-0 group-hover:opacity-100 transition-all duration-200 rounded-full" />
    <span className={` inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-590 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}{title}{position === 'right' && icon}
    </span>
</button>
  )
}

export default UnapologeticButton