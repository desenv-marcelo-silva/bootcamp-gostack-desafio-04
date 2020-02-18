# bootcamp-gostack-desafio-04
Challenge #4 proposed by Rocketseat - Using React

<p align="center">
  <a href="https://github.com/desenv-marcelo-silva/bootcamp-gostack-desafio-04/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/desenv-marcelo-silva/bootcamp-gostack-desafio-04"></a>
  <a href="https://github.com/desenv-marcelo-silva/bootcamp-gostack-desafio-04/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/desenv-marcelo-silva/bootcamp-gostack-desafio-04"></a>

</p>

<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 4: Introdução ao React
</h3>

<p align="center">“Sucesso não é o resultado de um jogo, mas o destino de uma jornada”!</blockquote>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Criar uma aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Essa aplicação deve ter uma **interface** semelhante a do **Facebook** utilizando React.

As informações contidas na interface são **estáticas**.

### Tela da aplicação

Fazer um layout conforme semelhante ao do Facebook que tem uma lista de posts, seus posts individuais e dentro dele seus comentários.

O layout não precisa ficar exatamente igual. O mais importante é que todos elementos apareçam em tela.

### Componentes

**Header (Amarelo):** Responsável por exibir a logo e o link para acessar o perfil;

**PostList (Verde):** Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do `state` do componente e não em uma variável comum, por exemplo:

```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

**Post (Vermelho):** Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, no PostList existirá algo como abaixo:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

**Comment (Azul):** Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post existirá um novo `.map` para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode 
ver o resultado original do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-04). 

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Proposto com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)


## Quer ver esse projeto rodando?
  
  > Tenha o <strong>git</strong> instalado. 
    Se não tiver, baixe aqui: [Git](https://git-scm.com/ "Best to control your verions.")

  > Tenha o <strong>yarn</strong> instalado. 
    Se não tiver, baixe aqui: [Yarn](https://classic.yarnpkg.com/pt-BR/docs/cli/install "Best package manager.")



## Execute os passos abaixo:

1. Clone o projeto:
  ```sh
   git clone http://github.com/desenv-marcelo-silva/bootcamp-gostack-desafio-04.git
  ```

2. Acesse a pasta onde o clone foi feito e baixe as dependências:
  ```sh
    yarn
  ```

3. Tudo feito sem problemas, basta digitar, na pasta do projeto:
  ```sh
    yarn dev
  ```

4. Acesse o endereço no browser:

   [localhost:9000](http://127.0.0.1:9000)

5. Você deverá ver uma tela como esta abaixo:

   ![Imagem do projeto rodando](2readme/screen.png)