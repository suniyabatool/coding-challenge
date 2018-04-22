import {Component, OnInit} from '@angular/core';
import {constants} from '../app.constants';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AppUtils} from '../shared/utils/app.util';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.scss']
})
export class Q3Component implements OnInit {

  recipeForm: FormGroup;
  recipeActions = constants.recipeActions;
  recipeSupplies = constants.recipeSupplies;

  selectedRecipeActions = [];
  selectedRecipeSupplies = [];

  actionsDDSettings = Object.assign({}, constants.defaultDropdownSettings);
  suppliesDDSettings = Object.assign({}, constants.defaultDropdownSettings);

  recipeOrder: any [] = []; // recipe order/sequence to save
  recipeList: any [] = []; // list of saved recipes

  constructor() {
  }

  ngOnInit() {

    this.recipeList = localStorage.getItem(constants.recipeList) ? JSON.parse(localStorage.getItem(constants.recipeList)) : [];
    this.actionsDDSettings.text = 'Select Actions';
    this.suppliesDDSettings.text = 'Select Ingredients';

    this.recipeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'selectedActions': new FormControl(this.selectedRecipeActions, [Validators.required]),
      'selectedSupplies': new FormControl(this.selectedRecipeSupplies, [Validators.required])
    });
  }

  onCreateRecipe() {
    AppUtils.markAsDirty(this.recipeForm);
    if (this.recipeForm.valid) {
      this.recipeList.push({
        name: this.recipeForm.controls.name.value,
        recipeOrder: this.recipeOrder
      });

      localStorage.setItem(constants.recipeList, JSON.stringify(this.recipeList));
      this.selectedRecipeActions = [];
      this.selectedRecipeSupplies = [];
      this.recipeOrder = [];
    }
  }

  onRecipeActionSelect(action: any) {
    console.log(action);
    this.recipeOrder.push(action);
  }

  onRecipeActionDeSelect(action: any) {
    console.log(action);

    const index = this.recipeOrder.indexOf(action);

    if (index !== -1) {
      this.recipeOrder.splice(index, 1);
    }
  }

  onRecipeSupplySelect(supply: any) {
    console.log(supply);
    this.recipeOrder.push(supply);
  }

  onRecipeSupplyDeSelect(supply: any) {

    const index = this.recipeOrder.indexOf(supply);

    if (index !== -1) {
      this.recipeOrder.splice(index, 1);
    }

    console.log(supply);
  }

  onIngredientRemove(ingredient) {

    const index = this.recipeOrder.indexOf(ingredient);

    if (index !== -1) {
      this.recipeOrder.splice(index, 1);
    }

    // remove action from selection list
    const indexAction = this.selectedRecipeActions.indexOf(ingredient);

    if (indexAction !== -1) {
      this.selectedRecipeActions.splice(indexAction, 1);
    }

    // remove supplies from selection list
    const indexSupplies = this.selectedRecipeSupplies.indexOf(ingredient);

    if (indexSupplies !== -1) {
      this.selectedRecipeActions.splice(indexSupplies, 1);
    }
  }

}
