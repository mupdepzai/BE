import { Expose } from "class-transformer";

export class BaseDto {
    @Expose()
    id: number;

    @Expose()
    create_at: string;
    
    @Expose()
    update_at: string;
    
}
