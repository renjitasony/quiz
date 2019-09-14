export class Question {
    public qid;
    public qquestion;
    public opt = new Array<string>(3);
    public category:string;
    public difficulty:string;
    public qimage:string;
    public answer:string;
    public setQuestion(question){
        this.qid = question._id;
        this.qquestion = question.question;
        this.opt[0] = question.op1;
        this.opt[1] = question.op2;
        this.opt[2] = question.op3;
        this.category = question.category;
        this.difficulty = question.difficulty;
        this.qimage = question.qimage;
        this.answer = question.answer;
    }
}
