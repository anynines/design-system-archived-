export type LocalStorageItemName = 'year-division'

export class LocalStorage {
  private static prefix = 'anynines-frontend-'

  private static getItemName(itemName: LocalStorageItemName): string {
    return this.prefix + itemName
  }

  public static getItem(itemName: LocalStorageItemName): string | null {
    return localStorage.getItem(this.getItemName(itemName))
  }

  public static setItem(itemName: LocalStorageItemName, itemValue: string | object): void {
    if (itemValue instanceof Object) {
      localStorage.setItem(this.getItemName(itemName), JSON.stringify(itemValue))
    } else {
      localStorage.setItem(this.getItemName(itemName), itemValue)
    }
  }

  public static deleteItem(itemName: LocalStorageItemName): void {
    localStorage.removeItem(this.getItemName(itemName))
  }
}
