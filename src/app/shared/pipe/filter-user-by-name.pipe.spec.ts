import { FilterUserByNamePipe } from './filter-user-by-name.pipe';

describe('FilterUserByNamePipe', () => {

  let filterPipe: FilterUserByNamePipe;

  beforeEach(() => {
    filterPipe = new FilterUserByNamePipe();
  });

  it('create an instance', () => {
    expect(filterPipe).toBeDefined();
  });

  it('Debe retornar un array vacío si no tiene coincidencias', () => {
    const items = [];

    const filtro = filterPipe.transform(items, 'name');

    expect(filtro.length).toBe(0);
    expect(filtro).toEqual([]);
  });

  it('Debe retornar los items si no se proporciona ningún campo', () => {
    const items = [];
    items.push({ id: 1, name: 'Cesar' });

    const filtered = filterPipe.transform(items, '');

    expect(filtered).toEqual(items);
  });

  it('Debería retornar el filtro de forma correcta', () => {
    const items = [];

    items.push({ id: 1, name: 'Cesar' });
    items.push({ id: 2, name: 'David' });
    items.push({ id: 3, name: 'Valentina' });
    items.push({ id: 4, name: 'Felipe' });

    const filtered = filterPipe.transform(items, 'Cesar');

    expect(filtered.length).toBe(1);
  });

});
