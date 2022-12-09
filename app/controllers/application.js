import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'embed-demo/config/environment';

export default class ApplicationController extends Controller {
  @service embedded;

  get isEmbedded() {
    console.log('App host: ', ENV.APP.appHost);
    console.log('Origin host: ', this.embedded.originHost);

    return (
      this.embedded.originHost !== ENV.APP.appHost &&
      ENV.environment === 'production'
    );
  }

  get foo() {
    return this.embedded.args.hasOwnProperty('enable-foo')
      ? this.embedded.args.foo
      : null;
  }
}
