export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type='submit'
      className='w-full px-5 py-3 text-sm font-medium text-center text-white border border-white rounded-full'
    >{children}
    </button>
  )
}
