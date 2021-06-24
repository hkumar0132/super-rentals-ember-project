/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    // console.log('data', data);


    return data.map((model) => {
      // console.log('model', model);

      let { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      console.log({ type, ...attributes });

      return { type, ...attributes };
    });
  }
}