"use client";

import React, { useState } from "react";
import { Card, Button, Radio, Progress, Result, Tag } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ReloadOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const questions = [
  {
    question: "PM только пишет документы и ходит на встречи. Так?",
    options: [
      "Да, это основная работа PM",
      "Нет — документы и встречи только ради результата: понять проблему и решить её",
      "PM вообще не пишет документы",
      "PM заменяет собой весь отдел маркетинга",
    ],
    correct: 1,
    explanation: "Документы и встречи — инструменты, а не цель. PM работает ради результата для пользователей и бизнеса.",
  },
  {
    question: "Что такое MVP и зачем он нужен?",
    options: [
      "Максимально важный продукт с полным функционалом",
      "Простейшая версия, чтобы проверить, правильно ли мы поняли проблему",
      "Маркетинговая стратегия для продвижения",
      "Тестирование скорости серверов",
    ],
    correct: 1,
    explanation: "MVP нужен, чтобы потратить минимум времени и денег на проверку гипотезы. Не строить замок — проверить, нужен ли замок вообще.",
  },
  {
    question: "Разработчик говорит: «Это сложно, давай сделаем проще». Что делает PM?",
    options: [
      "Требует сделать как задумано — он же заказчик",
      "Понимает аргументы, оценивает компромисс и находит решение, которое устроит и пользователей, и команду",
      "Увольняет разработчика",
      "Соглашается на упрощение без обсуждения",
    ],
    correct: 1,
    explanation: "PM не диктует — он находит баланс между качеством, сроками и ресурсами. Уважать экспертизу команды — ключевой навык.",
  },
  {
    question: "Как PM решает, что делать первым?",
    options: [
      "По личным предпочтениям",
      "Смотрит на Impact vs Effort — что даст максимум при минимуме усилий",
      "Делает всё сразу",
      "Ждёт, пока попросит CEO",
    ],
    correct: 1,
    explanation: "PM использует фреймворки приоритизации: Impact vs Effort, RICE, MoSCoW. Не угадывает — считает.",
  },
  {
    question: "Зачем PM интервьюирует пользователей?",
    options: [
      "Чтобы похвастаться новым функционалом",
      "Чтобы услышать реальные проблемы — а не придумать их за закрытыми дверями",
      "Для отчёта руководству",
      "Пользователи не знают, чего хотят",
    ],
    correct: 1,
    explanation: "Интервью — способ узнать правду. Людиoften не могут описать решение, но отлично описывают боль. PM слышит боль.",
  },
  {
    question: "PM запустил фичу, а метрики не выросли. Что дальше?",
    options: [
      "Скрывает результаты и ждёт, пока все забудут",
      "Анализирует данные, формулирует гипотезу и запускает следующий эксперимент",
      "Винит разработчиков в плохой реализации",
      "Удаляет фичу и делает новую",
    ],
    correct: 1,
    explanation: "Провал — это данные. PM анализирует, почему не сработало, и строит следующую гипотезу. Вот что значит «продуктовый подход».",
  },
  {
    question: "PM руководит командой или влияет без полномочий?",
    options: [
      "Руководит — PM отвечает за всех",
      "Влияет через экспертизу, данные и доверие — формального руководства нет",
      "PM не взаимодействует с командой",
      "Команда руководит PM",
    ],
    correct: 1,
    explanation: "PM работает без формальной власти. Он влияет через аргументы, данные и уважение к команде. Лидерство без позиции — hardest skill.",
  },
];

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
    setSubmitted(true);
  };

  const handleNext = () => {
    setSubmitted(false);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setSubmitted(false);
  };

  const correctCount = answers.filter((a, i) => a === questions[i].correct).length;
  const percentage = Math.round((correctCount / questions.length) * 100);

  const getResult = () => {
    if (percentage >= 85) return { title: "Ты мыслишь как PM!", color: "#00d4aa" };
    if (percentage >= 60) return { title: "Хорошее понимание — есть куда расти", color: "#38bdf8" };
    return { title: "Начни с основ — и повтори тест", color: "#f97316" };
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Result
          icon={<TrophyOutlined style={{ color: result.color }} />}
          title={<span style={{ color: "var(--color-on)" }}>{result.title}</span>}
          subTitle={
            <div>
              <p style={{ color: "var(--color-muted)" }}>
                Правильных ответов: <span style={{ color: "#00d4aa", fontWeight: "bold" }}>{correctCount}</span> из {questions.length}
              </p>
              <Progress
                percent={percentage}
                strokeColor={result.color}
                railColor="var(--color-line)"
                format={(p) => <span style={{ color: "var(--color-on)" }}>{p}%</span>}
              />
            </div>
          }
          extra={
            <div className="space-y-4">
              <Button type="primary" size="large" onClick={handleRestart} icon={<ReloadOutlined />}>
                Пройти ещё раз
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  const q = questions[currentQ];
  const isCorrect = answers[currentQ] === q.correct;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Интерактивный тест</Tag>
        <h1 className="text-3xl sm:text-4xl font-bold text-on mt-4">
          Проверь, понимаешь ли ты профессию
        </h1>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted text-sm">
            Вопрос {currentQ + 1} из {questions.length}
          </span>
          <span className="text-accent text-sm font-semibold">
            {Math.round(((currentQ) / questions.length) * 100)}%
          </span>
        </div>
        <Progress
          percent={Math.round(((currentQ + (submitted ? 1 : 0)) / questions.length) * 100)}
          strokeColor="#00d4aa"
          railColor="var(--color-line)"
          showInfo={false}
        />
      </div>

      <Card className="bg-card border-line mb-6">
        <h2 className="text-on text-lg font-semibold mb-6">{q.question}</h2>

        <Radio.Group
          onChange={(e) => handleAnswer(e.target.value)}
          value={answers[currentQ]}
          className="w-full"
          disabled={submitted}
        >
          <div className="space-y-3">
            {q.options.map((option, i) => {
              let borderClass = "border-line";
              if (submitted) {
                if (i === q.correct) borderClass = "border-accent bg-accent/10";
                else if (i === answers[currentQ] && i !== q.correct) borderClass = "border-red-500 bg-red-500/10";
              }

              return (
                <div
                  key={i}
                  className={`p-4 rounded-lg border ${borderClass} transition-all hover:border-accent/50 cursor-pointer`}
                >
                  <Radio value={i} className="w-full">
                    <span className="text-body">{option}</span>
                  </Radio>
                </div>
              );
            })}
          </div>
        </Radio.Group>

        {submitted && (
          <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-accent/10 border border-accent/30' : 'bg-red-500/10 border border-red-500/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircleOutlined className="text-accent text-lg" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-lg" />
              )}
              <span className={isCorrect ? 'text-accent font-semibold' : 'text-red-500 font-semibold'}>
                {isCorrect ? 'Верно!' : 'Нет'}
              </span>
            </div>
            <p className="text-muted text-sm">{q.explanation}</p>
          </div>
        )}
      </Card>

      {submitted && (
        <Button
          type="primary"
          size="large"
          block
          onClick={handleNext}
        >
          {currentQ < questions.length - 1 ? "Следующий вопрос" : "Показать результат"}
        </Button>
      )}
    </div>
  );
}
