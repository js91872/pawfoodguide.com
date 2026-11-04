export const foodArticlePath = (slug: string) => `/food/can-dogs-eat-${slug}`;
export const fruitArticlePath = (slug: string) => `/food/can-dogs-eat-${slug}`;
export const getFoodSlugFromPath = (pathSlug: string) =>
  pathSlug.startsWith('can-dogs-eat-') ? pathSlug.slice('can-dogs-eat-'.length) : null;
