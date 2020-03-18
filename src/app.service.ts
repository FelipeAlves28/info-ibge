import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .toPromise()
    .then(res => res.data)
  }
}
