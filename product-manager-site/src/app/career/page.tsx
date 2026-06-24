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
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Как начать карьеру студенту?
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          Пошаговый план, как войти в профессию с нуля
        </p>
      </div>

      <div className="mb-16">
        <Timeline
          mode="start"
          items={[
            {
              icon: <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center text-black font-bold text-sm">1</div>,
              content: (
                <Card className="bg-[#111827] border-[#1e3a4a]">
                  <h3 className="text-white font-bold text-lg">Изучи основы</h3>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    Прочитай &quot;Inspired&quot; Марти Кагана и &quot;Продуктовый менеджер&quot; Никиты Саура.
                    Пройди курсы на Coursera: &quot;Digital Product Management&quot; от University of Virginia.
                  </p>
                  <Tag color="cyan" className="mt-3">2-3 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center text-black font-bold text-sm">2</div>,
              content: (
                <Card className="bg-[#111827] border-[#1e3a4a]">
                  <h3 className="text-white font-bold text-lg">Запусти свой мини-проект</h3>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    Сделай редизайн приложения для университета. Проведи 10 интервью с одногруппниками.
                    Напиши product requirements и прототипируй в Figma.
                  </p>
                  <Tag color="cyan" className="mt-3">1-2 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center text-black font-bold text-sm">3</div>,
              content: (
                <Card className="bg-[#111827] border-[#1e3a4a]">
                  <h3 className="text-white font-bold text-lg">Освой инструменты</h3>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    Научись работать с Jira, Confluence, Figma, Google Analytics.
                    Основы SQL — чтобы ты мог сам анализировать данные.
                  </p>
                  <Tag color="cyan" className="mt-3">1 месяц</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center text-black font-bold text-sm">4</div>,
              content: (
                <Card className="bg-[#111827] border-[#1e3a4a]">
                  <h3 className="text-white font-bold text-lg">Найди стажировку</h3>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    Подавайся на стажировки в ЭР-Телеком Холдинг и другие компании.
                    Подготовь портфолио с case study твоего мини-проекта.
                  </p>
                  <Tag color="cyan" className="mt-3">1-3 месяца</Tag>
                </Card>
              ),
            },
            {
              icon: <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center text-black font-bold text-sm">5</div>,
              content: (
                <Card className="bg-[#111827] border-[#1e3a4a]">
                  <h3 className="text-white font-bold text-lg">Развивайся</h3>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    Участвуй в product-митапах, читай блоги Product Hunt, Habr.
                    Найди ментора в профессии — это ускорит рост в 3-5 раз.
                  </p>
                  <Tag color="cyan" className="mt-3">Постоянно</Tag>
                </Card>
              ),
            },
          ]}
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-8 text-center">Полезные ресурсы</h2>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={8}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <BookOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Книги</h3>
            <ul className="text-[#94a3b8] text-sm space-y-1 list-none">
              <li>• Inspired — Марти Каган</li>
              <li>• Lean Product Playbook — Дэн Олсен</li>
              <li>• Product-Led Growth — Уэс Буш</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <ReadOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Курсы</h3>
            <ul className="text-[#94a3b8] text-sm space-y-1 list-none">
              <li>• Coursera — Product Management</li>
              <li>• Productstar — Академия PM</li>
              <li>• Netology — Продуктовый менеджер</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <BulbOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Сообщества</h3>
            <ul className="text-[#94a3b8] text-sm space-y-1 list-none">
              <li>• Product Community (Telegram)</li>
              <li>• Product Hunt</li>
              <li>• Хабр — тег &quot;Продукт&quot;</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
