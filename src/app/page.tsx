"use client";

import { Button, Card, Row, Col } from "antd";
import {
  ArrowRightOutlined,
  BulbOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const features = [
  {
    icon: <BulbOutlined className="text-3xl text-accent" />,
    title: "Находишь, что построить",
    desc: "Изучаешь пользователей, находишь их проблемы и превращаешь в задачи для команды",
  },
  {
    icon: <TeamOutlined className="text-3xl text-accent" />,
    title: "Собираешь команду вокруг",
    desc: "Объясняешь разработчикам зачем, дизайнерам как, а бизнесу — сколько это принесёт",
  },
  {
    icon: <TrophyOutlined className="text-3xl text-accent" />,
    title: "Запускаешь и считаешь",
    desc: "Ведёшь продукт до релиза, смотришь на метрики и решаешь, что делать дальше",
  },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm mb-6">
              Профессия, где решения превращаются в продукты
            </div>
          </div>

          <h1 className="animate-fade-in-up opacity-0 animate-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-body">Продуктовый</span>
            <br />
            <span className="text-accent">менеджер</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
            Человек, который решает, <strong className="text-on">что</strong> строить, <strong className="text-on">для кого</strong> и <strong className="text-on">зачем</strong>. Без него команда гоняется за фичами, а бизнес не получает деньги.
          </p>

          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="h-12 px-8 text-base font-medium"
              >
                Разобраться за 5 минут
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                size="large"
                className="h-12 px-8 text-base font-medium border-accent text-accent hover:bg-accent/10"
              >
                Пройти тест
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-8">
        <HeroSlider />
      </div>

      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Row gutter={[24, 24]}>
            {features.map((f, i) => (
              <Col xs={24} sm={8} key={i}>
                <Card
                  className="animate-fade-in-up opacity-0 bg-card border-line hover:border-accent/50 transition-all hover:scale-105 h-full"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-on text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted">{f.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-accent/10 to-card border-line text-center py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-on mb-4">
              Узнай, подойдёт ли тебе
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              7 вопросов — и ты поймёшь, совпадают ли твои сильные стороны с тем, что нужно PM
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
