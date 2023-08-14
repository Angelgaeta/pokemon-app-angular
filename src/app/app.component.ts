import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  constructor() {
    // this.pokemonList ! [] // XX
    /**
     * La plupart du temps le constructor reste vide !
     */
  }

  ngOnInit(): void {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(
      `Vous avez cliquez sur le pokémon ${this.pokemonList[index].name}`
    ); // JS moderne avec JS6
    // console.log('Vous avez clmiqué sur le pokémon' + pokemonName); // JSes5
  }
}
