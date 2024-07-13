import { Router } from "express";
import { checkChapter, uploadPage } from "./controllers";

const storageRouter = Router();

storageRouter.get("/check/:key", checkChapter);

storageRouter.get("/check/manga-:mangaId/chapter-:chapterId", checkChapter);
storageRouter.post("/upload/manga-:mangaId/chapter-:chapterId/page-:pageId", uploadPage)
export default storageRouter;
