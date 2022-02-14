//store

/*

The decorator syntax can be written as:

import {observable, computed} from "mobx";
class oneStore {
    @observable count = 0;

    constructor(count) {
        this.count = count;
    }

    @computed get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}

Use decorate to import:

import {decorate, observable, computed} from "mobx";
class oneStore {
    count = 0;
    constructor(count) {
        this.count = count;
    }

    get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}

decorate(oneStore, {
    count: observable,
    isNegative: computed
})
*/
import { makeObservable, observable, computed, action } from 'mobx';

class oneStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action
    });
  }

  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}


//
const store = new oneStore();

function render(res) {
  document.getElementById('root').innerHTML = JSON.stringify(res);
}

render(store);

//actions
document.getElementById('button-1').addEventListener( 'click', function(e) {
  store.increase();
  render(store);
});

document.getElementById('button-2').addEventListener( 'click', function(e) {
  store.decrease();
  render(store);
});