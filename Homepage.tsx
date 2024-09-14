import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.module.css'

const Homepage = ({ imagemSrc, texto }) => {
	return (
		<div className="Homepage">
			<img src={imagemSrc} alt="Descrição da imagem" />
			<img src={imagemSrc} alt="Descrição da imagem pequena" />
            <h2>{texto}</h2>
			<p>{texto}</p>
            <p>{texto_@ C.Utensílios 24. Todos os direitos reservados}</p>

		</div>
	);
};