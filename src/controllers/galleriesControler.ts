import { Response, Request, NextFunction } from "express";
import { Gallery } from "../models/Gallery";

const createImage = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const tattoo_artist_id = req.body.tattoo_artist_id
        const image = req.body.image;

        const newImage = await Gallery.create({
            tattoo_artist_id: tattoo_artist_id,
            image: image
          }).save()

          return res.json({
            success: true,
            message: "Uploaded image successfully",
            token: newImage
          })
    }catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Error uploading image",
                error: error
            }
        )
    }
}

const updateImageById = async(req: any, res: Response) => {
    try {
      const image = req.body.image
    
      const galleryId = req.params.id
  
      const gallery = await Gallery.findOneBy(
        {
          id: parseInt(galleryId),
          tattoo_artist_id: req.token.id
        }
      )
  
      if (!gallery) {
        return res.status(404).json({
          success: true,
          message: "gallery image doesnt found and cant updated",
        })
      }
  
      const updateImage = await Gallery.update(
        {
          id: parseInt(galleryId)
        },
        {
          image: image,
        }
      )
  
      return res.json({
        success: true,
        message: "Image updated",
        data: updateImage
      })
    } catch (error) {
      return res.json({
        success: false,
        message: "Image cant by updated",
        error: error
      })
    }
  }

  const deleteImageByTattooArtistId = async (req: Request, res: Response) => {
    try {
      const ImageToRemove = await Gallery.findOneBy({
        tattoo_artist_id: req.token.id,
        id : req.body.id
      });
      if (ImageToRemove) {
        await Gallery.remove(ImageToRemove);
      }
  
      return res.json({
        success: true,
        message: "Image deleted",
        data: ImageToRemove,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Image cant by deleted",
        error: error,
      });
    }
  };

  const getAllGallery = async (req: Request, res: Response) => {
    try {
      const tattoo_artists = await Gallery.find(
        {
          select: {
            image: true,
            tattoo_artist_id: true,
            tattoo_artist: {
                name: true,
                surname: true,
                email: true,
                password: false
              }
        }, relations: {
            tattoo_artist: true
        }
        }
      );
  
      return res.json(
        {
          success: true,
          message: "Gallery retrieved",
          data: tattoo_artists
        }
      )
  
    } catch (error) {
      return res.json(
        {
          success: false,
          message: "Gallery cant be retrieved",
          error: error
        }
      )
    }
  }


export { createImage, updateImageById, deleteImageByTattooArtistId, getAllGallery }