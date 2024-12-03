import { Button, Input } from "../components";

export const StepTwo = () => {
  const answers = ['Ваш ответ', 'Ваш ответ', 'Ваш ответ', 'Ваш ответ']; // Массив вынесен

  return (
    <div className="variants-quiz">
      <div className="question">
        <h2>2. Занимательный вопрос</h2>
        <ul className="variants">
          {answers.map((ans, index) => (
            <li className="variant-wrapper" key={index}>
              <Input
                type="radio"
                name="variant" // Сделано общее имя для группы радиокнопок
                id={`variant-${index}`}
              />
              <label htmlFor={`variant-${index}`}>{ans}</label>
            </li>
          ))}
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
