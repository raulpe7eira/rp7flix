import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriaRepository from '../../repositories/categorias';

function Home() {
  const [listaCategoriaWithVideos, setListaCategoriaWithVideos] = useState([]);

  useEffect(() => {
    categoriaRepository
      .getAllWithVideos()
      .then((response) => {
        setListaCategoriaWithVideos(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault inheritColor paddingAll="0 0 50px">
      {listaCategoriaWithVideos.length === 0 && (<div>Loading...</div>)}

      {listaCategoriaWithVideos.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
