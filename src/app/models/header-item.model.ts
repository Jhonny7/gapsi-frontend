/*
 *Item de header.
 */
export class HeaderItem {
  /** Generate Item */
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public active: boolean = false,
    public action: Function
  ) {}

  static staticPublicList(): HeaderItem[] {
    let items: HeaderItem[] = [];
   /*  items.push(
      new HeaderItem(1, "Privacidad", null, false, () => {
        window.open("/politica","_self");
      })
    ); */
    return items;
  }

}
