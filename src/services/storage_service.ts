class StorageService {
  type: "localStorage" | "sessionStorage" | "api";

  constructor(
    type: "localStorage" | "sessionStorage" | "api" = "localStorage"
  ) {
    this.type = type;
  }

  getRecord(key: string): string | null {
    switch (this.type) {
      case "localStorage":
        return this._getRecordFromLocalStorage(key);
      case "sessionStorage":
        return this._getRecordFromSessionStorage(key);
      case "api":
        return this._getRecordFromApi(key);
      default:
        console.error("Storage type not supported", this.type);
        return null;
    }
  }

  setRecord(key: string, value: string): void {
    switch (this.type) {
      case "localStorage":
        this._setRecordToLocalStorage(key, value);
        break;
      case "sessionStorage":
        this._setRecordToSessionStorage(key, value);
        break;
      case "api":
        this._setRecordToApi(key, value);
        break;
      default:
        console.error("Storage type not supported", this.type);
        break;
    }
  }

  removeRecord(key: string): void {
    switch (this.type) {
      case "localStorage":
        this._removeRecordFromLocalStorage(key);
        break;
      case "sessionStorage":
        this._removeRecordFromSessionStorage(key);
        break;
      case "api":
        this._removeRecordFromApi(key);
        break;
      default:
        console.error("Storage type not supported", this.type);
        break;
    }
  }

  // ---------------------------------------------------
  //                  Private methods
  // ---------------------------------------------------

  // LocalStorage
  private _getRecordFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private _setRecordToLocalStorage(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  private _removeRecordFromLocalStorage(key: string): void {
    return localStorage.removeItem(key);
  }

  // SessionStorage
  private _getRecordFromSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  private _setRecordToSessionStorage(key: string, value: string): void {
    return sessionStorage.setItem(key, value);
  }

  private _removeRecordFromSessionStorage(key: string): void {
    return sessionStorage.removeItem(key);
  }

  // API
  private _getRecordFromApi(key: string): string | null {
    // TODO: implement
    return null;
  }

  private _setRecordToApi(key: string, value: string): void {
    // TODO: implement
  }

  private _removeRecordFromApi(key: string): void {
    // TODO: implement
  }
}

export default StorageService;
