import React, { useEffect } from 'react';

export const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
    const [newsList, setNewsList] = React.useState([]);
    const [news, setNews] = React.useState(null);
    const [games, setGames] = React.useState([
        {
            id: 1,
            name: "Warspear",
            image: 'newheroes.png'
        },
        {
            id: 2,
            name: "Tíbia",
            image: 'tibia.jpg'
        }
    ]);

    const listNews = () => {
        setNewsList([
            {  
                
                id: 1,
                title: "Veja a Atualização do Warspear Online 11.0: Novas Lendas. Prévia",
                subject: "Resumo da notícia 2",
                content: "Caros amigos! A notícia sobre a próxima jornada nas terras desconhecidas da Liga Sem-Correntes, que apareceu em meio a comemoração do aniversário do Warspear Online, causou grande empolgação entre os habitantes de Arinar. Temendo que a conquista bem-sucedida de Almahad por uma das Alianças pudesse perturbar o delicado equilíbrio na Guerra da Lança, as forças da Legião e dos Sentinelas apelaram aos pacificadores. E novamente os deuses responderam aos pedidos de ajuda, dando vida àqueles que estão destinados a se tornar as novas lendas de Arinar...Gerados pelo sopro de Nuadu e pela luz da estrela, os elfos ao longo dos muitos séculos de sua existência tornaram-se os verdadeiros guardiões do conhecimento sobre as forças da natureza, o poder ilimitado da floresta e a energia incansável de seus habitantes. É esse conhecimento secreto, além do controle de outras pessoas de Arinar, que se tornará um guia para o novo herói dos Primogênitos. E na sombria habitação dos Proscritos, um novo guerreiro do exército dos mortos-vivos está se preparando para a batalha, cheio de ódio por todas as coisas vivas. No calor de sua raiva, este legionário é capaz não apenas de esmagar os oponentes furiosamente, mas também de mudar sua própria aparência… Uma antiga e profunda inimizade é a única coisa que une os Primogênitos e os Proscritos. E parece que esse confronto irreconciliável está prestes a explodir com vigor renovado! Então, é hora de dar uma olhada em duas novas classes! Um conjunto completo de habilidades e talentos estará disponível para cada uma delas, para que novos heróis possam entrar imediatamente no meio da batalha! Além disso, o número de espaços para novos personagens aumentou em 2, então agora você pode ter até 12 heróis em uma conta!",
                ImageBackground: "fundo13.jpg",
                image: "newheroes.png",
                gameId: 1
            },
            {
                id: 2,
                title: "Veja o Evento da semana “Força das Guildas” e Festa da Temporada!",
                subject: "Resumo da notícia 2",
                content: `Bravos guerreiros! Ora, parece que os últimos dias do verão serão bastante quentes! Somente esta semana, você terá a chance de aumentar significativamente a força e o poder da sua guilda, além de ganhar várias recompensas valiosas!50% de desconto ao subir o nível de uma Guilda, de 1 a 11 níveis (menos pontos de guilda e ouro necessários);50% de desconto no aprendizado de todas as habilidades passivas da guilda para todos os níveis (menos pontos de guilda e ouro necessários);50% de desconto no aprendizado de todas as habilidades ativas da guilda para todos os níveis (menos pontos de guilda e ouro necessários);50% de desconto na renomeação de uma guilda;O dobro de pontos de guilda ao concluir todas as masmorras.Durante esta semana, qualquer membro da guilda pode visitar livremente todos os níveis de dificuldade da masmorra de guilda “Coliseu dos Campeões” com a própria guilda! Além disso, os requisitos adicionais para o nível da guilda serão removidos para a entrada! Recompensas especiais também foram adicionadas nas masmorras só durante o evento:traje exclusivo Heavy-handed Jabbar foi adicionado à Masmorra Coliseu dos Campeões (a chance de obtenção de itens aumenta com o nível da masmorra);2 recompensas ao concluir o nível de dificuldade fácil, normal, difícil e heroico da masmorra Coliseu dos Campeões;3 recompensas ao concluir o nível de dificuldade mítico da masmorra Coliseu dos Campeões.Não perca 20 lugares de prêmios no evento de torneio de guilda "Invasão do Caos" (conta para a conquista Senhores do Caos). Os vencedores receberão como recompensas o auxílio “Tesouro do Caos”, “Fúria Absoluta” e a reputação “Tritões das Profundezas”. Você também receberá ainda mais pontos de reputação:o dobro de pontos de reputação com a facção “Tritões das Profundezas” para participação no evento de torneio de guilda “Invasão do Caos”;o dobro de pontos de reputação com a facção “Tritões das Profundezas” para participação no evento de torneio da Guilda “Testes dos Tritões”.E não se esqueça dos 15 lugares de prêmios no Torneio de Guildas (vale para a conquista “Non-fading Glory”):Lugares 1-3: o triplo de coríndons carmesins por vencer o Torneio de Guildas, e todos os membros da guilda receberão um Cofre de Ouro.Lugares 4-10: todos os membros da Guilda receberão coríndons carmesins e um Cofre de Prata.Lugares 11-15: todos os membros da Guilda receberão coríndons carmesins e um Cofre de Bronze. Horário do evento e do torneio: 29.08 às 08.00 BRT - 05.09 07.00 BRT E não acaba por aí! Um fim agradável para o verão será a Festa da Temporada, que acontecerá do dia 28 de agosto às 19.00 BRT a 4 de setembro às 19.00 BRT. O número de pontos de temporada por concluir todas as missões diárias e semanais será triplicado! Corra para ganhar o máximo possível de pontos de temporada e ganhar aquela recompensa cobiçada! A gente se vê no jogo!AIGRIND`,
                image: "guildevent.png",
                gameId: 1
            },
            {
                id: 3,
                title: "Sejam bem-vindos à temporada da arena LXXIII!",
                subject: "Resumo da notícia 2",
                content: `Gladiadores! A nova Temporada da Arena LXXIII começou!



                Participe da luta para obter as recompensas mais exclusivas. O temível “Traje de dracônico” embelezará os heróis que não têm medo de se tornarem líderes na corrida sangrenta pela supremacia no campo de batalha. Além disso, os melhores dos melhores durante a próxima temporada poderão intimidar os inimigos com as habilidades básicas de JxJ “Assistência do Vigia da Arena” e “Ira do Gladiador”, enquanto as moedas mais valiosas “Imperiais de Grandeza” ajudarão a se encherem com os poderes dos deuses ao envolver o corpo em uma armadura de força inimaginável.
    
    
    
                E não podíamos ficar sem bônus! Receba mais imperiais diariamente pelas vitórias nas primeiras duas semanas da temporada:
    
    
    
                11.08, 19h00 BRT - 18.08, 19h00 BRT
    
                Imperiais de Grandeza dobrados nas recompensas diárias do modo “Arena 5x5”.
                18.08, 19h00 BRT - 25.08, 19h00 BRT
    
                Imperiais de Grandeza dobrados nas recompensas diárias do modo “Templo dos Selos 4x4”.
                Além disso, os modos Crisol 4x4 e o Templo dos Selos 3x3 não estarão disponíveis nessa temporada. Em vez disso, você pode lutar nos modos Arena 3x3 e no Templo dos Selos 4x4. Para que não fique confuso, a lista completa dos modos disponíveis na temporada do LXXIII da arena está à seguir:
    
                Arena 2x2
                Arena 3x3
                Templo dos Selos 4x4
                Arena 5x5
                Recompensas da temporada de Arena LXXIII:
    
                1º lugar:
                - Traje “Traje de dracônico”
                - 100 baús do gladiador
    
                - habilidade básica da PvP “Assistência do Guarda da Arena”
                - Auxílio “Aura de gladiador de ouro”
                - moeda “Imperiais da Grandeza”
    
                2º lugar:
                - 75 baús do gladiador
    
                - habilidade básica da PvP “Assistência do Guarda da Arena”
                - Auxílio “Aura de gladiador de prata”
                - moeda “Imperiais da Grandeza”
    
    
                3º lugar:
                - 50 baús do gladiador
    
                - habilidade básica da PvP “Assistência do Guarda da Arena”
                - Auxílio “Aura de gladiador de bronze”
                - moeda “Imperiais da Grandeza”
    
    
                4º-5º lugares:
                - 20 baús do gladiador
    
                - habilidade básica da PvP “Assistência do Guarda da Arena”
                - Auxílio “Aura de gladiador de bronze”
                - moeda “Imperiais da Grandeza”
    
    
                6º-10º lugares:
                - 20 baús do gladiador
                - Auxílio “Aura de gladiador de bronze”
                - moeda “Imperiais da Grandeza”
    
    
                11º-20º lugares:
                - 10 baús do gladiador
                - moeda “Imperiais da Grandeza”
    
                21º-50º lugares:
                - moeda “Imperiais da Grandeza”
    
                Arena 5x5 | Templo dos Selos 4x4:
    
                1º lugar:
                - Traje “Traje de dracônico”
                - habilidade básica da PvP “Ira do Gladiador”
                - Auxílio “Aura de gladiador de ouro”
    
                2º lugar:
                - Traje “Traje de dracônico”
                - habilidade básica da PvP “Ira do Gladiador”
                - Auxílio “Aura de gladiador de prata”
    
                3º lugar:
                - Traje “Traje de dracônico”
                - habilidade básica da PvP “Ira do Gladiador”
                - Auxílio “Aura de gladiador de bronze”
    
                4º-10º lugares:
                - habilidade básica da PvP “Ira do Gladiador”
                - Auxílio “Aura de gladiador de bronze”
    
                11º-15º lugares:
                - habilidade básica da PvP “Ira do Gladiador”
    
                A temporada da Arena LXXIII vai durar de 12.08.2022, 7:00 à 09.09.2022, 7:00 (Horário de Brasília).
    
                Mantenha-se Forte!
                AIGRIND`,
                image: "arenaws.png",
                gameId: 1
            },
            {
                id: 4,
                title: "AJUSTE DE DANO E CURA POR LEVEL",
                subject: "Resumo da notícia 2",
                content: `Haoupa Tibianos! No server save de hoje alguns ajustes foram implementados ao seu personagem. 
                A CipSoft deu também um spoil sobre atualizações futuras. Confira a noticia oficial traduzida:
                
                Ao longo dos últimos anos, adicionamos várias formas e meios que deram força e poder adicionais 
                aos personagens através de recursos como a forja, o sistema de pray ou imbuindo, 
                apenas para citar alguns. Além disso, a atualização de inverno apresentará outro recurso poderoso 
                do qual os jogadores se beneficiarão: a roda de habilidades.
                Ao mesmo tempo, a velocidade com que os personagens ganham níveis vem acelerando ao longo do tempo e hoje em dia, muitos já possuem personagens além do nível 1000. No entanto, seu dano e cura 
                continuam a crescer 1 a cada 5 níveis. Ficou claro que essa escala está desatualizada e muito íngreme,
                pois aumenta o poder de um personagem muito rápido. Queremos resolver isso e também colocar mais peso em equipamentos e habilidades.
                
                Portanto, o impacto que o nível de um personagem tem no dano e na cura do personagem será mitigado.
                
                Com o server save de amanhã, a escala geral do aumento de dano e cura através do level será ajustada 
                da seguinte forma:
                
                Até o level 500: sem mudança, dano e cura +1 a cada 5 níveis
                A partir do level 501-1100: dano e cura +1 a cada 6 níveis
                A partir do level 1101-1800: dano e cura +1 a cada 7 níveis
                A partir do level 1801-2600: dano e cura +1 a cada 8 níveis
                A partir do level 2601-3500: dano e cura +1 a cada 9 níveis
                Acima do level 3500 continua com a mesma lógica (passos de 500, 600, 700, etc.)
                
                Para um level atual de 800 isso significa: Antes desta mudança o nível deste personagem aumentou seu 
                dano e cura em 160, após este ajuste seu dano e cura são reduzidos em 10 a 150 (+1 a cada 5 níveis até 
                o nível 500, +1 a cada 6 níveis do nível 501 ao nível 800).
                
                Essa mudança será aplicada retroativamente, o que significa que o dano e a saída de cura de personagens acima do nível 500 serão menores do que antes, dependendo do nível atual. Por favor, tenha em mente que uma grande parte da produção de dano de um personagem é determinada pela skill e feitiço usados, então o impacto real desta mudança varia.
                
                Sabemos que este é um passo significativo, mas é necessário para o equilíbrio do jogo, especialmente 
                porque a próxima roda de habilidades tornará os personagens mais fortes do que eram antes do ajuste 
                de amanhã.
                
                Para Tíbia!`,
                image: "tibiant.png",
                gameId: 2
            },
            {
                id: 5,
                title: "ORCSOBERFEST",
                subject: "Resumo da notícia 2",
                content: `Haoupa Tibianos !!! Começou hoje o evento Orcsoberfest  !! Confira a noticia oficial: 

                Você quer festejar como se não houvesse amanhã? 
                Pronto para algumas atividades divertidas? 
                Então você está com sorte, pois o Orcsoberfest está chegando!
                
                É hora dos orcs se alimentarem de toda a comida e 
                cerveja que alguém poderia sonhar, enquanto orcs diligentes trabalham
                incansavelmente para garantir que nenhum prato ou caneca fique vazio.
                Ganhe pontos festivos participando de inúmeras atividades, participe da
                loteria para ter a chance de ganhar grandes prêmios ou tente saciar o
                apetite voraz do rei Chuck em troca de uma recompensa.
                
                orcsoberfest_transparent_350.png
                A partir do server save em 14 de outubro, uma barraca aparecerá ao sul de Thais.
                Dentro há um teleporte que está aberto a qualquer jogador Premium, levando você
                à ilha Orcsoberfest. Fale com seu amigo orger Xaver primeiro após 
                sua chegada ou participe diretamente das atividades se você for um veterano da Orcsoberfest.
                
                O festival termina em 18 de março. 
                Durante o fim de semana após o evento (server save em 18 de março até server save em 21 de março) 
                todos os mundos do jogo receberão um aumento de 50% XP para criaturas da classe bestiário “demônio”.
                
                Como se costuma dizer na ilha, significa ‘Boas festas!’ em orc:
                
                Otsaf’tis!`,
                image: "tibiabebados.png",
                gameId: 2
            },
            {
                id: 6,
                title: "Lançamento do som no Tibia",
                subject: "Resumo da notícia 2",
                content: `Haoupa Tibianos! Notaram algo diferente ao logar no tibia? Tivemos hoje uma atualização histórica no 
                jogo, o Tibia agora tem som! Confira a noticia completa do site oficial:
                
                laughing_rotworm_210948_250.png
                Tíbia com som. Hoje, esse sonho se torna realidade!
                
                Depois de mais de 25 anos, o Tibia hoje foi enriquecido pelo som e pela música. 
                Foi um projeto grande e corajoso no qual colocamos paixão, entusiasmo e experiência 
                para finalmente dar ao Tibia sua própria voz.
                
                Hoje, ao lançar o cliente do jogo, o hino do Tibia irá cumprimentá-lo enquanto você 
                embarca em sua próxima aventura, uma aventura que você pode experimentar com som. 
                Mergulhe no mundo acústico do Tibia e explore este novo lado do jogo que você conhece de cor.
                
                Foi crucial para nós permitir que você defina o ritmo em que deseja explorar esse novo 
                aspecto do Tibia. Portanto, você pode encontrar muitas opções de som no menu de opções 
                para alterar suas configurações conforme desejar e escolher a experiência de som de sua 
                preferência.
                
                Sound in Tibia é um convite, e cabe a cada um de vocês escolher ou não experimentá-lo e 
                aceitar esta oferta. Nós encorajamos você a ser curioso!
                
                Se você quiser saber mais sobre como abordamos esse enorme esforço de adicionar som, 
                certifique-se de ler nosso artigo em destaque “The Making of Sound in Tibia”, que lhe dá 
                uma visão exclusiva por trás da cortina.
                
                Você quer curtir o hino e as faixas de assinatura do Tibia mesmo quando não está online no jogo? 
                Visite nossa nova seção de trilha sonora no site para ouvir as diferentes composições musicais 
                que você pode ouvir no jogo enquanto percorre as terras tibianas. Além disso, você também pode 
                baixar a trilha sonora lá.
                
                Agora vá em frente, tibianos,
                trilhar esses caminhos bem trilhados com curiosidade e coração aberto,
                e claro, de ouvidos abertos!`,
                image: "tibiasom.png",
                gameId: 2
            }
        ])
    }
    const getNews = (id) => {
        setNews(newsList.find((news) => news.id == id));
    }

    useEffect(() => {
        listNews();
    }, []);

    return (
        <NewsContext.Provider value={{ newsList, news, listNews, getNews, games }}>
            {children}
        </NewsContext.Provider>
    )
}