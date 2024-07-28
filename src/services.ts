import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { config } from "./config";
import dotenv from "dotenv";
import { fromEnv } from "@aws-sdk/credential-provider-env";
dotenv.config();

const s3Client = new S3Client({ region: "us-west-2", credentials: fromEnv() });

const checkChapterInS3 = async (prefix: string) => {
  return s3Client
    .send(
      new ListObjectsCommand({
        Bucket: config.bucket,
        Prefix: prefix,
        MaxKeys: 1,
      })
    )
    .then(() => true)
    .catch((error) => {
      console.log(error);
      if (error.name === "NotFound") {
        return false;
      }
      throw error;
    });
};

const uploadFileToS3 = async (key: string, body: any) => {
  try {
    console.log(
      "uploading file to s3",
      process.env.AWS_ACCESS_KEY_ID,
      process.env.AWS_SECRET_ACCESS_KEY
    );
    await s3Client.send(
      new PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: body,
      })
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { checkChapterInS3, uploadFileToS3 };
