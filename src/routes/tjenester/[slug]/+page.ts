import { error } from '@sveltejs/kit';
import { services } from '$lib/data/services';
import type { PageLoad, EntryGenerator } from './$types';
export const entries: EntryGenerator = () => services.map(({ slug }) => ({ slug }));
export const load: PageLoad = ({ params }) => {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) error(404, 'Tjenesten finnes ikke');
  return { service };
};
