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
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          Что делает продуктовый менеджер?
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Отвечает на три вопроса: <span className="text-accent font-semibold">что</span> строить, <span className="text-accent font-semibold">для кого</span> и <span className="text-accent font-semibold">как</span> проверить, что получилось.
        </p>
      </div>

      <Card className="bg-card border-line mb-12 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-on mb-6 text-center">Аналогия</h2>
        <div className="text-muted text-base leading-relaxed space-y-4">
          <p>
            Представь, что открываешь <span className="text-accent">кафе</span>. Ты не строишь здание просто так — сначала выясняешь:
          </p>
          <ul className="list-none space-y-3 ml-0">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span><strong className="text-on">Где живут твои гости?</strong> — чтобы кафе было рядом</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span><strong className="text-on">Что они хотят есть?</strong> — чтобы меню было вкусным</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span><strong className="text-on">Сколько готовы платить?</strong> — чтобы цена была справедливой</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span><strong className="text-on">Чем отличаешься от конкурентов?</strong> — чтобы приходили к тебе</span>
            </li>
          </ul>
          <p className="text-on font-semibold text-lg">
            PM делает то же самое — только для приложений, сайтов и сервисов.
          </p>
        </div>
      </Card>

      <h2 className="text-2xl font-bold text-on mb-8 text-center">Конкретно — чем занимается</h2>

      <Row gutter={[24, 24]}>
        {[
          {
            icon: <SearchOutlined className="text-2xl" />,
            title: "Исследует",
            desc: "Проводит интервью, смотрит на данные, находит реальные боли пользователей — а не те, которые придумал в голове",
          },
          {
            icon: <AimOutlined className="text-2xl" />,
            title: "Ставит цели",
            desc: "Определяет, по каким метрикам будут мерить успех: конверсия, удержание, NPS — что именно должно вырасти",
          },
          {
            icon: <LineChartOutlined className="text-2xl" />,
            title: "Приоритизирует",
            desc: "Из десятка задач выбирает ту, которая даст максимальный результат для бизнеса и пользователей прямо сейчас",
          },
          {
            icon: <MessageOutlined className="text-2xl" />,
            title: "Коммуницирует",
            desc: "Объясняет дизайнерам как, разработчикам зачем, а бизнесу — когда будет готово и сколько стоит",
          },
          {
            icon: <ThunderboltOutlined className="text-2xl" />,
            title: "Запускает",
            desc: "Ведёт от идеи до релиза: следит за разработкой, тестирует, собирает обратную связь и запускает",
          },
        ].map((item, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card className="bg-card border-line hover:border-accent/50 transition-all h-full">
              <div className="text-accent mb-3">{item.icon}</div>
              <h3 className="text-on text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="bg-accent/10 border-accent/30 mt-12 text-center">
        <p className="text-on text-lg">
          💡 <strong>Ключевая мысль:</strong> PM — это не руководитель. Это человек, который <span className="text-accent">решает проблемы</span> пользователей и приносит <span className="text-accent">деньги</span> бизнесу.
        </p>
      </Card>
    </div>
  );
}
