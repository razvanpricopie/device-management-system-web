export abstract class EnumUtils {
  public static listEnum(enumObject: any): { id: number; name: string }[] {
    const array = Object.keys(enumObject);

    const indexes = array.slice(0, array.length / 2);
    const values = array.slice(array.length / 2, array.length);

    return indexes.map((v, i) => ({ id: +v, name: values[i] }));
  }

  public static getEnumValue(
    enumObject: any,
    searchBy: { id: number; name: string }
  ): EnumType {
    const list = this.listEnum(enumObject);
    if (searchBy.id !== null || searchBy.id !== undefined) {
      const item = list.find((i) => i.id === searchBy.id);
      if (item) return item;
      else return { id: searchBy.id, name: '' };
    } else if (searchBy.name) {
      const item = list.find(
        (i) => i.name.toLocaleLowerCase() === searchBy.name.toLocaleLowerCase()
      );
      if (item) return item;
      throw new Error('No match');
    }
    return new EnumType();
  }
}

export class EnumType {
  id?: number;
  name?: string;
}
