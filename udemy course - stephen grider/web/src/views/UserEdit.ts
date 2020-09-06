import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { View } from "./View";
import { User, UserProps } from './../models/User';

export class UserEdit extends View<User, UserProps> {

  regionsMap(): {[key: string]: string} {
    return {
      userShow: '.user-show', //* <- this.regions.userShow
      userForm: '.user-form', //* <- this.regions.userForm
    };
  }

  //! [onRender] -> called from [render] method in [View Class] 
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
  
  template(): string {
    return `
      <div>
        <div class="user-show">  </div>
        <div class="user-form">  </div>
      </div>
    `;
  }
}