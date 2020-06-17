import AWS = require('aws-sdk');
import { config } from './config/config';
//import { fstat } from 'fs';

const c = config;

AWS.config.update({accessKeyId: process.env.SECRET_USERNAME, secretAccessKey: process.env.SECRET_PASSWORD});



// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//     console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
//   }
// });

const credentials = new AWS.Credentials(process.env.SECRET_USERNAME, process.env.SECRET_PASSWORD);
AWS.config.credentials = credentials;

console.log(AWS.config.credentials);


export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: {Bucket: c.aws_media_bucket}
});
//console.log(c.aws_region);
//console.log(c.aws_media_bucket);
//console.log(AWS.config.credentials.accessKeyId);
//console.log(process.env.SECRET_PASSWORD);




/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{

  const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: c.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    });

    return url;
}