"use client";

import { Card, Row, Col, Tag } from "antd";
import {
  FieldTimeOutlined,
  TeamOutlined,
  BarChartOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  SmileOutlined,
  FundOutlined,
} from "@ant-design/icons";

const tasks = [
  {
    icon: <FieldTimeOutlined className="text-2xl" />,
    title: "Интервью с пользователями",
    desc: "Проводишь интервью, чтобы понять боли пользователей. Узнаёшь, что их злит, радует и заставляет уходить к конкурентам.",
    tag: "Исследования",
  },
  {
    icon: <BarChartOutlined className="text-2xl" />,
    title: "Анализ метрик",
    desc: "Смотришь на графики, конверсию, retention. Понимаешь, почему люди не доходят до конца и что с этим делать.",
    tag: "Аналитика",
  },
  {
    icon: <FileTextOutlined className="text-2xl" />,
    title: "Составление бэклога",
    desc: "Создаёшь задачи для команды: пишешь user stories, критерии приёмки, приоритизируешь по важности.",
    tag: "Планирование",
  },
  {
    icon: <TeamOutlined className="text-2xl" />,
    title: "Общение с командой",
    desc: "Объясняешь разработчикам, зачем нужна фича. Согласовываешь с дизайнером UX. Договариваешься с бизнесом о приоритетах.",
    tag: "Коммуникация",
  },
  {
    icon: <ThunderboltOutlined className="text-2xl" />,
    title: "Запуск и тестирование",
    desc: "Следишь за разработкой, проводишь QA, запускаешь A/B тесты. Убеждаёшься, что всё работает как нужно.",
    tag: "Доставка",
  },
  {
    icon: <FundOutlined className="text-2xl" />,
    title: "Поиск инсайтов",
    desc: "После запуска анализируешь данные. Понимаешь, что получилось, а что нет. Формируешь гипотезы для следующих итераций.",
    tag: "Рост",
  },
  {
    icon: <SmileOutlined className="text-2xl" />,
    title: "Roadmap продукта",
    desc: "Составляешь план развития продукта на квартал и год. Связываешь бизнес-цели с потребностями пользователей.",
    tag: "Стратегия",
  },
];

export default function TasksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Рабочие задачи</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Что делает PM каждый день?
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          7 ключевых задач, которые продуктовый менеджер решает регулярно
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {tasks.map((task, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/50 transition-all hover:-translate-y-1 h-full"
              hoverable
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/20 flex items-center justify-center text-[#00d4aa]">
                  {task.icon}
                </div>
                <Tag color="cyan" className="text-xs">{task.tag}</Tag>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{task.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{task.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="bg-[#111827] border-[#1e3a4a] mt-12">
        <h3 className="text-white text-xl font-bold mb-4 text-center">
          Интересный факт
        </h3>
        <p className="text-[#94a3b8] text-center text-base">
          По данным опросов, продуктовые менеджеры тратят <span className="text-[#00d4aa] font-semibold">~40% времени</span> на коммуникацию
          и <span className="text-[#00d4aa] font-semibold">~30% на анализ данных</span>.
          Остальное — на стратегию и планирование.
        </p>
      </Card>
    </div>
  );
}
