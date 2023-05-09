class ResponseErrors {


    static getMessageError(error : any) : string{

      if(error?.status == 403) return "No tienes los permisos necesarios ❌";    


        const message = error.error?.message 
        ? error.error.message
        : error.name;

        return message + " ❌";


    }


}

export default ResponseErrors;