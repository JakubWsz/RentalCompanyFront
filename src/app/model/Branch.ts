export class Branch{
  public id: number;
  public modificationDate: string;
  public deleted: boolean;
  public address: string;
  public workers: any;
  public availableCars: any;

  constructor(id: number, modificationDate: string, deleted: boolean,
              address: string, workers: any, availableCars: any) {
    this.id = id;
    this.modificationDate = modificationDate;
    this.deleted = deleted;
    this.address = address;
    this.workers = workers;
    this.availableCars = availableCars;
  }
}
