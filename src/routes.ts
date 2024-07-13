import { Router } from "express";
import { checkChapter, uploadPage } from "./controllers";

const router = Router();

router.get("/check/:key", checkChapter);

router.get("/check/manga-:mangaId/chapter-:chapterId", checkChapter);
router.post("/upload/manga-:mangaId/chapter-:chapterId/page-:pageId.jpg", uploadPage)
export default router;
