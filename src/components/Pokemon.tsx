import React, { useState } from 'react';
import axios from 'axios'

export const Pokemon = () => {
  // state定義
  const [name, setName] = useState('ポケモン');
  const [images, setImages] = useState<string[]>([])
  // スタイル定義
  const buttonStyle = {
    border: 'none',
    height: '36px',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '8px',
    padding: '8px',
  };
  // ポケモンの画像を取得するaxios
  const getPokemon = async (pokemon: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response;
  }
  // ポケモンGETだぜボタンクリック時の挙動
  const onClick = (pokemon: string) => {
    getPokemon(pokemon)
      .then((res) => {
        console.log(res)
        const pokeName = res.data.name;
        const pokeImages = res.data.sprites.versions;
        const pokeImagesURL: string[] = [...images];
        Object.keys(pokeImages).map((key) => {
          return Object.keys(pokeImages[key]).map((key2) => {
            return pokeImagesURL.push(pokeImages[key][key2]["front_default"]);
          })
        })

        setName(pokeName);
        setImages(pokeImagesURL);
      });
  };
  // クリアボタン押下時の挙動
  const onClickClear = () => {
    setImages([]);
  }
  // 画面描画
  return (
    <>
      <h1>歴代の {name}, GETだぜ！</h1>
      <button style={buttonStyle} onClick={onClickClear}>クリア</button>
      <div className="flex-container">
        <button className="flex-item" style={buttonStyle} onClick={() => onClick('pikachu')}>ポケモン、GETだぜ！</button>
        <button className="flex-item" style={buttonStyle} onClick={() => onClick('pikachu')}>ポケモン、GETだぜ！</button>
        <button className="flex-item" style={buttonStyle} onClick={() => onClick('pikachu')}>ポケモン、GETだぜ！</button>
      </div>
      <div className="flex-container">
        {images && images.map((image, index) => {
          return <img key={index} width="100px" height="100px" src={image} alt="alt" />
        })}
      </div>
    </>
  )

}
