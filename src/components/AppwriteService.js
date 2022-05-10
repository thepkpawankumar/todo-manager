import { Appwrite } from 'appwrite';
import {v4 as uuid} from 'uuid'

const config = {
  projectId: process.env.REACT_APP_APPWRITE_PROJECT,
  endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
};

const appwrite = new Appwrite();

class AppwriteService {
    constructor() {
      appwrite
      .setEndpoint(config.endpoint)
      .setProject(config.projectId);
  
      this.account = appwrite.account;
    }
  
    createAccount = (email, password, name) => {
        return this.account.create(uuid(), email, password, name);
    }
  
    login = (email, password) => {
        return this.account.createSession(email, password);
    }
  
    logout = () => {
        return this.account.deleteSession('current');
    }
    getCurrentUser = () => {
    return this.account.get();
    }
  }
  
  export default AppwriteService;