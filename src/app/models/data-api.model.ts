export class DataApi {
  constructor(
    public name: string,
    public version: string,
    public creator: string
  ) {}

  public fromJson(json:any){
    return new DataApi(
        json.name,
        json.version,
        json.creator
    );
  }
}
