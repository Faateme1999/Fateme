import { AbstractControl, ValidationErrors } from "@angular/forms";

export class codeValidator{

    static checkCode (control:AbstractControl): Promise< ValidationErrors | null> {
        return new Promise ((resolve,reject) => {
          setTimeout(()=>{
            if(control.value === "2367")
              resolve (null);
          else 
          resolve ({checkCode:true});
          },5000);
      });
      }
      
      
      

      }
