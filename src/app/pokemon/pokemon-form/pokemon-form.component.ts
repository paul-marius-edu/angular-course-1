import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-form.component.html',
  styles: ``
})
export class PokemonFormComponent {
  @Input() pokemon: Pokemon;

  constructor(private router: Router) { }

  // Vérifie si mon pokémon possède un tel type
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  // Sélectionner un type côté formulaire
  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      // Chercher l'index du type parmi pokemon.types
      const index = this.pokemon.types.indexOf(type);
      // Enlever le type dans pokemon.types
      this.pokemon.types.splice(index, 1);
    }
  }

  // Soumettre le formulaire
  onSubmit() {
    console.log('Subit form!');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
