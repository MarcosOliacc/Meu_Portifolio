
const ProjectArray = [
    {
        id: 1,
        name:'OneBitFlix',
        description: ['Projeto acadêmico feito através da plataforma Onebitcode, resultado final do treinamento FullStack e meu maior projeto até hoje.','Com esse projeto desenvolvi minhas habilidades tecnicas em Typescript e aprendi na prática como funciona e como desenvolver um BackEnd com o Postgres e Sequelize, além de expandir e facilitar meu aprendizado futuro com outras tecnologias da area.','Nessa aplicação é possivel:','- Criar uma conta e fazer login através de um sistema de token de segurança;','- Assistir um curso de onde parou, curtir e adicionar a sua lista;', '- Atualizar dados do usuário, como nome, email, senha, telefone, etc;','- No BackEnd é possível adicioar um curso e adicionar e enviar videos como episódios para o servidor;', '- Entre outras...'],
        tecnos: [
            {   
                id:15,
                name: 'Typescript',
                percent: 100
            },
            {
                id:1,
                name: 'NextJs',
                percent: 60
            },
            {
                id:2,
                name: 'PostgresSQL',
                percent: 50
            },
            {
                id:3,
                name: 'Sequelize',
                percent: 50
            }
        ],
        responsiveGalery: ['/onebitG.jpg', '/onebitM.jpg', '/onebitP.jpg'],
        galery: ['onebit01.jpg','onebit02.jpg','onebit03.jpg','onebit04.jpg','onebit05.jpg'],
        bg:'onebitBG.jpg'
    },
    {
        id: 2,
        name:'Range Rover',
        description:['Site espelho da Range Rover, um projeto pessoal que desenvolvi no inicio do meu aprendizado. Com ele desenvolvi minhas habilidades em CSS e suas aplicações de fex-box, grid e entre outras, oque possibilitou expandir minha visão sobre como um site foi construido.','Nessa aplicação, realizei conseitos de navegação dinâmina, ação sobre eventos e responsividade.'],
        tecnos: [
            {   
                id:4,
                name: 'Html',
                percent: 100
            },
            {   
                id:5,
                name: 'CSS',
                percent: 80
            },
            {   id:6,
                name: 'Javascript',
                percent: 20
            },

        ],
        responsiveGalery: ['/rangeG.jpg', '/rangeM.jpg', '/rangeP.jpg'],
        galery: ['range01','range02','range03','range04'],
        bg:'rangeBG.jpg'
    },
    {
        id: 3,
        name:'Fresco Pizzaria',
        description:['Site de uma pizzaria, projeto realizado durante o curso de Wordpress do Curso em Video, apesar de wordpress não fazer parte da grade de um programador de fato, julguei importante pela quantidade de requisições do mercado em abrir um site ou um ecommerce com Wordpress, então decidi desenvolver um pouco nisso também.','Com isso, consegui desenvolver uma boa base sobre como criar um site com Wordpress, oque facilitará meu aprendizado para a criação de um ecommerce futuramente.','Nessa aplicação, realizei conseitos de SEO sobre alcance do site pras pessoas com indexação do Google, proteção do site contra ataques, responsividade, automoção de formulario de contato, entre outros.'],
        tecnos: [
            {   id: 7,
                name: 'WordPress',
                percent: 100
            },
            {   id:8,
                name:'PHP',
                percent: 100
            }
        ],
        responsiveGalery: ['/frescoG.jpg', '/frescoM.jpg', '/frescoP.jpg'],
        galery: ['fresco01','fresco02','fresco03','fresco04'],
        bg:'frescoBG.jpg'
    },
    {
        id: 4,
        name:'Portifólio de Marcos',
        description:['Projeto pessoal, feito com o intuito de me apresentar e demonstrar minhas habilidades para os interessados, muito importante para que um programador seja reconhecido e possivelmente desejado em suas oportunidades.','Aqui, resolvi mostrar, de um jeito simples e direto, um pouco dobre mim, sinta-se a vontade para explorar e me chamar para uma entrevista :b'],
        tecnos: [
            {   id:10,
                name: 'Typescript',
                percent: 80
            },
            {   
                id:11,
                name:'NextJs',
                percent: 90
            },
            {   
                id:12,
                name:'Javascript',
                percent:20
            }
        ],
        responsiveGalery: ['/portiG.jpg', '/portiM.jpg', '/portiP.jpg'],
        galery: ['porti01','porti02','porti03','porti04'],
        bg:'Hexagon.svg'
    },

]
export default ProjectArray