"use client";

import { Button, Card, Row, Col } from "antd";
import {
  ArrowRightOutlined,
  BulbOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const features = [
  {
    icon: <BulbOutlined className="text-3xl text-[#00d4aa]" />,
    title: "Понимаешь пользователей",
    desc: "Узнаёшь, чего люди хотят на самом деле",
  },
  {
    icon: <TeamOutlined className="text-3xl text-[#00d4aa]" />,
    title: "Командный игрок",
    desc: "Объединяешь дизайнеров, разработчиков и бизнес",
  },
  {
    icon: <TrophyOutlined className="text-3xl text-[#00d4aa]" />,
    title: "Создаёшь продукт",
    desc: "Воплощаешь идеи в то, чем пользуются миллионы",
  },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-block px-4 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-sm mb-6">
              Профессия будущего
            </div>
          </div>

          <h1 className="animate-fade-in-up opacity-0 animate-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-[#e2e8f0]">Продуктовый</span>
            <br />
            <span className="text-[#00d4aa]">менеджер</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
            Человек, который превращает идеи в продукты, которыми пользуются
            миллионы. Узнай, как это работает.
          </p>

          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="h-12 px-8 text-base font-medium"
              >
                Узнать подробнее
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                size="large"
                className="h-12 px-8 text-base font-medium border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa]/10"
              >
                Пройти тест
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <Row gutter={[24, 24]}>
            {features.map((f, i) => (
              <Col xs={24} sm={8} key={i}>
                <Card
                  className="animate-fade-in-up opacity-0 bg-[#111827] border-[#1e3a4a] hover:border-[#00d4aa]/50 transition-all hover:scale-105 h-full"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-white text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-[#94a3b8]">{f.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[#00d4aa]/10 to-[#111827] border-[#1e3a4a] text-center py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Готов узнать больше?
            </h2>
            <p className="text-[#94a3b8] mb-6 max-w-xl mx-auto">
              Пройди короткий тест и узнай, подходит ли тебе профессия
              продуктового менеджера
            </p>
            <Link href="/quiz">
              <Button type="primary" size="large" className="h-12 px-8">
                Пройти тест
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
