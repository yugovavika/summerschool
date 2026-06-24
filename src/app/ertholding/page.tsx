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
        <h1 className="text-3xl sm:text-5xl font-bold text-on mt-4 mb-6">
          Почему именно ЭР-Телеком
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Крупный телеком-оператор. Миллионы пользователей. И задачи, где PM нужен по-настоящему — а не для галочки.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-accent/10 to-card border-line mb-12 p-6 sm:p-8">
        <div className="text-center">
          <WifiOutlined className="text-5xl text-accent mb-4" />
          <h2 className="text-2xl font-bold text-on mb-4">
            Миллионы людей. Один продукт. Твоя ответственность.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Люди каждый день пользуются мобильной связью, интернетом, ТВ. PM в ЭР-Телеком делает так, чтобы <span className="text-accent font-semibold">это работало без боли</span> — и приносило деньги компании.
          </p>
        </div>
      </Card>

      <h2 className="text-2xl font-bold text-on mb-8 text-center">Почему это важно</h2>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <RiseOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Масштаб влияния</h3>
            <p className="text-muted text-sm">
              Улучшил онбординг на 5% — и <span className="text-accent">500 000 человек</span> получили лучший опыт. Здесь твои решения реально меняют жизнь людей.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <RocketOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Реальные технологии</h3>
            <p className="text-muted text-sm">
              5G, умный дом, IPTV, цифровые сервисы. Здесь <span className="text-accent">нечем скучать</span> — задачи меняются быстрее, чем ты успеваешь устать.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <TeamOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Команда</h3>
            <p className="text-muted text-sm">
              Сильные инженеры, аналитики, дизайнеры. <span className="text-accent">Учишься каждый день</span> — просто работая с ними.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card className="bg-card border-line hover:border-accent/30 transition-all h-full">
            <SafetyCertificateOutlined className="text-2xl text-accent mb-3" />
            <h3 className="text-on font-semibold mb-2">Стабильность</h3>
            <p className="text-muted text-sm">
              Телеком — одна из самых стабильных отраслей. <span className="text-accent">Здесь всегда есть работа</span> и возможности для роста.
            </p>
          </Card>
        </Col>
      </Row>

      <Card className="bg-card border-line mt-12">
        <h3 className="text-on text-xl font-bold mb-4 text-center">Чем будешь заниматься</h3>
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
              <div className="text-center py-3 px-4 rounded-lg bg-base border border-line">
                <span className="text-accent text-sm font-medium">{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <Card className="bg-accent/10 border-accent/30 mt-12 text-center">
        <p className="text-on text-lg">
          Хочешь строить продукты, которыми пользуются миллионы?
          <br />
          <span className="text-accent">ЭР-Телеком — лучшее место для старта.</span>
        </p>
      </Card>
    </div>
  );
}
