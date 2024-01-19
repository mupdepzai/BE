import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as multer from 'multer';
import { Request, Response } from 'express';

@Controller('uploads')
export class UploadsController {
    
    @Post('upload-photos')
    @UseInterceptors(FileInterceptor('file', {
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
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) { 
                return cb(null, false)
            }
            cb(null, true)
        }
    }))
    uploadPhoto(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        if (!file) {
            throw new BadRequestException('File is not a image');
        }else {
            return {filePath: `http://localhost:3000/uploads/pictures/${file.filename}`}
        }
        
    }


    @Get('pictures/:filename')
    async getImage(@Param('filename') filename, @Res() res: Response) {
        res.sendFile(filename, {root: './photos'})
    }
}


