import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [listaCategoria, setListaCategoria] = useState([]);
  const [categoria, setCategoria] = useState(categoriaInicial);

  const handleSubmit = event => {
    event.preventDefault();

    setListaCategoria([
      ...listaCategoria,
      categoria,
    ]);

    setCategoria(categoriaInicial);
  };

  const handleChange = event => {
    const key = event.target.getAttribute('name');
    const value = event.target.value;

    setCategoria({
      ...categoria,
      [key]: value,
    });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {listaCategoria.map((categoria, indice) => {
          return (
            <li key={`${categoria}#${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
