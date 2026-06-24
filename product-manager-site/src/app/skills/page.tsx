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
  { icon: <LineChartOutlined />, name: "Аналитика данных", desc: "Google Analytics, Amplitude, Mixpanel", level: 80 },
  { icon: <HighlightOutlined />, name: "Базовый UX/UI", desc: "Figma, принципы проектирования интерфейсов", level: 60 },
  { icon: <CodeOutlined />, name: "Техническая грамотность", desc: "Понимание API, базы данных, архитектуры", level: 55 },
  { icon: <DatabaseOutlined />, name: "SQL", desc: "Умение писать запросы и работать с данными", level: 50 },
  { icon: <ApiOutlined />, name: "Jira / Confluence", desc: "Управление задачами и документацией", level: 70 },
  { icon: <GlobalOutlined />, name: "A/B тестирование", desc: "Проектирование и анализ экспериментов", level: 65 },
  { icon: <LineChartOutlined />, name: "Метрики продукта", desc: "DAU, MAU, Retention, LTV, CAC, NPS", level: 75 },
];

const softSkills = [
  { icon: <MessageOutlined />, name: "Коммуникация", desc: "Умение объяснить сложное простым языком", level: 90 },
  { icon: <BulbOutlined />, name: "Стратегическое мышление", desc: "Видение продукта на 6-12 месяцев вперёд", level: 80 },
  { icon: <TeamOutlined />, name: "Лидерство без полномочий", desc: "Влияние на команду без формального руководства", level: 85 },
  { icon: <HeartOutlined />, name: "Эмпатия", desc: "Понимание чувств и мотивов пользователей", level: 85 },
  { icon: <ExperimentOutlined />, name: "Гибкость", desc: "Готовность менять планы по новым данным", level: 75 },
  { icon: <FlagOutlined />, name: "Приоритизация", desc: "Умение выбрать главное из десятков задач", level: 80 },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Навыки</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Hard & Soft Skills
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          Что нужно знать и уметь, чтобы стать успешным продуктовым менеджером
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#00d4aa] mb-6 flex items-center gap-2">
          <CodeOutlined /> Hard Skills
        </h2>
        <Row gutter={[16, 16]}>
          {hardSkills.map((skill, i) => (
            <Col xs={24} sm={12} key={i}>
              <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#00d4aa] text-xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm m-0">{skill.name}</h4>
                    <p className="text-[#94a3b8] text-xs m-0">{skill.desc}</p>
                  </div>
                </div>
                <Progress percent={skill.level} strokeColor="#00d4aa" railColor="#1e3a4a" showInfo={false} size="small" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider className="border-[#1e3a4a]" />

      <div>
        <h2 className="text-2xl font-bold text-[#00d4aa] mb-6 flex items-center gap-2">
          <HeartOutlined /> Soft Skills
        </h2>
        <Row gutter={[16, 16]}>
          {softSkills.map((skill, i) => (
            <Col xs={24} sm={12} key={i}>
              <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#00d4aa] text-xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm m-0">{skill.name}</h4>
                    <p className="text-[#94a3b8] text-xs m-0">{skill.desc}</p>
                  </div>
                </div>
                <Progress percent={skill.level} strokeColor="#00d4aa" railColor="#1e3a4a" showInfo={false} size="small" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Card className="bg-[#00d4aa]/10 border-[#00d4aa]/30 mt-12 text-center">
        <p className="text-white">
          💡 <strong>Совет:</strong> Не нужно знать всё на 100%.
          Начни с базы и развивай навыки по мере опыта. Даже 60% в SQL — это уже преимущество.
        </p>
      </Card>
    </div>
  );
}
