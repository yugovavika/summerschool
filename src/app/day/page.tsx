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
    desc: "Открываю Amplitude: конверсия в онбординг выросла на 2%. Значит, вчерашние правки помогли. Фиксирую и иду дальше.",
    icon: <CoffeeOutlined />,
    color: "#00d4aa",
  },
  {
    time: "09:30 — 10:00",
    title: "Стендап",
    desc: "Команда говорит, что сделала и что будет. Я слушаю и снимаю блокеры: уточняю задачу, отвечаю на вопрос, убираю зависимость.",
    icon: <TeamOutlined />,
    color: "#38bdf8",
  },
  {
    time: "10:00 — 11:30",
    title: "Интервью с пользователем",
    desc: "Zoom-звонок. Человек жалуется на сложную оплату. Записываю цитату в Notion — «я просто хочу заплатить, а тут 5 шагов».",
    icon: <EditOutlined />,
    color: "#a78bfa",
  },
  {
    time: "11:30 — 12:00",
    title: "SQL-запрос",
    desc: "Считаю, сколько людей отваливаются на экране выбора тарифа. 40%. Это много. Нужно что-то менять — и это моя следующая задача.",
    icon: <BarChartOutlined />,
    color: "#f97316",
  },
  {
    time: "12:00 — 13:00",
    title: "Обед с дизайнером",
    desc: "За едой обсуждаем, как упростить экран. Рождается 3 идеи. Записываю — потом отберём одну для теста.",
    icon: <CoffeeOutlined />,
    color: "#00d4aa",
  },
  {
    time: "13:00 — 14:30",
    title: "Приоритизация",
    desc: "Собираю задачи из Jira, Intercom, мозгового шторма. Ранжирую по Impact vs Effort. Стопка внизу — откладываю. Сверху — делаю.",
    icon: <BulbOutlined />,
    color: "#fbbf24",
  },
  {
    time: "14:30 — 16:00",
    title: "Совещание со стейкхолдерами",
    desc: "Показываю результаты A/B теста CEO и CTO. Новый онбординг лучше на 18%. Решаем: запускаем для всех. Готовлю задачу в Jira.",
    icon: <TeamOutlined />,
    color: "#38bdf8",
  },
  {
    time: "16:00 — 17:30",
    title: "Спецификация",
    desc: "Пишу PRD для нового экрана: user stories, критерии приёмки, макеты. Завтра это уйдёт разработчику — он должен понять задачу без моей подсказки.",
    icon: <EditOutlined />,
    color: "#a78bfa",
  },
  {
    time: "17:30 — 18:00",
    title: "Итоги",
    desc: "Обновляю roadmap, записываю 3 инсайта дня. Завтра: проверить результаты онбординга и позвонить 2 пользователям.",
    icon: <HomeOutlined />,
    color: "#00d4aa",
  },
];

export default function DayPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Один день</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          День из жизни PM
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Как выглядит рабочий день в телеком-компании. Ни одной «стратегической сессии» ради галочки.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-line" />

        <div className="space-y-6">
          {daySchedule.map((item, i) => (
            <div key={i} className="relative pl-12 sm:pl-20">
              <div
                className="absolute left-2 sm:left-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: item.color, background: "var(--color-base)" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>

              <Card className="bg-card border-line hover:border-accent/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-accent font-mono text-sm font-semibold">
                    {item.time}
                  </span>
                  <h3 className="text-on font-semibold text-base m-0">{item.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed m-0">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-card border-line mt-12">
        <h3 className="text-on text-xl font-bold mb-4 text-center">Как распределяется время</h3>
        <Row gutter={[16, 16]}>
          {[
            { stat: "~40%", label: "разговоры с людьми" },
            { stat: "~25%", label: "данные и аналитика" },
            { stat: "~20%", label: "документация" },
            { stat: "~15%", label: "стратегия и планы" },
          ].map((item, i) => (
            <Col xs={12} sm={6} key={i}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{item.stat}</div>
                <div className="text-muted text-xs mt-1">{item.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}
