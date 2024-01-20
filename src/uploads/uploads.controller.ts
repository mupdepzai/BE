import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('uploads')
export class UploadsController {
    
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

    @Get('pictures/:filename')
    async getImage(@Param('filename') filename, @Res() res: Response) {
        res.sendFile(filename, {root: './photos'})
    }
}


