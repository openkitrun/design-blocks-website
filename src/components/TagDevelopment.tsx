export function TagDevelopment() {
  return (
    <div className='rounded-full border border-dashed border-zinc-300 py-px px-3 text-xs/6 font-medium text-zinc-900 dark:border-white/20 dark:text-white'>
      <span>Work in progress</span>
    </div>
  );
}

export function TagWip() {
  return (
    <div className='flex flex-row items-center gap-3 rounded-full bg-amber-950/40 px-3 py-1 text-amber-500'>
      <div className='flex h-4 w-4 items-center justify-center rounded-full bg-amber-900/40'>
        <div className='h-2 w-2 rounded-full bg-amber-900' />
      </div>
      <span className='text-xs/6 font-medium'>Work in progress</span>
    </div>
  );
}
