import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service embedded;

  get isEmbedded() {
    return this.embedded.originHost !== window.location.origin;
  }
}
