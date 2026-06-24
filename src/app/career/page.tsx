"use client";

import { Card, Timeline, Tag, Row, Col } from "antd";
import {
  BookOutlined,
  ReadOutlined,
  BulbOutlined,
} from "@ant-design/icons";

export default function CareerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">Карьера</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          Как войти в профессию с нуля
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Пошаговый план. Не обещаю, что будет легко — но путь рабочий.
        </p>
      </div>

      <div className="mb-16">
        <Timeline
          mode="start"
          items={[
            {
              icon: <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">1</div>,
              content: (
                <Card className="bg-card border-line">
                  <h3 className="text-on font-bold text-lg">Изучи основы</h3>
                  <p className="text-muted text-sm mt-2">
                    Прочитай &quot;Inspired&quot; Марти Кагана — это библия PM. Пройди курс &quot;Digital Product Management&quot; на Coursera. Не обязательно заканчивать всё — хватит 70%, чтобы понять азов.
                  </p>
                  <Tag color="cyan" className="mt-3">2-3 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">2</div>,
              content: (
                <Card className="bg-card border-line">
                  <h3 className="text-on font-bold text-lg">Сделай реальный проект</h3>
                  <p className="text-muted text-sm mt-2">
                    Возьми приложение из универа и сделай редизайн: проведи 10 интервью, напиши PRD, нарисуй прототип в Figma. Это станет первым кейсом в портфолио — и ты поймёшь, нравится ли тебе процесс.
                  </p>
                  <Tag color="cyan" className="mt-3">1-2 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">3</div>,
              content: (
                <Card className="bg-card border-line">
                  <h3 className="text-on font-bold text-lg">Освой инструменты</h3>
                  <p className="text-muted text-sm mt-2">
                    Jira, Confluence, Figma, SQL — минимум, чтобы ты мог работать без паники. Не нужно быть экспертом, но ты должен понимать, о чём говорит команда.
                  </p>
                  <Tag color="cyan" className="mt-3">1 месяц</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">4</div>,
              content: (
                <Card className="bg-card border-line">
                  <h3 className="text-on font-bold text-lg">Найди стажировку</h3>
                  <p className="text-muted text-sm mt-2">
                    Подавайся в ЭР-Телеком Холдинг и другие компании. С собой — портфолио с кейсом из шага 2. Интервьюеры хотят видеть, как ты думаешь, а не что ты знаешь наизусть.
                  </p>
                  <Tag color="cyan" className="mt-3">1-3 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">5</div>,
              content: (
                <Card className="bg-card border-line">
                  <h3 className="text-on font-bold text-lg">Расти дальше</h3>
                  <p className="text-muted text-sm mt-2">
                    Product-митапы, Habr, Product Hunt. А главное — найди ментора. Один хороший наставник сэкономит тебе год блужданий.
                  </p>
                  <Tag color="cyan" className="mt-3">Постоянно</Tag>
                </Card>
              ),
            },
          ]}
        />
      </div>

      <h2 className="text-2xl font-bold text-on mb-8 text-center">Где черпать знания</h2>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={8}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <BookOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Книги</h3>
            <ul className="text-muted text-sm space-y-1 list-none">
              <li>• Inspired — Марти Кагана</li>
              <li>• Lean Product Playbook — Дэн Олсен</li>
              <li>• Product-Led Growth — Уэс Буш</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <ReadOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Курсы</h3>
            <ul className="text-muted text-sm space-y-1 list-none">
              <li>• Coursera — Product Management</li>
              <li>• Productstar — Академия PM</li>
              <li>• Netology — Продуктовый менеджер</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <BulbOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Сообщества</h3>
            <ul className="text-muted text-sm space-y-1 list-none">
              <li>• Product Community (Telegram)</li>
              <li>• Product Hunt</li>
              <li>• Хабр — тег «Продукт»</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
