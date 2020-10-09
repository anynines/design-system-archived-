export class LocalStorage {
  public static getItem(itemName: string): string | null {
    return localStorage.getItem(itemName)
  }

  public static setItem(itemName: string, itemValue: string | object): void {
    if (itemValue instanceof Object) {
      localStorage.setItem(itemName, JSON.stringify(itemValue))
    } else {
      localStorage.setItem(itemName, itemValue)
    }
  }

  public static deleteItem(itemName: string): void {
    localStorage.removeItem(itemName)
  }
}
