

import conf from "../Conf/conf";
import { Client, Account, ID ,Databases,Query} from "appwrite";


export class Service{
    client =new Client();
    databases;
   

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);    
        this.databases=new Databases(this.client);
       

    }
    async createPost({title,slug,content,featureImage,status,userId})
    {
        try {
           return await this.databases.createDocument(
            conf.appwirteDatabaseId,
            conf.appwirteCollectionId,
            slug,
            {
                title,
                content,
                featureImage,
                status,
                userId
            }
           ) 
        } catch (error) {
            console.log("appwrite::service::createPost::",error);
            
        }
    }

    async updatePost({title,slug,content,featureImage,status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwirteDatabaseId,
                conf.appwirteCollectionId,
                slug,{
                    title,content,featureImage,status
                }
            )
        } catch (error) {
            console.log("appwrite::service::updatePost::",error);
        }
    }
    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(
                conf.appwirteDatabaseId,
                conf.appwirteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite::service::deletePost::",error);
            return false;

        }

    }
    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwirteDatabaseId,
                conf.appwirteCollectionId,slug
            )
        } catch (error) {
            console.log("appwrite::service::getPost::",error);
            return false
 
        }
    }
    async getPosts(query=[Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwirteDatabaseId,
                conf.appwirteCollectionId,query
            )
            
        } catch (error) {
            console.log("appwrite::service::createPost::",error);
            return false;
        }
    }

}

const service=new Service();
export default service