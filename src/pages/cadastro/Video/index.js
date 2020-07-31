import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hocks/useForm';
import categoriaRepository from '../../../repositories/categorias';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();

  const [listaCategoria, setListaCategoria] = useState([]);
  const { values: video, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  const sugestoes = listaCategoria.map((categoria) => categoria.titulo);

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoria = listaCategoria.find((categoria) => categoria.titulo === video.categoria);

    videoRepository
      .create({
        titule: video.titulo,
        url: video.url,
        categoriaId: categoria.id,
      })
      .then(() => {
        history.push('/');
      });
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
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          name="titulo"
          value={video.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={video.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={video.categoria}
          onChange={handleChange}
          suggestions={sugestoes}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
