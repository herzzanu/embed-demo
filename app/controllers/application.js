import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service embedded;

  get foo() {
    return this.embedded.args.hasOwnProperty('enable-foo')
      ? this.embedded.args.foo
      : null;
  }
}
