import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { QuestionComponent } from './question/question.component';

import {QuestionService} from './question.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { EditablequestionComponent } from './editablequestion/editablequestion.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { QuizchoiceComponent } from './quizchoice/quizchoice.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizprogressComponent } from './quizprogress/quizprogress.component';
import { RulesComponent } from './rules/rules.component';
import { CategoriesComponent } from './categories/categories.component';
import { ScoreComponent } from './score/score.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

const approutes:Routes=[
                        {path:"",component:LoginComponent},
                        {path:"demo",component:DemoComponent},
                        {path:"home",component:QuizComponent,
                        children:[
                          {path:"",component:HomeComponent},
                          {path:"choice",component:QuizchoiceComponent},
                          {path:"questionnaire",component:QuestionnaireComponent},
                          {path:"rules/:category",component:RulesComponent},
                          {path:"categories",component:CategoriesComponent},
                          {path:"score/:score",component:ScoreComponent}
                        ]},
                        {path:"signup",component:SignupComponent},
                        {path:"question/:category",component:QuestionComponent,runGuardsAndResolvers:"pathParamsChange"},
                        {path:"questionnaire/:category",component:QuestionnaireComponent}
                        
]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    QuestionComponent,
    QuestionnaireComponent,
    NewquestionComponent,
    EditablequestionComponent,
    LoginComponent,
    SignupComponent,
    QuizchoiceComponent,
    HomeComponent,
    QuizComponent,
    QuizprogressComponent,
    RulesComponent,
    CategoriesComponent,
    ScoreComponent,
    HeaderComponent,
    FooterComponent
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
