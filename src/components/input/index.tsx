import { ComponentProps, ReactNode } from 'react'

export const Input: React.FC<
  { icon?: ReactNode; label: string } & ComponentProps<'input'>
> = ({ icon, label, ...props }) => {
  return (
    <label className='flex flex-col border-b focus-within:border-orange-600 gap-2 outline-none w-full px-4 py-2 transition-colors'>
      <span>{label}</span>
      <div className='flex gap-3'>
        {icon && <span>{icon}</span>}
        <input
          type='text'
          className='outline-none'
          {...props}
        />
      </div>
    </label>
  )
}
