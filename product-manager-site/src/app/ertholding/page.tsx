"use client";

import { Card, Row, Col, Tag } from "antd";
import {
  WifiOutlined,
  TeamOutlined,
  RiseOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
} from "@ant-design/icons";

export default function ErtholdingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Tag color="cyan" className="text-base px-4 py-1 mb-4">ЭР-Телеком Холдинг</Tag>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Почему ЭР-Телеком?
        </h1>
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          Как продуктовый менеджер помогает крупнейшему телеком-оператору создавать продукты нового поколения
        </p>
      </div>

      <Card className="bg-gradient-to-r from-[#00d4aa]/10 to-[#111827] border-[#1e3a4a] mb-12 p-6 sm:p-8">
        <div className="text-center">
          <WifiOutlined className="text-5xl text-[#00d4aa] mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Миллионы пользователей. Один продукт.
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            ЭР-Телеком Холдинг — это <span className="text-[#00d4aa] font-semibold">крупнейший телеком-оператор</span>, продуктами которого пользуются
            миллионы людей каждый день. Продуктовый менеджер здесь — это человек,
            который делает эти продукты <span className="text-[#00d4aa] font-semibold">удобнее, быстрее и приятнее</span>.
          </p>
        </div>
      </Card>

      <h2 className="text-2xl font-bold text-white mb-8 text-center">Почему PM здесь — это важно</h2>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <RiseOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Масштаб влияния</h3>
            <p className="text-[#94a3b8] text-sm">
              Каждое решение PM влияет на <span className="text-[#00d4aa]">миллионы пользователей</span>.
              Улучшил онбординг на 5% — и 500 000 человек получили лучший опыт.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <RocketOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Инновации в телекоме</h3>
            <p className="text-[#94a3b8] text-sm">
              5G, умный дом, IPTV, цифровые сервисы — всё это нуждается в
              <span className="text-[#00d4aa]"> продуктовом подходе</span> к разработке.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <TeamOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Команда профессионалов</h3>
            <p className="text-[#94a3b8] text-sm">
              Работа с сильными инженерами, аналитиками и дизайнерами.
              <span className="text-[#00d4aa]"> Учишься каждый день</span> от лучших в индустрии.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/30 transition-all h-full">
            <SafetyCertificateOutlined className="text-2xl text-[#00d4aa] mb-3" />
            <h3 className="text-white font-semibold mb-2">Стабильность и рост</h3>
            <p className="text-[#94a3b8] text-sm">
              Телеком — одна из самых стабильных отраслей. Здесь всегда будут
              <span className="text-[#00d4aa]"> новые задачи и возможности для карьеры</span>.
            </p>
          </Card>
        </Col>
      </Row>

      <Card className="bg-[#111827] border-[#1e3a4a] mt-12">
        <h3 className="text-white text-xl font-bold mb-4 text-center">Продукты ЭР-Телеком</h3>
        <Row gutter={[16, 16]}>
          {[
            "Мобильная связь",
            "Домашний интернет",
            "IPTV и ТВ",
            "Умный дом",
            "Облачные сервисы",
            "Мобильное приложение",
            "Личный кабинет",
            "B2B решения",
          ].map((item, i) => (
            <Col xs={12} sm={8} key={i}>
              <div className="text-center py-3 px-4 rounded-lg bg-[#0a0e17] border border-[#1e3a4a]">
                <span className="text-[#00d4aa] text-sm font-medium">{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <Card className="bg-[#00d4aa]/10 border-[#00d4aa]/30 mt-12 text-center">
        <p className="text-white text-lg">
          🚀 Хочешь работать над продуктами, которыми пользуются миллионы?
          <br />
          <span className="text-[#00d4aa]">ЭР-Телеком Холдинг — лучшее место для старта.</span>
        </p>
      </Card>
    </div>
  );
}
