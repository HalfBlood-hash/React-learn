
import conf from "../Conf/conf";
import { Client,  ID ,Storage,Query} from "appwrite";


export class Bucket{

    client =new Client();
    bucket;

    constructor() {
       this.client=new Client()
       .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); 
        this.bucket=new Storage(this.client)
        
        
    }
    async updateFile(file)
    {
        try {
            
            return await this.bucket.createFile(
                conf.appwirteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite::storage::updateFile::",error);
            return false;
        }
    }
    async deleteFile(fileId)
    {
        try {
                await this.bucket.deleteFile(
                    conf.appwirteBucketId,
                    fileId
                )
                return true;
        } catch (error) {
            console.log("appwrite::storage::deleteFile::",error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const bucket=new Storage();

export default bucket