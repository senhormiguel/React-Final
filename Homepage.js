import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Homepage from './Homepage.module.css';
import Nav from './Nav.js';

const Homepage = ({ imageSrc, text }) => {
	return (
		<div className="Homepage">
		// Um produto de destaque à venda como imagem
			<img src={imageSrc} alt="Produto de destaque" />
		// Para que serve o produto e descrição breve do Chef HSP, devido as receitas
			<p>{text: "Produto de destaque é a panela HSP, produto para inserir comida e muito mais, aguenta grandes fervuras de água e é a panela que aguenta pressão de variável culinária, uma panela consistente e bela que recomendada pelo chef Henrique Sá Pessoa.
			Henrique Sá Pessoa tirou o curso de cozinha no Pennsylvania Institue of Culinary Arts na cidade de Pittsburgh, nos Estados Unidos, entre 1996 e 1997. A sua carreira profissional arrancou em Londres, no prestigiado Park Lane Hotel, em Picadilly, onde esteve até finais de 1999. Voou depois para a Austrália, onde trabalhou no Sheraton on the Park, em Sidney, tendo feito parte de várias secções da cozinha do Hotel.

			Regressou a Portugal em 2002, tendo passado pelo Lapa Palace, pelo Restaurante Cirpiani, pelo Restaurante Xarope em Cascais, La Villa na praia do Tamariz, Bairro Alto Hotel e Restaurante Flores. Em 2005 venceu o Concurso Chefe Cozinheiro do Ano, o mais prestigiado da cozinha em Portugal. Até 2008 foi responsável pela cozinha do Restaurante Panorama, no Sheraton Lisboa Spa e Hotel."}</p>
		</div>
	);
};
// Botão de compra do produto
function AddtoCart() {

	const [button, setbutton] = useState("Add to Cart");

	return (

		<>
			<h5>Add to Cart</h5> //
			<button type="button" onClick ={() => AddtoCart("Done")}>
			Done</button>
		</>
	)
}
	//
const root = ReactDOM.createRoot(document.getElementById(`root'));
root.render(<AddtoCart />);
	//

