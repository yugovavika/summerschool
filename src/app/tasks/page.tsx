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
    desc: "Звонишь или встречаешься с реальными людьми. Узнаёшь, что их злит, радует и заставляет уйти к конкурентам. Не угадываешь — слышишь.",
    tag: "Исследования",
  },
  {
    icon: <BarChartOutlined className="text-2xl" />,
    title: "Смотришь на данные",
    desc: "Открываешь аналитику: конверсия, retention, точки отказа. Понимаешь, почему люди не доходят до конца и что конкретно мешает.",
    tag: "Аналитика",
  },
  {
    icon: <FileTextOutlined className="text-2xl" />,
    title: "Пишешь задачи для команды",
    desc: "Формулируешь user stories с критериями приёмки. Разработчик должен понять, что сделать. Дизайнер — как должно выглядеть.",
    tag: "Планирование",
  },
  {
    icon: <TeamOutlined className="text-2xl" />,
    title: "Снимаешь блокеры",
    desc: "Разработчик застрял — помогаешь. Дизайнер не уверен — направляешь. Бизнес требует «вчера» — объясняешь реальные сроки.",
    tag: "Коммуникация",
  },
  {
    icon: <ThunderboltOutlined className="text-2xl" />,
    title: "Ведёшь до релиза",
    desc: "Следишь за спринтом, проводишь QA, запускаешь A/B тесты. Убеждаёшься, что всё работает как задумано — прежде чем показать пользователям.",
    tag: "Доставка",
  },
  {
    icon: <FundOutlined className="text-2xl" />,
    title: "Анализируешь после запуска",
    desc: "Смотришь на цифры после релиза. Понимаешь, что получилось, а что нет. Формулируешь гипотезу для следующей итерации.",
    tag: "Рост",
  },
  {
    icon: <SmileOutlined className="text-2xl" />,
    title: "Держишь roadmap",
    desc: "Связываешь бизнес-цели с потребностями пользователей и расписываешь, что делаем на квартал вперёд. Чтобы все знали направление.",
    tag: "Стратегия",
  },
];

export default function TasksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Рабочие задачи</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          Что делает PM каждый день?
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          7 задач, которые повторяются каждую неделю. Ни одна из них — не «встречи ради встреч».
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {tasks.map((task, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              className="bg-card border-line hover:border-accent/50 transition-all hover:-translate-y-1 h-full"
              hoverable
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  {task.icon}
                </div>
                <Tag color="cyan" className="text-xs">{task.tag}</Tag>
              </div>
              <h3 className="text-on text-lg font-semibold mb-2">{task.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{task.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="bg-card border-line mt-12">
        <h3 className="text-on text-xl font-bold mb-4 text-center">
          Время — деньги
        </h3>
        <p className="text-muted text-center text-base">
          По данным опросов, PM тратит <span className="text-accent font-semibold">~40% времени</span> на разговоры с людьми
          и <span className="text-accent font-semibold">~30% на данные</span>.
          Остальное — стратегия и документация. Никакой магии — только работа с информацией.
        </p>
      </Card>
    </div>
  );
}
