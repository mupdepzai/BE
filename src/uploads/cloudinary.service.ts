import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { error } from 'console';
import { resolve } from 'path';

@Injectable()
export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: 'dfyayszmg',
            api_key: '581435914996794',
            api_secret: 'gJiCuJecEV8O51nW_PniZWBAjbo'
        })
    }

    async uploadImage(filePath: string) {
        return new Promise((resolve, rejects) => {
            v2.uploader.upload(filePath, { folder: 'LOA-BE' }, (error, result) => {
                if (error) return rejects(error);
                resolve({
                    url: result.url,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    resource_type: result.resource_type,
                    created_at: result.created_at,
                    bytes: result.bytes,
                    original_filename: result.original_filename
                })
            })
        })
    }
}
