import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Action, UserType } from 'src/common/enums';
import { User } from 'src/users/user.entity';


export const defineAbilities=(user:User)=>{
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    if(user.userType === UserType.Admin){
        can(Action.Manage,"all")
    }
    else{
        can(Action.Read,"users")
        cannot(Action.Read,"artiles")
    }


    return build({})
}