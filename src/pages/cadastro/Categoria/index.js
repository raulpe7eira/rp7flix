import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [listaCategoria, setListaCategoria] = useState([]);
  const [categoria, setCategoria] = useState(categoriaInicial);

  const handleSubmit = (event) => {
    event.preventDefault();

    setListaCategoria([
      ...listaCategoria,
      categoria,
    ]);

    setCategoria(categoriaInicial);
  };

  const handleChange = (event) => {
    const key = event.target.getAttribute('name');
    const { value } = event.target;

    setCategoria({
      ...categoria,
      [key]: value,
    });
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const resposta = await response.json();
            setListaCategoria(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

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
          type="textarea"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {listaCategoria.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
