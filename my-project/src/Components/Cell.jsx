import React from 'react'

function Cell({ value, setValue, x, y, turn }) {
  return (
    <div className='w-32 h-32 border-8 border-solid border-slate-300 hover:border-black'>
        <section className='text-slate-300 text-8xl' onClick={setValue(x, y, turn)}> {value == 'a' ? '' : value} </section>
    </div>
  )
}

export default Cell