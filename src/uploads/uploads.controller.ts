import { BadRequestException, Controller, Get, HttpStatus, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { CloudinaryService } from './cloudinary.service';
import { BaseResponse } from 'src/product/response/base.response';

@Controller('uploads')
export class UploadsController {

    constructor(private readonly cloudinaryService: CloudinaryService) {}
    
    @Post('upload-photos')
    @UseInterceptors(FilesInterceptor('files', 10,{
        storage: diskStorage({
            destination: './photos',
            filename: (req, file, cb) => {                
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split(" ").join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|psd|eps|ai|heic|raw)$/)) { 
                return cb(null, false)
            }
            cb(null, true)
        }
    }))
    async uploadPhoto(@UploadedFiles() files: Express.Multer.File[]) {
        if (!files || files.length === 0) {
            throw new BadRequestException('No files uploaded');
        }
        const filePaths = files.map(file => `${file.filename}`);
        return { filePaths };
    }

    @Post('upload-cloud')
    @UseInterceptors(FilesInterceptor('file', 10,{
        storage: diskStorage({
            filename: (req, file, cb) => {                
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split(" ").join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|psd|eps|ai|heic|raw)$/)) { 
                return cb(null, false)
            }
            cb(null, true)
        }
    }))
    async uploadFile(@UploadedFiles() files: Express.Multer.File[], @Res() res: any) {
        console.log(files);
        try {
            const uploadPromises = files.map(file => this.cloudinaryService.uploadImage(file.path));
            const data = await Promise.all(uploadPromises);
            return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
        } catch(error) {
            console.log('error upload image: ', error)
            throw new Error('Failed to upload image')
        }
    }

    @Get('pictures/:filename')
    async getImage(@Param('filename') filename, @Res() res: Response) {
        res.sendFile(filename, {root: './photos'})
    }

}


