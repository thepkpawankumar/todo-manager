import { Appwrite } from 'appwrite';

const config = {
  projectId: process.env.REACT_APP_APPWRITE_PROJECT,
  endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
};

const appwrite = new Appwrite();

class AppwriteService {
    constructor() {
      appwrite.setEndpoint(config.endpoint).setProject(config.projectId);
  
      this.account = appwrite.account; // <--- Add account property
    }

    uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
  
    doCreateAccount = (email, password, name) => {
        return this.account.create(this.uid(), email, password, name);
    }
  
    doLogin = (email, password) => {
        return this.account.createSession(email, password);
    }
  
    doLogout = () => {
        return this.account.deleteSession('current');
    }
    doGetCurrentUser = () => {
    return this.account.get();
    }
  }
  
  export default AppwriteService;