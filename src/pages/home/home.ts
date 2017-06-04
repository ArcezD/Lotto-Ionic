import { Component } from '@angular/core';
import { LottoServiceProvider } from '../../providers/lotto-service/lotto-service';
import { LottoGame } from '../../models/lotto-game';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LottoServiceProvider]
})
export class HomePage {

  game: LottoGame = {
    games: 1,
    favorites: []
  };
  games: number[];
  errorMessage: String;

  constructor(private lottoService: LottoServiceProvider, public alertCtrl: AlertController) { }

  addFavorite() {
    let prompt = this.alertCtrl.create({
      title: 'Añadir favorito',
      inputs: [
        {
          name: 'favorito',
          placeholder: 'Favorito'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Añadir',
          handler: data => {
            console.log('Saved clicked');
            this.game.favorites.push(Number(data.favorito));
            console.log(data.favorito);
            console.log(this.game.favorites);
          }
        }
      ]
    });
    prompt.present();
  }

  getGames() {
    this.lottoService.getLottoGames(this.game)
      .subscribe(games => {
        this.games = games,
          error => this.errorMessage = <any>error
      });

  }
}
