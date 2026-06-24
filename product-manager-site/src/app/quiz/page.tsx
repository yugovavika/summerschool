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
    question: "Какова главная задача продуктового менеджера?",
    options: [
      "Написать как можно больше кода",
      "Понять проблемы пользователей и решить их через продукт",
      "Управлять отделом маркетинга",
      "Создавать красивые интерфейсы",
    ],
    correct: 1,
    explanation: "PM фокусируется на проблемах пользователей и бизнес-целях, а не на коде или дизайне.",
  },
  {
    question: "Что такое MVP?",
    options: [
      "Максимально важный продукт",
      "Минимально жизнеспособный продукт — простейшая версия для проверки гипотезы",
      "Маркетинговая воронка продаж",
      "Модель визуализации проекта",
    ],
    correct: 1,
    explanation: "MVP — это самая простая версия продукта, которая позволяет проверить, нужно ли решение пользователям.",
  },
  {
    question: "Что делает PM на утреннем стендапе?",
    options: [
      "Докладывает директору о проделанной работе",
      "Снимает блокеры с команды и协调ирует задачи",
      "Пишет новый код для проекта",
      "Проводит интервью с клиентами",
    ],
    correct: 1,
    explanation: "На стендапе PM помогает команде: убирает препятствия и协调ирует, чтобы все двигались вперёд.",
  },
  {
    question: "Как PM приоритизирует задачи?",
    options: [
      "По личным предпочтениям",
      "По Impact vs Effort — важность vs сложность",
      "По количеству жалоб клиентов",
      "По стоимости разработки",
    ],
    correct: 1,
    explanation: "PM использует фреймворки приоритизации: Impact vs Effort, RICE, MoSCoW и другие.",
  },
  {
    question: "Зачем PM проводит интервью с пользователями?",
    options: [
      "Чтобы рассказать о новом продукте",
      "Чтобы понять реальные боли и потребности",
      "Чтобы продать услугу",
      "Чтобы проверить стабильность серверов",
    ],
    correct: 1,
    explanation: "Интервью помогают выяснить реальные проблемы, а не предположения о них.",
  },
  {
    question: "Что такое A/B тестирование?",
    options: [
      "Тестирование двух версий интерфейса на разных группах пользователей",
      "Проверка качества кода",
      "Сравнение двух программистов",
      "Тестирование скорости сайта",
    ],
    correct: 0,
    explanation: "A/B тестирование — это метод сравнения двух вариантов, чтобы узнать, какой работает лучше.",
  },
  {
    question: "Кому подчиняется продуктовый менеджер?",
    options: [
      "Директору по маркетингу",
      "Руководителю проектов",
      "Никому — PM влияет через экспертизу, а не через формальную власть",
      "Главному инженеру",
    ],
    correct: 2,
    explanation: "PM работает без формальной власти над командой — он влияет через данные и коммуникацию.",
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
    if (percentage >= 85) return { title: "Ты — born to be PM! 🎯", color: "#00d4aa" };
    if (percentage >= 60) return { title: "Хороший потенциал! 🚀", color: "#38bdf8" };
    return { title: "Начни с основ 📚", color: "#f97316" };
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Result
          icon={<TrophyOutlined style={{ color: result.color }} />}
          title={<span style={{ color: "#fff" }}>{result.title}</span>}
          subTitle={
            <div>
              <p style={{ color: "#94a3b8" }}>
                Ты ответил правильно на <span style={{ color: "#00d4aa", fontWeight: "bold" }}>{correctCount}</span> из {questions.length} вопросов
              </p>
              <Progress
                percent={percentage}
                strokeColor={result.color}
                railColor="#1e3a4a"
                format={(p) => <span style={{ color: "#fff" }}>{p}%</span>}
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">
          Тест на понимание профессии
        </h1>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#94a3b8] text-sm">
            Вопрос {currentQ + 1} из {questions.length}
          </span>
          <span className="text-[#00d4aa] text-sm font-semibold">
            {Math.round(((currentQ) / questions.length) * 100)}%
          </span>
        </div>
        <Progress
          percent={Math.round(((currentQ + (submitted ? 1 : 0)) / questions.length) * 100)}
          strokeColor="#00d4aa"
          railColor="#1e3a4a"
          showInfo={false}
        />
      </div>

      <Card className="bg-[#111827] border-[#1e3a4a] mb-6">
        <h2 className="text-white text-lg font-semibold mb-6">{q.question}</h2>

        <Radio.Group
          onChange={(e) => handleAnswer(e.target.value)}
          value={answers[currentQ]}
          className="w-full"
          disabled={submitted}
        >
          <div className="space-y-3">
            {q.options.map((option, i) => {
              let borderClass = "border-[#1e3a4a]";
              if (submitted) {
                if (i === q.correct) borderClass = "border-[#00d4aa] bg-[#00d4aa]/10";
                else if (i === answers[currentQ] && i !== q.correct) borderClass = "border-red-500 bg-red-500/10";
              }

              return (
                <div
                  key={i}
                  className={`p-4 rounded-lg border ${borderClass} transition-all hover:border-[#00d4aa]/50 cursor-pointer`}
                >
                  <Radio value={i} className="w-full">
                    <span className="text-[#e2e8f0]">{option}</span>
                  </Radio>
                </div>
              );
            })}
          </div>
        </Radio.Group>

        {submitted && (
          <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-[#00d4aa]/10 border border-[#00d4aa]/30' : 'bg-red-500/10 border border-red-500/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircleOutlined className="text-[#00d4aa] text-lg" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-lg" />
              )}
              <span className={isCorrect ? 'text-[#00d4aa] font-semibold' : 'text-red-500 font-semibold'}>
                {isCorrect ? 'Правильно!' : 'Неправильно'}
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm">{q.explanation}</p>
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
