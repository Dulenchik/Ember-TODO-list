export function initialize(application) {
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'inject-store',
  initialize
};
