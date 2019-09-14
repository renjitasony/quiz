import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CategoryComponent } from './category/category.component';
import { QuestionComponent } from './question/question.component';

import {QuestionService} from './question.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { EditablequestionComponent } from './editablequestion/editablequestion.component'

const approutes:Routes=[
                        {path:"",component:DemoComponent},
                        {path:"question/:idlist",component:QuestionComponent,runGuardsAndResolvers:"pathParamsChange"},
                        {path:"questionnaire/:category",component:QuestionnaireComponent}
                        
]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CategoryComponent,
    QuestionComponent,
    QuestionnaireComponent,
    NewquestionComponent,
    EditablequestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes,{onSameUrlNavigation:"reload"}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
