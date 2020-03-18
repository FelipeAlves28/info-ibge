import { HttpService } from '@nestjs/common';
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<any>;
}
