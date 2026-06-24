"use client";

import { Card, Row, Col, Tag } from "antd";
import {
  SearchOutlined,
  LineChartOutlined,
  MessageOutlined,
  AimOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Простыми словами</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Кто такой продуктовый менеджер?
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          Это человек, который решает <span className="text-[#00d4aa] font-semibold">какую проблему</span> решать, <span className="text-[#00d4aa] font-semibold">для кого</span> её решать и <span className="text-[#00d4aa] font-semibold">как</span> это сделать максимально эффективно.
        </p>
      </div>

      <Card className="bg-[#111827] border-[#1e3a4a] mb-12 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Аналогия из жизни</h2>
        <div className="text-[#94a3b8] text-base leading-relaxed space-y-4">
          <p>
            Представь, что ты хочешь открыть <span className="text-[#00d4aa]">кафе</span>. Ты не просто берёшь и строишь здание — ты сначала выясняешь:
          </p>
          <ul className="list-none space-y-3 ml-0">
            <li className="flex items-start gap-3">
              <span className="text-[#00d4aa] mt-1">→</span>
              <span><strong className="text-white">Где живут твои гости?</strong> — чтобы кафе было рядом</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d4aa] mt-1">→</span>
              <span><strong className="text-white">Что они хотят есть?</strong> — чтобы меню было вкусным</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d4aa] mt-1">→</span>
              <span><strong className="text-white">Сколько они готовы платить?</strong> — чтобы цена была справедливой</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d4aa] mt-1">→</span>
              <span><strong className="text-white">Что отличает тебя от конкурентов?</strong> — чтобы приходили именно к тебе</span>
            </li>
          </ul>
          <p className="text-white font-semibold text-lg">
            Продуктовый менеджер делает именно это — только для цифровых продуктов: приложений, сайтов, сервисов.
          </p>
        </div>
      </Card>

      <h2 className="text-2xl font-bold text-white mb-8 text-center">Чем он занимается?</h2>

      <Row gutter={[24, 24]}>
        {[
          {
            icon: <SearchOutlined className="text-2xl" />,
            title: "Исследует",
            desc: "Изучает пользователей: проводит интервью, анализирует данные, выясняет реальные боли",
          },
          {
            icon: <AimOutlined className="text-2xl" />,
            title: "Ставит цели",
            desc: "Определяет метрики успеха: что именно должно вырасти — конверсия, удержание, NPS",
          },
          {
            icon: <LineChartOutlined className="text-2xl" />,
            title: "Приоритизирует",
            desc: "Решает, что делать первым: из десятка задач выбирает самую важную для бизнеса и пользователей",
          },
          {
            icon: <MessageOutlined className="text-2xl" />,
            title: "Коммуницирует",
            desc: "Общается с дизайнерами, разработчиками, аналитиками и бизнесом — объясняет «зачем»",
          },
          {
            icon: <ThunderboltOutlined className="text-2xl" />,
            title: "Запускает",
            desc: "Ведёт продукт от идеи до релиза: следит за разработкой, тестирует, собирает обратную связь",
          },
        ].map((item, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/50 transition-all h-full">
              <div className="text-[#00d4aa] mb-3">{item.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-[#94a3b8] text-sm">{item.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="bg-[#00d4aa]/10 border-[#00d4aa]/30 mt-12 text-center">
        <p className="text-white text-lg">
          💡 <strong>Ключевая идея:</strong> Продуктовый менеджер — это не руководитель команды.
          Это человек, который <span className="text-[#00d4aa]">решает проблемы</span> пользователей
          и приносит <span className="text-[#00d4aa]">прибыль</span> бизнесу.
        </p>
      </Card>
    </div>
  );
}
