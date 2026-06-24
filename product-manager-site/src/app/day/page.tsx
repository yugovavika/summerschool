"use client";

import { Card, Tag, Row, Col } from "antd";
import {
  CoffeeOutlined,
  TeamOutlined,
  BarChartOutlined,
  EditOutlined,
  BulbOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const daySchedule = [
  {
    time: "09:00 — 09:30",
    title: "Утренний обзор",
    desc: "Проверяю метрики в Amplitude: что произошло за ночь. Конверсия в онбординг выросла на 2% после вчерашних изменений.",
    icon: <CoffeeOutlined />,
    color: "#00d4aa",
  },
  {
    time: "09:30 — 10:00",
    title: "Стендап команды",
    desc: "Команда рассказывает, что сделала вчера и что планирует сегодня. Я снимаю блокеры: уточняю требования к фиче, отвечаю на вопросы.",
    icon: <TeamOutlined />,
    color: "#38bdf8",
  },
  {
    time: "10:00 — 11:30",
    title: "Интервью с пользователем",
    desc: "Провожу zoom-интервью с пользователем, который жалуется на сложный процесс оплаты. Записываю инсайты в Notion.",
    icon: <EditOutlined />,
    color: "#a78bfa",
  },
  {
    time: "11:30 — 12:00",
    title: "Анализ данных",
    desc: "Пишу SQL-запрос: выясняю, сколько пользователей отваливаются на шаге выбора тарифа. Оказывается, 40% — это слишком много.",
    icon: <BarChartOutlined />,
    color: "#f97316",
  },
  {
    time: "12:00 — 13:00",
    title: "Обед",
    desc: "Обедаю с дизайнером. Обсуждаем, как упростить экран выбора тарифа. Генерируем 3 идеи.",
    icon: <CoffeeOutlined />,
    color: "#00d4aa",
  },
  {
    time: "13:00 — 14:30",
    title: "Приоритизация бэклога",
    desc: "Собираю все задачи из разных источников и ранжирую по Impact vs Effort. Определяю, что делаем в первую очередь.",
    icon: <BulbOutlined />,
    color: "#fbbf24",
  },
  {
    time: "14:30 — 16:00",
    title: "Совещание со стейкхолдерами",
    desc: "Показываю CEO и CTO результаты A/B теста. Решаем запустить новую фичу для всех пользователей.",
    icon: <TeamOutlined />,
    color: "#38bdf8",
  },
  {
    time: "16:00 — 17:30",
    title: "Работа с документацией",
    desc: "Пишу спецификацию для нового экрана онбординга. Определяю user stories и критерии приёмки для разработчиков.",
    icon: <EditOutlined />,
    color: "#a78bfa",
  },
  {
    time: "17:30 — 18:00",
    title: "Итоги дня",
    desc: "Обновляю Roadmap, записываю инсайты в дневник. Завтра нужно проверить результаты нового онбординга.",
    icon: <HomeOutlined />,
    color: "#00d4aa",
  },
];

export default function DayPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Один день</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          День из жизни PM
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          Вот как выглядит типичный рабочий день продуктового менеджера в телеком-компании
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#1e3a4a]" />

        <div className="space-y-6">
          {daySchedule.map((item, i) => (
            <div key={i} className="relative pl-12 sm:pl-20">
              <div
                className="absolute left-2 sm:left-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: item.color, background: "#0a0e17" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>

              <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-[#00d4aa] font-mono text-sm font-semibold">
                    {item.time}
                  </span>
                  <h3 className="text-white font-semibold text-base m-0">{item.title}</h3>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed m-0">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-[#111827] border-[#1e3a4a] mt-12">
        <h3 className="text-white text-xl font-bold mb-4 text-center">Ключевые наблюдения</h3>
        <Row gutter={[16, 16]}>
          {[
            { stat: "~40%", label: "времени на коммуникацию" },
            { stat: "~25%", label: "на анализ данных" },
            { stat: "~20%", label: "на документацию" },
            { stat: "~15%", label: "на стратегию" },
          ].map((item, i) => (
            <Col xs={12} sm={6} key={i}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00d4aa]">{item.stat}</div>
                <div className="text-[#94a3b8] text-xs mt-1">{item.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}
