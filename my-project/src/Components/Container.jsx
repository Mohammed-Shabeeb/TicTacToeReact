import React, { useState } from 'react'
import StartModal from './StartModal'
import ResultModal from './ResultModal';
import Game from './Game';

function Container() {

    const [isStartModalOpen, setStartModalOpen] = useState(true)
    const [isResultModalOpen, setResultModalOpen] = useState(false)

    const [result, setResult] = useState('a')



    const openStartModal = () => {
        setStartModalOpen(true);
      };
    
      const closeStartModal = () => {
        setStartModalOpen(false);
      };

      const openResultModal = () => {
        setResultModalOpen(true);
      };
    
      const closeResultModal = () => {
        setResultModalOpen(false);
      };

      const handleResult = ( result ) => {
        setResult(result)
        setResultModalOpen(true)
      }

  return (
    <div className=' '>
      <h2 className='text-7xl text-teal-600 absolute top-5 left-1/2 transform -translate-x-1/2 font-bold md:text-9xl'>Tic Tac Toe</h2>
      <div>
        {isStartModalOpen && <StartModal isOpen={isStartModalOpen} onClose={closeStartModal} />}
        
        {(!isStartModalOpen && !isResultModalOpen) && <Game result={handleResult}/>}
  
        {isResultModalOpen && <ResultModal isOpen={isResultModalOpen} onClose={closeResultModal} win={result} />}
      </div>
      
    </div>
  )
}

export default Container