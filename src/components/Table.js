import React from "react"

export default function Table(){
  return(
  <table cellpadding="10">
      <thead>
        <tr>
          <th class="titulo" ><img className="tableImg" src="https://tecnoblog.net/meiobit/wp-content/uploads/2020/04/20200407jogos-em-promocao.jpg" /></th>
          <th><img className="tableImg" src="https://media.playstation.com/is/image/SCEA/god-of-war-key-art-01-ps4-us-01nov17?$native_nt$" /></th>
          <th><img className="tableImg" src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/03/Call-of-Duty-Warzone-1.jpg" /></th>
          <th><img className="tableImg" src="https://img.ibxk.com.br/2020/06/25/25203238404661.jpg?w=1120&h=420&mode=crop&scale=both" /></th>
          <th><img className="tableImg" src="https://tecnoblog.net/wp-content/uploads/2020/06/the-last-of-us-part-2-1-1.jpg" /></th>
          <th><img className="tableImg" src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/04/Resident-evil-4-.jpg"/></th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="titulo"><b>Nome</b></td>
          <td>God of War</td>
          <td>Call Of Duty Warzone</td>
          <td>GTA V</td>
          <td>The Last of Us Part II</td>
          <td>Residente Evil 4</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Desenvolvedora</b></td>
          <td>Santa Monica Studio</td>
          <td> Infinity Ward, Raven Software</td>
          <td> Rockstar North </td>
          <td> Naughty Dog</td>
          <td> Capcom</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Gênero</b></td>
          <td>Ação-aventura</td>
          <td>Ação-aventura</td>
          <td>Ação-aventura</td>
          <td>Visual Novel</td>
          <td>RPG</td>
          
        </tr>
        <tr>
          <td class="titulo"><b>Metacritic Metascore</b></td>
          <td>
            <div class="metascore"><h6>94</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>79</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>97</h6></div>
          </td>
          <td>
            <div class="metascore"><h6>95/h6></div>
          </td>
          <td>
            <div class="metascore"><h6>84</h6></div>
          </td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Diretor</b></td>
          <td>Cory Balrog</td>
          <td>Ken Levine</td>
          <td>Hidemaro Fujibayashi</td>
          <td>Dan Salvato</td>
          <td>Hidetaka Miyazaki</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Plataforma</b></td>
          <td>PS4</td>
          <td>XBOX 360/PS3/PC</td>
          <td>Nintendo Switch</td>
          <td>PC</td>
          <td>XBOX 360/PS3/PC/PS4/XBOX ONE/Switch</td>
         
        </tr>
        <tr>
          <td class="titulo"><b>Classificação Indicativa</b></td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
          <td>
            <div class="indicativa_18"><h6>18</h6></div>
          </td>
         
        </tr>
      </tbody>
    </table>
  );
}