import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hocks/useForm';
import categoriaRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const [listaCategoria, setListaCategoria] = useState([]);
  const { values: categoria, handleChange, clearForm } = useForm({
    titulo: '',
    descricao: '',
    cor: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setListaCategoria([
      ...listaCategoria,
      categoria,
    ]);

    clearForm();
  };

  useEffect(() => {
    categoriaRepository
      .getAll()
      .then((response) => {
        setListaCategoria(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          name="titulo"
          value={categoria.titulo}
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

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {listaCategoria.length === 0 && (<div>Loading...</div>)}

      <ul>
        {listaCategoria.map((categoria) => (
          <li key={categoria.titulo}>
            {categoria.titulo}
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
