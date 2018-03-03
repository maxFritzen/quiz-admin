import database from '../firebase/firebase';

export const CREATE_QUIZ = 'CREATE_QUIZ';

export const createQuiz = (values) => {
  console.log('createQuiz values:', values);
   return database.ref('quiz').push({
    name: values.quizName,
    questions: values.questions
  })
  .then((ref) => console.log('key:', ref.key));
}
