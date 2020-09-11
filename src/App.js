import React from "react";
import Product from "./components/Product";
import Tabela from "./components/Table"


import "./App.css";



function App() {


  return (
    <>
    <div className="Home">
     
      <Product href = "https://media.playstation.com/is/image/SCEA/god-of-war-key-art-01-ps4-us-01nov17?$native_nt$">
        <p>God of War é uma série de jogos eletrônicos de ação-aventura vagamente baseado nas mitologias grega e nórdica sendo criado originalmente por David Jaffe da Santa Monica Studio. Iniciada em 2005, a série tornou-se carro-chefe para a marca PlayStation, que consiste em oito jogos em várias plataformas</p>
      </Product >

      <Product href = "https://observatoriodegames.uol.com.br/wp-content/uploads/2020/03/Call-of-Duty-Warzone-1.jpg">
        <p>Warzone é a nova gigantesca arena de combate dentro de Call of Duty: Modern Warfare, inteiramente gratuita para todos os jogadores em todas as plataformas disponíveis. Explore um imenso campo de batalha em dois novos modos de jogo – um modo Battle Royale e o inédito Saque, uma luta frenética por dinheiro – e desfrute da jogabilidade inconfundível do Modern Warfare para até 150 jogadores. Entre, equipe-se, pilhe as recompensas e batalhe para chegar ao topo.</p>
      </Product >

      <Product href = "https://img.ibxk.com.br/2020/06/25/25203238404661.jpg?w=1120&h=420&mode=crop&scale=both">
        <p>GTA V é o décimo quinto titulo (XV) da saga Grand Theft Auto, seu lançamento aconteceu no dia 17 de setembro de 2013 nas plataformas Playstation 3 e no XBOX 360, em 18 de novembro de 2014 foram lançadas as versões para Playstation 4 e XBOX ONE, e em 14 de abril de 2015 foi lançada a última versão para a plataforma Windows.</p>
      </Product >

      <Product href = "https://tecnoblog.net/wp-content/uploads/2020/06/the-last-of-us-part-2-1-1.jpg">
        <p>The Last of Us Part II é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É o segundo jogo da franquia The Last of Us e foi lançado em 19 de junho de 2020 exclusivamente para PlayStation 4</p>
      </Product >

      <Product href = "https://observatoriodegames.uol.com.br/wp-content/uploads/2020/04/Resident-evil-4-.jpg">
        <p>Em 1996, um novo jogo chegava aos consoles do mundo todo. Resident Evil, supostamente inspirado em um jogo japonês de 1989 chamado Sweet Home, da própria produtora, era uma das principais apostas da Capcom para a temporada. Depois de 16 anos do lançamento do primeiro jogo da série, os fãs já tiveram acesso a mais de 20 títulos inspirados no universo do game. Para acalmar os jogadores ansiosos por Resident Evil 6, o TechTudo preparou uma retrospectiva listando alguns dos principais fatos que envolvem a história do franquia.</p>
      </Product >



    </div>

    <div>
      <Tabela/>
    </div>
    </>
    );
}

export default App;
