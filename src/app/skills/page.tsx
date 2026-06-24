"use client";

import { Card, Row, Col, Tag, Progress, Divider } from "antd";
import {
  CodeOutlined,
  LineChartOutlined,
  ApiOutlined,
  HighlightOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  HeartOutlined,
  MessageOutlined,
  BulbOutlined,
  TeamOutlined,
  ExperimentOutlined,
  FlagOutlined,
} from "@ant-design/icons";

const hardSkills = [
  { icon: <LineChartOutlined />, name: "Аналитика данных", desc: "Google Analytics, Amplitude, Mixpanel — чтобы видеть поведение пользователей", level: 80 },
  { icon: <HighlightOutlined />, name: "Базовый UX/UI", desc: "Figma — чтобы общаться с дизайнером на одном языке", level: 60 },
  { icon: <CodeOutlined />, name: "Техническая грамотность", desc: "Понимание API, баз данных, архитектуры — чтобы не говорить ерунду", level: 55 },
  { icon: <DatabaseOutlined />, name: "SQL", desc: "Запросы к базе данных — чтобы самому вытаскивать нужные цифры", level: 50 },
  { icon: <ApiOutlined />, name: "Jira / Confluence", desc: "Управление задачами и документацией — чтобы команда не потерялась", level: 70 },
  { icon: <GlobalOutlined />, name: "A/B тестирование", desc: "Проектирование экспериментов — чтобы проверять гипотезы, а не гадать", level: 65 },
  { icon: <LineChartOutlined />, name: "Метрики продукта", desc: "DAU, MAU, Retention, LTV, CAC, NPS — чтобы понимать здоровье продукта", level: 75 },
];

const softSkills = [
  { icon: <MessageOutlined />, name: "Коммуникация", desc: "Объясняешь сложное простым языком — и тебя понимают", level: 90 },
  { icon: <BulbOutlined />, name: "Стратегическое мышление", desc: "Видишь продукт на 6-12 месяцев вперёд, а не только текущий спринт", level: 80 },
  { icon: <TeamOutlined />, name: "Лидерство без полномочий", desc: "Влияешь на команду без формального руководства — через экспертизу и доверие", level: 85 },
  { icon: <HeartOutlined />, name: "Эмпатия", desc: "Понимаешь, что чувствуют пользователи — а не только что они говорят", level: 85 },
  { icon: <ExperimentOutlined />, name: "Гибкость", desc: "Готов менять план, когда данные говорят, что ты был неправ", level: 75 },
  { icon: <FlagOutlined />, name: "Приоритизация", desc: "Выбираешь главное из десятков задач — и не тратишь время на мелочи", level: 80 },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Навыки</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          Что нужно знать и уметь
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Без этих навыков PM превращается в менеджера встреч. Вот что реально нужно.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
          <CodeOutlined /> Hard Skills
        </h2>
        <Row gutter={[16, 16]}>
          {hardSkills.map((skill, i) => (
            <Col xs={24} sm={12} key={i}>
              <Card className="bg-card border-line hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-on font-semibold text-sm m-0">{skill.name}</h4>
                    <p className="text-muted text-xs m-0">{skill.desc}</p>
                  </div>
                </div>
                <Progress percent={skill.level} strokeColor="#00d4aa" railColor="var(--color-line)" showInfo={false} size="small" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider className="border-line" />

      <div>
        <h2 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
          <HeartOutlined /> Soft Skills
        </h2>
        <Row gutter={[16, 16]}>
          {softSkills.map((skill, i) => (
            <Col xs={24} sm={12} key={i}>
              <Card className="bg-card border-line hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-on font-semibold text-sm m-0">{skill.name}</h4>
                    <p className="text-muted text-xs m-0">{skill.desc}</p>
                  </div>
                </div>
                <Progress percent={skill.level} strokeColor="#00d4aa" railColor="var(--color-line)" showInfo={false} size="small" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Card className="bg-accent/10 border-accent/30 mt-12 text-center">
        <p className="text-on">
          💡 <strong>Реальность:</strong> Никто не приходит на позицию с 100% навыками. Начни с базы — 50% в SQL уже дают преимущество перед большинством кандидатов.
        </p>
      </Card>
    </div>
  );
}
