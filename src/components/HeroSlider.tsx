"use client";

import React, { useState, useEffect, useCallback } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Slide {
  title: string;
  fact: string;
  stat: string;
  statLabel: string;
}

const slides: Slide[] = [
  {
    title: "Связь с бизнесом",
    fact: "PM — единственный в команде, кто постоянно думает о деньгах. Не о коде, не о дизайне, а о том, как продукт приносит прибыль.",
    stat: "68%",
    statLabel: "компаний считают PM ключевой ролью",
  },
  {
    title: "Влияние на пользователей",
    fact: "Продуктовый менеджер влияет на жизнь миллионов людей — каждое решение о фиче меняет привычки и поведение пользователей.",
    stat: "3.2 млрд",
    statLabel: "пользователей используют продукты PM",
  },
  {
    title: "Деньги",
    fact: "Средняя зарплата PM в России — от 200 000 руб. В международных компаниях — от $100 000 в год.",
    stat: "$135K",
    statLabel: "медиана зарплаты PM в мире",
  },
  {
    title: "Востребованность",
    fact: "PM — одна из самых быстрорастущих профессий в мире. Спрос на них растёт на 32% каждый год.",
    stat: "32%",
    statLabel: "рост спроса на PM в год",
  },
  {
    title: "Мультидисциплина",
    fact: "PM работает с аналитиками, дизайнерами, разработчиками, маркетологами и CEO. Это самая 'междусекционная' роль в компании.",
    stat: "5+",
    statLabel: "команд пересекает PM ежедневно",
  },
  {
    title: "Решения без полномочий",
    fact: "PM должен добиваться результатов через влияние, а не через власть. Никто тебе не подчиняется — но все ждут решения.",
    stat: "90%",
    statLabel: "времени — коммуникация",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-base border border-line p-8 sm:p-12">
          <div className="absolute top-4 right-6 text-accent/20 text-6xl font-bold select-none">
            {String(current + 1).padStart(2, "0")}
          </div>

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium mb-4">
                Факт #{current + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-on mb-3">
                {slide.title}
              </h3>
              <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
                {slide.fact}
              </p>
            </div>

            <div className="flex items-end gap-8 mt-6">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-accent">
                  {slide.stat}
                </span>
                <p className="text-dim text-sm mt-1">
                  {slide.statLabel}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all cursor-pointer"
          >
            <LeftOutlined />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all cursor-pointer"
          >
            <RightOutlined />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === current
                  ? "bg-accent w-6"
                  : "bg-line hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
