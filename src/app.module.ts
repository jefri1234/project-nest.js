
//nest generate module user   --- nest g mo user
//nest generate controller user  --- nest g co user
//nest g co user --no-spec ==> genera el controlador pero sin archivo test


//nest generate service user ---

import { Module } from '@nestjs/common';

//my modules imports
import {TaskModule} from './tasks/task.module'
import { AuthModule } from './auth/auth.module';
import { ValidationModule } from './validation/validation.module';
import { CourseModule } from './course/course.module';


@Module({
  imports: [TaskModule, AuthModule, ValidationModule, CourseModule],

})
export class AppModule {}
