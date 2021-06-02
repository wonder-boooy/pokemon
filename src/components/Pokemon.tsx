import React, { useState } from 'react';
import axios from 'axios'

export const Pokemon = () => {
  // state定義
  const [name, setName] = useState('ポケモン');
  const [images, setImages] = useState(['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pok%C3%A9ball.png/200px-Pok%C3%A9ball.png'])
  // スタイル定義
  const buttonStyle = {
    border: 'none',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer'
  };
  // ポケモンの画像を取得するaxios
  const getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    return response;
  }
  // ボタンクリック時の挙動
  const onClick = () => {
    getPokemon()
      .then((res) => {
        console.log(res)
        const pokeName = res.data.name;
        const pokeImages = res.data.sprites;
        const pokeImagesURL = Object.keys(pokeImages).map((key) => {
          return pokeImages[key];
        })

        setName(pokeName);
        setImages(pokeImagesURL);
      });
  };
  // 画面描画
  return (
    <>
      <h1>{name}, GETだぜ！</h1>
      <button style={buttonStyle} onClick={onClick}>ポケモン、GETだぜ！</button>
      <div className="flex-container">
        {images.map((image, index) => {
          return <img key={index} sizes="1vw" src={image} alt="alt" />
        })}
      </div>
    </>
  )

}
