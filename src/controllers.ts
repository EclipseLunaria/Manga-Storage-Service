import { Request, Response } from 'express';
import { checkChapterInS3, uploadFileToS3 } from './services';

export const uploadPage = async (req: Request, res: Response) => {
    //Todo: Add support for different content types
    console.log("uploadFile")
  try { 
    const { mangaId, chapterId, pageId } = req.params;
    const body = req.body;
    const pageKey = `manga-${mangaId}/chapter-${chapterId}/page-${pageId}.jpg`;
    console.log(pageKey)
    await uploadFileToS3(pageKey, body);
    res.status(200).send({ message: 'File uploaded successfully to ' + pageKey });
  } catch (error) {
    res.status(500).send({ error: 'Error uploading file' });
  }
};

export const checkChapter = async (req: Request, res: Response) => {
  try {
    const { mangaId, chapterId } = req.params;
    const exists = await checkChapterInS3(`manga-${mangaId}/chapter-${chapterId}`);
    console.log("chapter exists", exists)
    res.status(200).send({ exists });
  } catch (error) {
    res.status(500).send({ error: 'Error checking file' });
  }
};
