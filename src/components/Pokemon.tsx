import React from 'react';

export const Pokemon = () => {
  const buttonStyle = {
    border: 'none',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  const onClick = () => {
    alert('ピカチュウ、GETだぜ！')
  };

  return (
    <>
      <h1>ここにポケモン画像</h1>
      <button style={buttonStyle} onClick={onClick}>ポケモン、GETだぜ！</button>
    </>
  )

}
