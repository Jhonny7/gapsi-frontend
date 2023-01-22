import moment from 'moment';
export class ProviderModel {
  constructor(
    public name: string,
    public lastName: string,
    public createAt: string,
    public updateAt: string,
    public businessName: string,
    public address: string
  ) {}

  public fromJson(json: any) {
    let created: string = '';
    let updated: string = '';
    if (json.createAt) {
      created = moment(json.createAt.split('.')[0]).format(
        'DD-MMM-YYYY HH:mm:ss'
      );
    }

    if (json.updateAt) {
      updated = moment(json.updateAt.split('.')[0]).format(
        'DD-MMM-YYYY HH:mm:ss'
      );
    }

    return new ProviderModel(
      json.name,
      json.lastName,
      json.createAt,
      json.updateAt,
      json.businessName,
      json.address
    );
  }
}
